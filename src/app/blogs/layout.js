import { CommonLayout } from "@/resources";

export default function Layout({ children }) {
    return <CommonLayout isUserPage>{children}</CommonLayout>;
}
