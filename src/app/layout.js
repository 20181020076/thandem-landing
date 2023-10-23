import "./globals.css";
import { Montserrat_Alternates } from "next/font/google";
import Head from "next/head";
const montserrat = Montserrat_Alternates({ subsets: ["latin"], weight:["200","300","400","500","700","900"] });

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

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
