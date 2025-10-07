import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Xdefault",
  description: "Default setting for nextjs websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <header></header>
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
