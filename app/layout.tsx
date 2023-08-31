import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Lora, Playfair } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import ActiveStatus from "./components/ActiveStatus";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});
const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Messenger Clone",
  description: "Messenger clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${playfair.variable}`}>
      <body className={montserrat.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus/>
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
