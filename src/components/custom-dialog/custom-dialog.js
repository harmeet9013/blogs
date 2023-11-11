import PropTypes from "prop-types";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
} from "@mui/material";

export default function ConfirmDialog({
    title,
    content,
    action,
    open,
    onClose,
    ...other
}) {
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            disableScrollLock
            open={open}
            onClose={onClose}
            PaperProps={{
                elevation: 0,
            }}
            {...other}
        >
            <Stack
                pb={2}
                component={DialogTitle}
                sx={{ typography: "h4", fontWeight: 500, textAlign: "left" }}
            >
                {title}
            </Stack>

            {content && (
                <DialogContent sx={{ typography: "body1", textAlign: "left" }}>
                    {content}
                </DialogContent>
            )}

            <DialogActions>
                {action}

                <Button variant="outlined" color="inherit" onClick={onClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmDialog.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    action: PropTypes.node,
    open: PropTypes.bool,
    onClose: PropTypes.func,
};
