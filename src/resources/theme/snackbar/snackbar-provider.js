import { SnackbarProvider as NotisProvider } from "notistack";

export const SnackbarProvider = ({ children }) => {
    return <NotisProvider>{children}</NotisProvider>;
};
