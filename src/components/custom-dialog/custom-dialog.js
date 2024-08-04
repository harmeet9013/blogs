import PropTypes from "prop-types";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
} from "@mui/material";
import { useTheme } from "@emotion/react";

export default function ConfirmDialog({
    title,
    content,
    action,
    open,
    onClose,
    ...other
}) {
    const theme = useTheme();

    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            disableScrollLock
            open={open}
            onClose={onClose}
            PaperProps={{
                elevation: 2,
                sx: {
                    p: 0,
                    borderRadius: 4,
                    background: theme.palette.background.default,
                },
            }}
            {...other}
        >
            <Stack
                component={DialogTitle}
                sx={{
                    typography: "h4",
                    fontWeight: 500,
                    textAlign: "left",
                    px: 3,
                    py: 2,
                }}
            >
                {title}
            </Stack>

            {content && (
                <DialogContent
                    sx={{
                        mt: 1,
                        typography: "h6",
                        textAlign: "left",
                        px: 3,
                        py: 2,
                    }}
                >
                    {content}
                </DialogContent>
            )}

            <DialogActions
                sx={{
                    borderTop: `1px dashed ${theme.palette.divider}`,
                    px: 3,
                    py: 2,
                }}
            >
                <Button
                    variant="outlined"
                    size="large"
                    color="inherit"
                    onClick={onClose}
                >
                    Cancel
                </Button>

                {action}
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
