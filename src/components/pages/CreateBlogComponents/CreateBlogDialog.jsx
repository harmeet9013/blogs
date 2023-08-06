import { Cancel, CheckCircle } from "@mui/icons-material";
import {
    Paper,
    Dialog,
    DialogActions,
    Divider,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CreateBlogDialog(props) {
    const navigate = useNavigate();

    return (
        <Dialog
            open={props.dialogInputs.open}
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
            <Typography variant="h4">{props.dialogInputs.title}</Typography>
            <Divider flexItem />

            {/* content */}
            <Typography variant="h6" sx={{ textAling: "center" }}>
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
                {props.dialogInputs.button && (
                    <props.DialogButton
                        onClick={() => {
                            if (props.dialogInputs.navigate === "") {
                                props.handleSubmit();
                            } else {
                                navigate(props.dialogInputs.navigate);
                            }
                            props.setDialogInputs({
                                open: false,
                            });
                        }}
                        startIcon={<CheckCircle color="icon" />}
                    >
                        Yes
                    </props.DialogButton>
                )}
            </DialogActions>
        </Dialog>
    );
}
