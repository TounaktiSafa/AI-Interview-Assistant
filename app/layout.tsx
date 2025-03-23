import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Define the Mona_Sans font
const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "PrepWise",
  description: "AI Powered platform for preparing for interviews",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  );
}
