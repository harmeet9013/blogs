import {
    primaryFont,
    ReduxProvider,
    SettingsProvider,
    ThemeProvider,
} from "@/resources";

export const metadata = {
    title: "blogs by harmeet",
    description: "full stack web application for blogs",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${primaryFont.className}`}>
                <ReduxProvider>
                    <SettingsProvider>
                        <ThemeProvider>{children}</ThemeProvider>
                    </SettingsProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
