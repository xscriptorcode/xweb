import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/footer";
import NavLinks from "./components/navbar/navbar";

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
        <NavLinks />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
