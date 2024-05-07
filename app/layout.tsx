// ROOT LAYOUT - SETS UP METADATA AND FONTS

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import generateOGMetadata from "./utils/generateOGMetadata";

import "./globals.css";

const pageTitle = "Leon San José Larsson";
const pageDescription =
  "Aspiring Full Stack Engineer working in video games marketing.";

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
    <html
      className={`${GeistMono.variable} ${GeistSans.variable} overflow-y-scroll`}
      lang="en"
    >
      <body>
        <Analytics scriptSrc="/assets/va/script.js" />
        <SpeedInsights scriptSrc="/assets/si/script.js" />
        {children}
      </body>
    </html>
  );
};
