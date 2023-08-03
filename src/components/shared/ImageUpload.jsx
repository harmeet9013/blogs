import { useState, useRef, useEffect } from "react";
import { DeleteForever, UploadFile } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export default function ImageUpload(props) {
    const [image, setImage] = useState();
    const [previewUrl, setPreviewUrl] = useState();

    const clickRef = useRef();

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
            {previewUrl && (
                <Box
                    component="img"
                    className="image-preview"
                    src={previewUrl}
                    alt="Preview"
                    onError={() => {
                        setTimeout(() => {
                            props.setIsValid(false);
                            setPreviewUrl("");
                            setImage("");
                        }, 2000);
                    }}
                    sx={{
                        width: "100%",
                        borderRadius: "15px",
                    }}
                />
            )}
            <input
                id={props.id}
                ref={clickRef}
                style={{ display: "none" }}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={(e) => {
                    let pickedImage;
                    if (e.target.files && e.target.files.length === 1) {
                        pickedImage = e.target.files[0];
                        setImage(pickedImage);
                        props.setIsValid(true);
                    } else {
                        props.setIsValid(false);
                    }
                    props.onInput(image);
                }}
            />
            <Stack
                direction={props.isMobile ? "column" : "row"}
                spacing={props.isMobile ? 2 : 4}
                justifyContent="center"
                alignItems="center"
            >
                <props.CustomButton
                    onClick={() => {
                        clickRef.current.click();
                    }}
                    startIcon={<UploadFile color="icon" />}
                >
                    {image ? "Change Image" : "Upload Image"}
                </props.CustomButton>

                {!image ? (
                    <Typography variant="h6">
                        Pick a valid Image File
                    </Typography>
                ) : (
                    <props.CustomButton
                        onClick={() => {
                            setImage();
                            setPreviewUrl();
                        }}
                        startIcon={<DeleteForever color="icon" />}
                    >
                        Remove Image
                    </props.CustomButton>
                )}
            </Stack>
        </Stack>
    );
}
