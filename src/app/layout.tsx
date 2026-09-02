import type { Metadata } from "next";
import { Newsreader, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand, seoDefaults } from "@/content/brand";
import "./globals.css";

const sora = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: seoDefaults.title,
    template: `%s | ${brand.name}`,
  },
  description: seoDefaults.description,
  keywords: [...seoDefaults.keywords],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: brand.siteUrl,
    siteName: brand.name,
    title: seoDefaults.title,
    description: seoDefaults.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seoDefaults.title,
    description: seoDefaults.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
