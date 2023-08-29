import { useState, useRef, useEffect } from "react";
import { DeleteForever, UploadFile } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Grow, Stack, styled } from "@mui/material";

export default function ImageUpload(props) {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const clickRef = useRef();

    // global button used for various purposes
    const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.primary.main,
        borderRadius: 40,
        backgroundColor: theme.palette.background.low,
        padding: "0.6rem 1.2rem",
        fontSize: theme.typography.h5.fontSize,
        width: "100%",
        border: `2px solid ${theme.palette.dividervar}`,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
            border: `2px solid ${theme.palette.primary.main}`,
        },
    }));

    useEffect(() => {
        if (!image) {
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };

        fileReader.readAsDataURL(image);
    }, [image]);

    return (
        <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            <Grow in={Boolean(props.isValid)}>
                <Box
                    component="img"
                    className="image-preview"
                    src={previewUrl}
                    alt="Preview"
                    onLoad={() => {
                        props.setIsValid(true);
                        props.onInput(image);
                    }}
                    onError={() => {
                        setTimeout(() => {
                            props.setIsValid(false);
                            setPreviewUrl(null);
                            setImage(null);
                        }, 5000);
                    }}
                    sx={(theme) => ({
                        width: "100%",
                        height: previewUrl && "500px",
                        objectFit: "cover",
                        backgroundPosition: "center",
                        borderRadius: 30,
                        border: `2px solid ${theme.palette.secondary.container.main}`,
                    })}
                />
            </Grow>

            <input
                id={props.id}
                ref={clickRef}
                style={{ display: "none" }}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={(e) => {
                    console.log(e.target.files);
                    let pickedImage;
                    if (e.target.files && e.target.files.length === 1) {
                        pickedImage = e.target.files[0];
                        setImage(pickedImage);
                    }
                }}
            />

            <Grow in={!previewUrl}>
                <ButtonGroup
                    sx={{
                        display: previewUrl && "none",
                    }}
                >
                    <CustomButton
                        onClick={() => {
                            clickRef.current.click();
                        }}
                        startIcon={<UploadFile />}
                    >
                        Upload Image
                    </CustomButton>
                </ButtonGroup>
            </Grow>

            <Grow in={previewUrl}>
                <ButtonGroup
                    sx={{
                        display: !previewUrl && "none",
                    }}
                >
                    <CustomButton
                        onClick={() => {
                            clickRef.current.click();
                        }}
                        startIcon={<UploadFile />}
                    >
                        Change
                    </CustomButton>

                    {image && (
                        <CustomButton
                            onClick={() => {
                                props.setIsValid(false);
                                props.onInput(null);
                                setTimeout(() => {
                                    setPreviewUrl(null);
                                    setImage(null);
                                }, 200);
                            }}
                            startIcon={<DeleteForever />}
                        >
                            Remove
                        </CustomButton>
                    )}
                </ButtonGroup>
            </Grow>
        </Stack>
    );
}
