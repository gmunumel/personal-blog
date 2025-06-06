import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StackEdge: Software & Architecture Insights",
  description:
    "Insights and practical guides on modern software development and architecture, covering frontend, backend, React, Python, and fullstack best practices.",
  keywords: ["software", "blog", "python", "architecture", "portfolio"],
  authors: [{ name: "Gabriel Muñumel" }],
  openGraph: {
    title: "StackEdge: Software & Architecture Insights",
    description:
      "Insights and practical guides on modern software development and architecture, covering frontend, backend, React, Python, and fullstack best practices.",
    url: "https://stackedge.dev/",
    siteName: "StackEdge",
    images: [
      {
        url: "https://stackedge.dev/og-image.png",
        width: 1024,
        height: 1024,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackEdge: Software & Architecture Insights",
    description: "A concise summary of your page or blog.",
    images: ["https://stackedge.dev/og-image.png"],
  },
  metadataBase: new URL("https://stackedge.dev"),
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${geistSans.className} ${geistMono.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://stackedge.dev/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>StackEdge: Software & Architecture Insights</title>
        <meta
          name="description"
          content="Insights and practical guides on modern software development and architecture, covering frontend, backend, React, Python, and fullstack best practices."
        />
        <meta
          name="keywords"
          content="software, blog, python, architecture, portfolio"
        />
        <meta name="author" content="Gabriel Muñumel" />
        <meta
          property="og:title"
          content="StackEdge: Software & Architecture Insights"
        />
        <meta
          property="og:description"
          content="Insights and practical guides on modern software development and architecture, covering frontend, backend, React, Python, and fullstack best practices."
        />
        <meta property="og:url" content="https://stackedge.dev/" />
        <meta
          property="og:image"
          content="https://stackedge.dev/og-image.png"
        />
        <meta property="og:site_name" content="StackEdge" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="StackEdge: Software & Architecture Insights"
        />
        <meta
          name="twitter:description"
          content="Insights and practical guides on modern software development and architecture, covering frontend, backend, React, Python, and fullstack best practices."
        />
        <meta
          name="twitter:image"
          content="https://stackedge.dev/og-image.png"
        />
        <meta name="twitter:site" content="@stackedge_dev" />
        <meta name="twitter:creator" content="@gabrielmunumel" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
