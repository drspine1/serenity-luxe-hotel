import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "LuxeHaven Hotel App",
  description: "Build by Idris Mutolib",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
        <html lang="en">
      <body
        className={inter.variable}
      >
    
        {children}
      
      </body>
    </html>
    </ClerkProvider>
   
  );
}
