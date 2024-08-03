import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

export const metadata: Metadata = {
    title: "Jeu du pendu",
    description:
        "le jeu du pendu revisité par MICHEL Christophe, développeur fullStack Nodejs/React.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className="h-full">
            <body className="flex flex-col font-sans min-h-screen h-full bg-cimetery bg-no-repeat bg-center bg-cover">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
