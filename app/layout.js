'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
const inter = Inter({ subsets: ["latin"] });
import { useRef } from "react"


export const Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = store
  }
  return (
    <Provider store={storeRef.current}>
      <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
      </html>
    </Provider>
  );
}
