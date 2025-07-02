import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { agencyInfo } from "@/data/agency";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const baiSans = Bai_Jamjuree({
    variable: "--font-bai-sans",
    subsets: ["latin", "latin-ext", "thai", "vietnamese"],
    weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: `${agencyInfo.name} - Creative Agency | Web Design & Development`,
        template: `%s | ${agencyInfo.name} - Creative Agency`,
    },
    description: `${agencyInfo.name} is a leading creative agency in Ghana specializing in web design, development, and brand identity. We help businesses transform their vision into powerful digital solutions that drive growth and success.`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${baiSans.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
