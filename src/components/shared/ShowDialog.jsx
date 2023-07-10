import {
    Box,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Divider,
} from "@mui/material";
import "./ShowDialog.css";

export default function ShowDialog({
    showDialog,
    setShowDialog,
    darkMode,
    confirm,
    title,
    content,
}) {
    return (
        <Dialog
            open={showDialog}
            PaperProps={{
                component: Box,
                sx: {
                    padding: "20px",
                    backgroundColor: `${
                        darkMode ? "rgba(10, 10, 10, 1)" : "#f8f6f4"
                    }`,
                    color: "white",
                    borderRadius: "15px",
                    textAlign: "center",
                    justifyContent: "center",
                },
            }}
        >
            <DialogTitle
                sx={{
                    mt: "0",
                    fontFamily: "inherit",
                    fontWeight: "700",
                    letterSpacing: "3px",
                    textAlign: "center",
                    fontSize: "40px",
                    color: `${darkMode ? "white" : "black"}`,
                }}
            >
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
                className={`dialog ${darkMode ? "dark" : "light"}`}
                sx={{ textAlign: "center", fontSize: "26px" }}
            >
                {content}
            </DialogContent>
            <DialogActions className={`dialog ${darkMode ? "dark" : "light"}`}>
                <button
                    className={`dialog-button ${darkMode ? "dark" : "light"}`}
                    onClick={() => {
                        setShowDialog(false);
                    }}
                >
                    Cancel
                </button>
                <button
                    className={`dialog-button ${darkMode ? "dark" : "light"}`}
                    onClick={() => {
                        confirm();
                        setShowDialog(false);
                    }}
                >
                    Yes
                </button>
            </DialogActions>
        </Dialog>
    );
}
