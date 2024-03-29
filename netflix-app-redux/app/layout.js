import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/redux/providers";

const inter = Inter({ subsets: ["latin"] });

//! metadata objesi ve generateMetadata fonksiyonu sadece Server Componentlerden export edilebilir.
export const metadata = {
  title: "Netflix",
  description: "a movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Providers>
            <Navbar />
            {children}
            <ToastContainer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
