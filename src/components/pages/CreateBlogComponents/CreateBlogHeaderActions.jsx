import { Stack } from "@mui/material";
import { ArrowBack, Check } from "@mui/icons-material";

export default function HeaderActions(props) {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            style={{
                borderRadius: "15px",
                display: "flex",
            }}
        >
            <props.CustomButton
                name="Back"
                onClick={() => {
                    props.setDialogInputs({
                        open: true,
                        title: "Discard changes?",
                        content:
                            "Are you sure you want to go back? This will discard everything!",
                        navigate: "/",
                        button: true,
                    });
                }}
                startIcon={<ArrowBack color="icon" />}
            >
                Back
            </props.CustomButton>
            <props.CustomButton
                name="Finish"
                type="submit"
                onClick={() => {
                    props.setDialogInputs({
                        open: true,
                        title: "Submit Blog?",
                        content: "Are you sure you want to create the blog?",
                        navigate: "",
                        button: true,
                    });
                }}
                startIcon={<Check color="icon" />}
            >
                Finish
            </props.CustomButton>
        </Stack>
    );
}
