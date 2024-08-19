import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Nabvar";
import Footer from "../components/footer/Footer";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nadrian's",
  description: "Nadrian's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
        <CartProvider>
        <Navbar/>
        {children}
        <Footer/>
        </CartProvider>
        </UserProvider>
        </body>
    </html>
  );
}
