import "@blocknote/mantine/style.css";

import {
    auth,
    primaryFont,
    ReduxProvider,
    SettingsProvider,
    ThemeProvider,
} from "@/resources";

export const metadata = {
    title: "blogs by harmeet",
    description: "full stack web application for blogs",
};

export default async function RootLayout({ children }) {
    const session = await auth();

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${primaryFont.className}`}>
                <ReduxProvider>
                    <SettingsProvider session={session}>
                        <ThemeProvider>{children}</ThemeProvider>
                    </SettingsProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
