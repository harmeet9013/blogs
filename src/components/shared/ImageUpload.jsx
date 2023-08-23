import { useState, useRef, useEffect } from "react";
import { Box, ButtonGroup, Grow, Stack } from "@mui/material";
import { DeleteForever, UploadFile } from "@mui/icons-material";

import { CustomButton } from "./CustomComponents";

export default function ImageUpload(props) {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const clickRef = useRef();

    useEffect(() => {
        if (!image) {
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };

        fileReader.readAsDataURL(image);
    }, [image]);

    return (
        <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            <Grow in={Boolean(props.isValid)}>
                <Box
                    component="img"
                    className="image-preview"
                    src={previewUrl}
                    alt="Preview"
                    onLoad={() => {
                        props.setIsValid(true);
                        props.onInput(image);
                    }}
                    onError={() => {
                        setTimeout(() => {
                            props.setIsValid(false);
                            setPreviewUrl(null);
                            setImage(null);
                        }, 5000);
                    }}
                    sx={{
                        width: "100%",
                        height: previewUrl && "300px",
                        objectFit: "cover",
                        backgroundPosition: "center",
                        borderRadius: "15px",
                    }}
                />
            </Grow>

            <input
                id={props.id}
                ref={clickRef}
                style={{ display: "none" }}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={(e) => {
                    let pickedImage;
                    if (e.target.files && e.target.files.length === 1) {
                        pickedImage = e.target.files[0];
                        setImage(pickedImage);
                    }
                }}
            />

            <Grow in={true}>
                <ButtonGroup>
                    <CustomButton
                        onClick={() => {
                            clickRef.current.click();
                        }}
                        startIcon={<UploadFile color="icon" />}
                    >
                        {image ? "Change" : "Upload Image"}
                    </CustomButton>

                    {image && (
                        <CustomButton
                            onClick={() => {
                                props.setIsValid(false);
                                setTimeout(() => {
                                    setPreviewUrl(null);
                                    setImage(null);
                                }, 200);
                            }}
                            startIcon={<DeleteForever color="icon" />}
                        >
                            Remove
                        </CustomButton>
                    )}
                </ButtonGroup>
            </Grow>
        </Stack>
    );
}
