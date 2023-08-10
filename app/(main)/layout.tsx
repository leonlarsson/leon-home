import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });
import Header from "./components/Header";

import "./globals.css";
import "/public/fontawesome/css/fontawesome.min.css";
import "/public/fontawesome/css/solid.min.css";
import "/public/fontawesome/css/brands.min.css";

const pageTitle = "Leon San José Larsson";
const pageDescription = "Landing page for Leon San José Larsson. Includes links to CV and projects.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  themeColor: "#cdacff",
  metadataBase: new URL("https://leonlarsson.com"),
  openGraph: {
    type: "website",
    url: "https://leonlarsson.com",
    title: pageTitle,
    description: pageDescription
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    creator: "@mozzyfx"
  }
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="min-h-[100svh] overflow-y-scroll bg-gradient-to-bl from-white to-slate-200 dark:from-kinda-black dark:to-kinda-black" lang="en">
      <body className={`${inter.className} text-black dark:text-kinda-white`}>
        <NextTopLoader showSpinner={false} color="#0076ff" />
        <Header />
        {/* Below 490px (no header) width, add bottom margin to accomodate the bottom overlay header. Add relative if issues occur */}
        {/* Also below 490px width, add some padding to the top */}
        <div className="container mx-auto px-4 pb-10 text-center transition-all max-[490px]:mb-24 max-[490px]:pt-3">{children}</div>
      </body>
    </html>
  );
};
