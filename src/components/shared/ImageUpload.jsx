import { useState, useRef, useEffect } from "react";
import { UploadFile } from "@mui/icons-material";
import "./ImageUpload.css";

export default function ImageUpload({
    darkMode,
    id,
    onInput,
    isValid,
    setIsValid,
}) {
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
        <div className="image-upload-section">
            {previewUrl && (
                <img
                    className="image-preview"
                    src={previewUrl}
                    alt="Preview"
                    onError={() => {
                        setTimeout(() => {
                            setIsValid(false);
                            setPreviewUrl("");
                            setImage("");
                        }, 2000);
                    }}
                />
            )}
            <input
                id={id}
                ref={clickRef}
                style={{ display: "none" }}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={(e) => {
                    let pickedImage;
                    if (e.target.files && e.target.files.length === 1) {
                        pickedImage = e.target.files[0];
                        setImage(pickedImage);
                        setIsValid(true);
                    } else {
                        setIsValid(false);
                    }
                    onInput(image);
                }}
            />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <button
                    className={`upload-image-button ${
                        darkMode ? "dark" : "light"
                    }`}
                    onClick={() => {
                        clickRef.current.click();
                    }}
                >
                    <UploadFile
                        sx={{
                            my: "-5px",
                            color: darkMode ? "#ADFBFF" : "#A3320B",
                        }}
                    />{" "}
                    {image ? "Change Image" : "Upload Image"}
                </button>

                {!isValid && (
                    <p
                        className={`response-text ${
                            darkMode ? "dark" : "light"
                        }`}
                    >
                        Pick a valid Image File
                    </p>
                )}
            </div>
        </div>
    );
}
