import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thandem",
  description: "Las mejores experiencias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin >
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </link>
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
