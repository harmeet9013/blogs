import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";
//
import { MONTHS } from "@/config";
//
import {
    uid,
    errorResponse,
    successResponse,
    getQueryFromRequest,
    getPaginationOptions,
} from "../utlities";
import { mediaModel } from "../models";
import { mediaUploadSchema } from "../schemas";
import { getFileType, uniqueNameKey } from "@/resources";

export const getMedia = async (req) => {
    try {
        let media_type = getQueryFromRequest(req, "media_type");
        let search_term = getQueryFromRequest(req, "search_term");

        let page_options = getPaginationOptions(req, !!search_term, 30);

        let items = await mediaModel
            .find({
                ...(!!search_term
                    ? {
                          $or: [
                              {
                                  name: {
                                      $regex: ".*" + search_term + ".*",
                                      $options: "i",
                                  },
                              },
                              {
                                  url: {
                                      $regex: ".*" + search_term + ".*",
                                      $options: "i",
                                  },
                              },
                          ],
                      }
                    : {}),
                ...(!!media_type
                    ? {
                          type: media_type,
                      }
                    : {}),
            })
            .skip(page_options?.limit * (page_options?.page - 1))
            .limit(page_options?.limit)
            .sort("-updatedAt");

        let total_items = await mediaModel.countDocuments({
            ...(!!search_term
                ? {
                      $or: [
                          {
                              name: {
                                  $regex: ".*" + search_term + ".*",
                                  $options: "i",
                              },
                          },
                          {
                              url: {
                                  $regex: ".*" + search_term + ".*",
                                  $options: "i",
                              },
                          },
                      ],
                  }
                : {}),
            ...(!!media_type
                ? {
                      type: media_type,
                  }
                : {}),
        });

        let pagination = {
            total_items,
            current_page: parseInt(page_options?.page),
            limit: parseInt(page_options?.limit),
            total_pages: Math.ceil(total_items / page_options?.limit),
        };

        return successResponse("Fetched media", items, { pagination });
    } catch (error) {
        return errorResponse(error?.message || "Unexpected Error", error);
    }
};

export const uploadSingleMedia = async (req) => {
    try {
        // Parse form data
        const formData = await req.formData();
        const file = formData.get("file");

        await mediaUploadSchema({
            file: { ...file },
            size: file?.size || null,
        });

        const arrayBuffer = await file.arrayBuffer();
        const bufferData = Buffer.from(arrayBuffer);

        const type = getFileType(file?.type);

        const dotIndex = file?.name?.lastIndexOf(".");

        const splitName = uniqueNameKey(file?.name?.split(dotIndex)[0]);
        const extension = file?.name?.split(dotIndex)[1];

        const originalName = splitName + extension;

        const year = new Date().getUTCFullYear();
        const month = MONTHS[new Date().getMonth()];

        const relativeDir = path.join(
            "public",
            "storage",
            year.toString(),
            month
        );
        const absoluteDir = path.join(process.cwd(), relativeDir);

        if (!fs.existsSync(absoluteDir)) {
            fs.mkdirSync(absoluteDir, { recursive: true });
        }

        const fileName = `${Date.now()}_${originalName}`;
        const absoluteFilePath = path.join(absoluteDir, fileName);
        const relativeFilePath = path
            .join("/", relativeDir?.split("public")[1], fileName)
            .replace(/\\/g, "/");

        await writeFile(absoluteFilePath, bufferData);

        const db_response = await mediaModel.create({
            name: fileName,
            key: uid.rnd(),
            path: relativeFilePath,
            size: file?.size,
            type: type,
        });

        const response = {
            name: db_response?.name,
            key: db_response?.key,
            path: db_response?.path,
            size: db_response?.size,
            type: db_response?.type,
            createdAt: db_response?.createdAt,
            updatedAt: db_response?.updatedAt,
        };

        return successResponse("File uploaded", response);
    } catch (error) {
        console.error("File upload error:", error);
        return errorResponse(error?.message || "File upload failed", error);
    }
};
