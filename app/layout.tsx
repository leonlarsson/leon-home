import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

const pageTitle = "Leon San José Larsson";
const pageDescription = "Landing page for Leon San José Larsson. Includes links to CV and projects.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  icons: "/favicon.ico",
  themeColor: "#cdacff",
  metadataBase: new URL("https://leonlarsson.com"),
  openGraph: {
    type: "website",
    url: "https://leonlarsson.com",
    title: pageTitle,
    description: pageDescription,
    images: [{
      url: "/assets/images/embed.png",
      width: 896,
      height: 605
    }]
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
    creator: "@mozzyfx",
    images: "/assets/images/embed.png"
  }
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/7ebec69507.js" />
      <body className={`${inter.className} bg-slate-100`}>
        <div className="flex h-[100svh] p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
