import { DashboardRounded, EditNoteRounded } from "@mui/icons-material";
//
import { PATHS } from "./paths";
import { BrowseGalleryRounded } from "@mui/icons-material";

const NAV_ITEMS = [
    {
        label: "dashboard",
        icon: <DashboardRounded />,
        href: PATHS["admin"]["root"],
    },
    {
        label: "blogs",
        icon: <EditNoteRounded />,
        href: PATHS["admin"]["blogs"]["root"],
    },
    {
        label: "media",
        icon: <BrowseGalleryRounded />,
        href: PATHS["admin"]["media"]["root"],
    },
];

export const useNavData = () => {
    return { NAV_DATA: NAV_ITEMS };
};
