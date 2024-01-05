import type { Metadata } from "next";
import { Inter, Maven_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benedict",
  description: "Benedict Portfolio",
};

const maven_pro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven_pro",
  weight: "500",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${inter.className} ${maven_pro.variable}`}>
        {children}
      </body>
    </html>
  );
}
