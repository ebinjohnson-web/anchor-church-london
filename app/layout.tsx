import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "./components/MotionProvider";
import { assetPath } from "./lib/assets";

export const metadata: Metadata = {
  metadataBase: new URL("https://anchorchurchlondonca.com"),
  title: {
    default: "Anchor Church London | Church in London, Ontario",
    template: "%s | Anchor Church London",
  },
  description:
    "Anchor Church London is a Christian church family in London, Ontario, worshipping Jesus, growing together, and sharing His good news.",
  openGraph: {
    title: "Anchor Church London",
    description: "A Christian church family in London, Ontario.",
    type: "website",
    images: ["/images/family-banner.jpg"],
  },
  icons: {
    icon: assetPath("/images/anchor-church-logo.jpg"),
    shortcut: assetPath("/images/anchor-church-logo.jpg"),
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <MotionProvider />
      </body>
    </html>
  );
}
