import { Metadata } from "next";
import generateOGMetadata from "../utils/generateOGMetadata";

import "/public/assets/styles/cv.css";
import "/public/fontawesome/css/fontawesome.min.css";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
