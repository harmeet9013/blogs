import {
    Box,
    Dialog,
    Typography,
    DialogActions,
    Paper,
    Divider,
} from "@mui/material";
import { GitHub, Logout, Cancel, CheckCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function HeaderShowDialog(props) {
    const navigate = useNavigate();

    return (
        <Dialog
            open={props.dialogInputs.open}
            onClose={() => {
                props.setDialogInputs({
                    open: false,
                });
            }}
            components={Box}
            PaperProps={{
                component: Paper,
                elevation: 1,
                sx: {
                    borderRadius: "15px",
                    padding: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                },
            }}
        >
            {/* title */}
            <Typography variant="h4">
                {props.dialogInputs.icon}{" "}
                <strong>{props.dialogInputs.title}</strong>
            </Typography>
            <Divider flexItem />

            {/* desc */}
            <Typography variant={props.isMobile ? "h6" : "h6"}>
                {props.dialogInputs.content}
            </Typography>

            {/* buttons */}
            <DialogActions>
                <props.DialogButton
                    onClick={() => {
                        props.setDialogInputs({
                            open: false,
                        });
                    }}
                    startIcon={<Cancel color="icon" />}
                >
                    Cancel
                </props.DialogButton>
                <props.DialogButton
                    startIcon={<CheckCircle color="icon" />}
                    onClick={() => {
                        setTimeout(() => {
                            if (props.dialogInputs.navigate === "logout") {
                                props.setIsLoggedIn({
                                    logged: false,
                                    userID: "",
                                });
                                props.setSnackbarInputs({
                                    open: true,
                                    message: "You are logged out!",
                                });
                            } else if (props.dialogInputs.navigate === "/") {
                                props.setRefresh(true);
                                navigate("/");
                            } else {
                                window.open(
                                    props.dialogInputs.navigate,
                                    "_blank"
                                );
                            }
                            props.setDialogInputs({
                                open: false,
                                title: "",
                                content: "",
                                navigate: "",
                                icon: "",
                            });
                            props.setShowLoading(false);
                        }, 200);

                        props.setShowLoading(true);
                    }}
                >
                    Yes
                </props.DialogButton>
            </DialogActions>
        </Dialog>
    );
}
