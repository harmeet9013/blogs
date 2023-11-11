import PropTypes from "prop-types";
import { SettingsProvider } from "@/settings/context";
import { Work_Sans } from "next/font/google";
import { GlobalContextProvider } from "@/context";
import MuiThemeProvider from "@/theme";
import { Loader } from "@/components/loader";

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
                <GlobalContextProvider>
                    <SettingsProvider>
                        <MuiThemeProvider>
                            <Loader />
                            {children}
                        </MuiThemeProvider>
                    </SettingsProvider>
                </GlobalContextProvider>
            </body>
        </html>
    );
}

RootLayout.propTypes = {
    children: PropTypes.node,
};
