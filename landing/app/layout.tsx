import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niveau — Read German news at your exact level",
  description:
    "Fresh German news and topics adapted to A2, B1, and B2. The same article at three difficulty levels — so you can read today and re-read as you improve.",
  openGraph: {
    title: "Niveau — Read German news at your exact level",
    description:
      "Fresh German news and topics adapted to A2, B1, and B2. The same article at three difficulty levels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800;900&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
