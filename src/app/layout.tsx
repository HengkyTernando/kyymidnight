import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KyyMidnight Store — Cheap Roblox & Game Items",
  description:
    "KyyMidnight Store is the cheapest, legal, safe, and trusted provider of Roblox items, game passes, and virtual currencies with fast manual delivery.",
  keywords: ["KyyMidnight Store", "KyyStore", "Roblox Items", "Game Passes", "Cheap Robux", "Steam Gift Card", "Mobile Legends Items"],
  authors: [{ name: "KyyMidnight Store" }],
  creator: "KyyMidnight Store",
  openGraph: {
    type: "website",
    title: "KyyMidnight Store — Roblox & Game Items",
    description:
      "KyyMidnight Store is the cheapest, legal, safe, and trusted provider of Roblox items, game passes, and virtual currencies.",
    siteName: "KyyMidnight Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "KyyMidnight Store — Roblox & Game Items",
    description: "KyyMidnight Store is the cheapest provider of Roblox items, game passes, and virtual currencies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased noise">
        {children}
      </body>
    </html>
  );
}
