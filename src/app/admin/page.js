import { redirect } from "next/navigation";
//
import { PATHS } from "@/config";

export default function Page() {
    redirect(PATHS["admin"]["root"]);
}
