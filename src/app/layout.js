import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tracalogic",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed  top-0 w-full">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
