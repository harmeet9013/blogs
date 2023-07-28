import {
    Paper,
    Divider,
    Dialog,
    DialogActions,
    Typography,
} from "@mui/material";
import { Delete, Cancel, CheckCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function (props) {
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
            <Typography variant="h4">
                <Delete color="icon" />{" "}
                <strong>{props.dialogInputs.title}</strong>
            </Typography>
            <Divider flexItem />

            {/* desc */}
            <Typography variant="h6" sx={{ textAlign: "center" }}>
                {props.dialogInputs.desc}
            </Typography>

            {/* buttons */}
            <DialogActions>
                <props.DialogButton
                    onClick={() => {
                        props.setDialogInputs({
                            open: false,
                        });
                        !props.dialogInputs.button &&
                            props.setShowLoading(true);
                        setTimeout(() => {
                            !props.dialogInputs.button && navigate("/");
                            props.setShowLoading(false);
                        }, 300);
                    }}
                    startIcon={<Cancel color="icon" />}
                >
                    Cancel
                </props.DialogButton>
                {props.dialogInputs.button && (
                    <props.DialogButton
                        onClick={() => {
                            props.setShowLoading(true);
                            props.setDialogInputs({
                                open: false,
                            });
                            props.deleteBlog();
                            navigate("/");
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
