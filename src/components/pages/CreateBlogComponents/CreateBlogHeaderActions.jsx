import {
    Backdrop,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
} from "@mui/material";
import { ArrowBack, Check, Close, List } from "@mui/icons-material";
import { Fragment, useState } from "react";

export default function HeaderActions(props) {
    const [dialOpen, setDialOpen] = useState(false);

    return (
        <Fragment>
            <Backdrop open={dialOpen} sx={{ zIndex: "60" }} />
            <SpeedDial
                ariaLabel="dialActions"
                direction={props.isMobile ? "up" : "down"}
                sx={{
                    position: "fixed",
                    top: !props.isMobile && "10rem",
                    bottom: props.isMobile && 40,
                    right: props.isMobile ? 30 : "20%",
                    zIndex: "60",
                    color: (theme) => theme.palette.action.hover,
                }}
                FabProps={{
                    sx: {
                        bgcolor: (theme) => theme.palette.background.header,
                        color: (theme) => theme.palette.text.primary,
                        "&:hover": {
                            bgcolor: (theme) => theme.palette.accent.primary,
                        },
                    },
                }}
                open={dialOpen}
                icon={<SpeedDialIcon icon={<List />} openIcon={<Close />} />}
                onClose={() => {
                    setDialOpen(false);
                }}
                onOpen={() => {
                    setDialOpen(true);
                }}
            >
                <SpeedDialAction
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
                    icon={<ArrowBack color="icon" />}
                    tooltipTitle="Discard"
                    tooltipOpen
                />
                <SpeedDialAction
                    onClick={() => {
                        props.setDialogInputs({
                            open: true,
                            title: "Submit Blog?",
                            content:
                                "Are you sure you want to create the blog?",
                            navigate: "",
                            button: true,
                        });
                    }}
                    icon={<Check color="icon" />}
                    tooltipTitle="Save"
                    tooltipOpen
                />
            </SpeedDial>
        </Fragment>
    );
}
