import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });
import generateOGMetadata from "../utils/generateOGMetadata";
import Header from "./components/Header";

import "./globals.css";
import "/public/fontawesome/css/fontawesome.min.css";
import "/public/fontawesome/css/solid.min.css";
import "/public/fontawesome/css/brands.min.css";

const pageTitle = "Leon San José Larsson";
const pageDescription = "Hobby product engineer working in video games marketing.";

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: `%s | ${pageTitle}`
  },
  description: pageDescription,
  metadataBase: new URL("https://leonlarsson.com"),
  ...generateOGMetadata({
    title: pageTitle,
    description: pageDescription
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="min-h-[100svh] overflow-y-scroll bg-gradient-to-bl from-white to-slate-200 dark:from-kinda-black dark:to-kinda-black" lang="en">
      <body className={`${inter.className} text-black dark:text-kinda-white`}>
        <NextTopLoader showSpinner={false} color="#0076ff" />
        <Header />
        {/* Below 535px (no header) width, add bottom margin to accomodate the bottom overlay header. Add relative if issues occur */}
        {/* Also below 535px width, add some padding to the top */}
        <div className="container mx-auto px-4 pb-10 text-center transition-all max-[535px]:mb-24 max-[535px]:pt-3">{children}</div>
      </body>
    </html>
  );
};
