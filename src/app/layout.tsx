import type { Metadata } from "next";
import { Sora, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: '--font-sora' });
const cormorant = Cormorant_Garamond({ 
  weight: ['400', '600', '700', '800'], 
  subsets: ["latin"],
  variable: '--font-cormorant' 
});

export const metadata: Metadata = {
  title: "Pusaka Bangsa — Dashboard Survei Nasional 2026",
  description: "Dashboard real-time Survei Kepuasan Pemerintah Nasional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${sora.variable} ${cormorant.variable} tracking-wide font-sans`}>
        {children}
      </body>
    </html>
  );
}
