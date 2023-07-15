const DialogSX = {
    padding: "20px",
    color: "white",
    borderRadius: "15px",
    textAlign: "center",
    justifyContent: "center",
};
export const DialogDark = {
    ...DialogSX,
    backgroundColor: "rgba(10, 10, 10, 1)",
    color: "white",
};
export const DialogLight = {
    ...DialogSX,
    backgroundColor: "#e4dccf",
    color: "black",
};

//-----------------Dialog Content Styles
const DialogTitleSX = {
    mt: "0",
    fontFamily: "inherit",
    fontWeight: "700",
    letterSpacing: "3px",
    textAlign: "center",
    fontSize: "40px",
    borderRadius: "15px",
};
export const DialogTitleDark = {
    ...DialogTitleSX,
    color: "white",
};
export const DialogTitleLight = {
    ...DialogTitleSX,
    color: "black",
};

//-----------------Dialog Content Styles
const DialogContentSX = {
    textAlign: "center",
    fontSize: "26px",
};
export const DialogContentDark = {
    ...DialogDark,
    ...DialogContentSX,
};
export const DialogContentLight = {
    ...DialogLight,
    ...DialogContentSX,
};

//-----------------Dialog Button Styles
const DialogButtonSX = {
    padding: "10px 20px",
    fontSize: "16px",
    letterSpacing: "2px",
    borderRadius: "15px",
    cursor: "pointer",
    fontWeight: "600",
    marginLeft: "10px",
    transition: "all 200ms ease",
    border: "none",
    backgroundColor: "rgba(0,0,0,0)",
};
export const DialogButtonDark = {
    ...DialogButtonSX,
    border: "2px solid #55380b",
    color: "white",
    "&:hover": {
        backgroundColor: "#55480b",
    },
};
export const DialogButtonLight = {
    ...DialogButtonSX,
    border: "2px solid #1e212d",
    color: "black",
    ".hover": {
        backgroundColor: "#1e212d",
    },
};
