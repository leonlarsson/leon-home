import type { Metadata } from "next";
import { DM_Mono, Inter } from "next/font/google";
const interFont = Inter({ subsets: ["latin"] });
// const monoFont = DM_Mono({ subsets: ["latin"], weight: ["300", "400", "500"] });
import generateOGMetadata from "../utils/generateOGMetadata";

import "./globals.css";
import "/public/fontawesome/css/fontawesome.min.css";
import "/public/fontawesome/css/solid.min.css";
import "/public/fontawesome/css/brands.min.css";

const pageTitle = "Leon San José Larsson";
const pageDescription = "Hobby product engineer working in video games marketing.";

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
    <html className="min-h-[100svh]" lang="en">
      <body className={`${interFont.className}`}>
        <div className="container mx-auto max-w-3xl px-4 pb-10 pt-2 md:pt-16">{children}</div>
      </body>
    </html>
  );
};
