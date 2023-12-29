// ROOT LAYOUT - SETS UP METADATA AND FONTS

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import { GeistMono } from "geist/font/mono";
import generateOGMetadata from "./utils/generateOGMetadata";

import "./globals.css";
import "/public/fontawesome/css/fontawesome.min.css";
import "/public/fontawesome/css/solid.min.css";
import "/public/fontawesome/css/brands.min.css";

const pageTitle = "Leon San José Larsson";
const pageDescription = "Aspiring Full Stack Engineer working in video games marketing.";

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: `%s | ${pageTitle}`,
  },
  description: pageDescription,
  metadataBase: new URL("https://leonlarsson.com"),
  ...generateOGMetadata({
    title: pageTitle,
    description: pageDescription,
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${inter.variable} ${GeistMono.variable} overflow-y-scroll`} lang="en">
      <body>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
};
