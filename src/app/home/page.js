import { endpoints } from "@/lib/axios";
import { HomeView } from "@/sections";
import { GET_REQUEST } from "@/services";

export default async function HomePage() {
    const response = await GET_REQUEST(endpoints["blogs"]);

    return <HomeView blogs={response?.data || []} />;
}
