import "./globals.scss";
import {Noto_Sans_KR} from "next/dist/compiled/@next/font/dist/google";

const notosans = Noto_Sans_KR({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={notosans.className}>
                {children}
            </body>
        </html>
    );
}