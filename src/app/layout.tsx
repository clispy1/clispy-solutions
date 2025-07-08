import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { agencyInfo } from "@/data/agency";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const baiSans = Bai_Jamjuree({
    variable: "--font-bai-sans",
    subsets: ["latin", "latin-ext", "thai", "vietnamese"],
    weight: ["200", "300", "400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: `${agencyInfo.name} - Creative Agency | Web Design & Development`,
        template: `%s | ${agencyInfo.name} - Creative Agency`,
    },
    description: agencyInfo.description,
    manifest: "/manifest.json",
    icons: [
        { rel: "apple-touch-icon", url: "/apple-icon.png" },
        { rel: "icon", url: "/favicon.ico" },
    ],
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#ffffff",
    keywords: [
        "web design",
        "web development",
        "ghana",
        "UI/UX design",
        "creative agency",
        "brand identity",
        agencyInfo.name,
    ],

    // OpenGraph
    openGraph: {
        type: "website",
        locale: "en_US",
        url: agencyInfo.website,
        siteName: agencyInfo.name,
        title: `${agencyInfo.name} - Premium Web Design & Development Agency in Ghana`,
        description: agencyInfo.description,
        images: [
            {
                url: "/clispy-solutions-logo.png",
                width: 1200,
                height: 630,
                alt: agencyInfo.name,
            },
        ],
    },

    // Twitter
    twitter: {
        card: "summary_large_image",
        title: `${agencyInfo.name} - Web Design Agency`,
        description: agencyInfo.description,
        images: ["/clispy-solutions-logo.png"],
        creator: "@clispy_jake",
    },

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${baiSans.variable} antialiased`}>
                {/* Google Tag Manager */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-PKW8F9YQMT"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PKW8F9YQMT');
          `}
                </Script>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Analytics />

                {/* Structured Data for LocalBusiness */}
                <Script
                    id="local-business-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: agencyInfo.name,
                            image: "/clispy-solutions-logo.png",
                            url: agencyInfo.website,
                            telephone: agencyInfo.phone,
                            email: agencyInfo.email,
                            description: agencyInfo.description,
                            address: {
                                "@type": "PostalAddress",
                                addressCountry: "Ghana",
                            },
                            foundingDate: agencyInfo.founded,
                            founder: {
                                "@type": "Person",
                                name: agencyInfo.founder.name,
                                jobTitle: agencyInfo.founder.title,
                            },
                        }),
                    }}
                />
            </body>
        </html>
    );
}
