import PropTypes from "prop-types";
import { SettingsProvider } from "@/settings/context";
import { Work_Sans } from "next/font/google";
import { AuthProvider, GlobalContextProvider } from "@/context";
import MuiThemeProvider from "@/theme";
import { Loader } from "@/components/loader";
import { NotisSnackbarProvider } from "@/components/snackbar";

export const metadata = {
    title: "Harmeet Blogs",
    description: "Built on NextJS, A blog website",
};

const workSansFont = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={workSansFont.className}
                style={{
                    margin: 0,
                }}
            >
                <AuthProvider>
                    <GlobalContextProvider>
                        <SettingsProvider>
                            <MuiThemeProvider>
                                <NotisSnackbarProvider>
                                    <Loader />
                                    {children}
                                </NotisSnackbarProvider>
                            </MuiThemeProvider>
                        </SettingsProvider>
                    </GlobalContextProvider>
                </AuthProvider>
            </body>
        </html>
    );
}

RootLayout.propTypes = {
    children: PropTypes.node,
};
