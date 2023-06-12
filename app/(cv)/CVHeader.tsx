import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

export default ({ swedish = false }) => {
  return (
    <div className="sf-top-first">
      <a href="/" style={{ marginBottom: 10 }}>
        <span className={inter.className} style={{ fontSize: 50, fontWeight: 400 }}>
          Leon San José Larsson
        </span>
      </a>

      <div className="sf-top-avatar">
        <Image src="/assets/images/avatar.png" alt="Leon Image" width={90} height={90} />
      </div>

      {/* CURRENT TITLE */}
      <a href="https://sharkmob.com" target="_blank" style={{ marginBottom: 20 }}>
        <Image src="/assets/images/smlogo.png" width={240} height={361 / 8} alt="Sharkmob logo" />
      </a>

      <a className={inter.className} style={{ fontWeight: 300, marginBottom: 10 }} href="mailto:leonlarsson8@gmail.com" target="_blank">
        {swedish ? "Kontakta mig" : "Contact me"}
      </a>

      <Link className={inter.className} style={{ fontWeight: 300 }} href={swedish ? "/cv" : "/cv-swe"}>
        {swedish ? "English Resume" : "Swedish Resume"}
      </Link>
    </div>
  );
};
