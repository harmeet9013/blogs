import { headers } from "next/headers";
//
import { PATHS } from "@/config";
import { AdminLayout, CommonLayout } from "@/resources";

export default async function Layout({ children }) {
    const headerList = await headers();

    const header_url = headerList?.get("x-url") || "";
    const isUserPage = header_url?.includes(PATHS["users"]["login"]);

    return (
        <AdminLayout isUserPage={isUserPage}>
            <CommonLayout isUserPage={isUserPage}>{children}</CommonLayout>
        </AdminLayout>
    );
}
