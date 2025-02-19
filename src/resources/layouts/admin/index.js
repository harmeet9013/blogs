import { redirect } from "next/navigation";
//
import { PATHS } from "@/config";
import { getSession } from "@/resources";
//
import { AdminUILayout } from "./ui-layout";

export const AdminLayout = async ({ isUserPage, children }) => {
    const session = await getSession();

    if (!!session?.user && isUserPage) {
        redirect(PATHS["admin"]["root"]);
    } else if (!session?.user && !isUserPage) {
        redirect(PATHS["users"]["login"]);
    } else {
        return (
            <>
                {!isUserPage ? (
                    <AdminUILayout>{children}</AdminUILayout>
                ) : (
                    children
                )}
            </>
        );
    }
};
