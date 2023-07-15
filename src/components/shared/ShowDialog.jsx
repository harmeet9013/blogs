import {
    Box,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Divider,
} from "@mui/material";

import {
    DialogDark,
    DialogLight,
    DialogTitleDark,
    DialogTitleLight,
    DialogContentDark,
    DialogContentLight,
    DialogButtonDark,
    DialogButtonLight,
} from "./DialogStyle";
import { useNavigate } from "react-router-dom";

export const ShowDialog = ({
    darkMode,
    setShowLoading,
    setRefresh,
    title,
    content,
}) => {
    const navigate = useNavigate();
    return (
        <Dialog
            open={true}
            PaperProps={{
                component: Box,
                sx: darkMode ? DialogDark : DialogLight,
            }}
        >
            <DialogTitle sx={darkMode ? DialogTitleDark : DialogTitleLight}>
                {title}
            </DialogTitle>
            <Divider
                sx={{
                    bgcolor: `${darkMode ? "white" : "black"}`,
                }}
                variant="middle"
                flexItem
            />
            <DialogContent
                sx={darkMode ? DialogContentDark : DialogContentLight}
            >
                {content}
            </DialogContent>
            <DialogActions sx={darkMode ? DialogDark : DialogLight}>
                <button
                    style={darkMode ? DialogButtonDark : DialogButtonLight}
                    onClick={() => {
                        setShowLoading(true);
                        navigate("/");
                        setRefresh(true);
                    }}
                >
                    Okay
                </button>
            </DialogActions>
        </Dialog>
    );
};
