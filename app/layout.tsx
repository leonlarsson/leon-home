import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Next.js Playground"
}

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/7ebec69507.js" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
