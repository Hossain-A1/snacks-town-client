import Navber from "@/components/Navber";
import "./globals.css";
import { Rubik } from "next/font/google";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Food eats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navber />
        {children} 
        <Footer />
      </body>
    </html>
  );
}
