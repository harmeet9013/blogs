import { IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { SnackbarProvider as NotisProvider, closeSnackbar } from "notistack";

export const SnackbarProvider = ({ children }) => {
    return (
        <NotisProvider
            variant="success"
            action={(snack_id) => (
                <IconButton onClick={() => closeSnackbar(snack_id)}>
                    <CloseRounded />
                </IconButton>
            )}
        >
            {children}
        </NotisProvider>
    );
};
