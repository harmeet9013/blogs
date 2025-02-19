import { DashboardRounded, EditNoteRounded } from "@mui/icons-material";
//
import { PATHS } from "./paths";

const NAV_ITEMS = [
    {
        label: "dashboard",
        icon: <DashboardRounded />,
        href: PATHS["admin"]["root"],
    },
    {
        label: "blogs",
        icon: <EditNoteRounded />,
        href: PATHS["admin"]["blogs"]["create"],
    },
];

export const useNavData = () => {
    return { NAV_DATA: NAV_ITEMS };
};
