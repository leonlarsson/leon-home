import Image from "next/image";
import Link from "next/link";

export default ({ swedish = false }) => {
  return (
    <div className="sf-top-first">
      <a href="/" style={{ marginBottom: 5 }}>
        <span style={{ fontSize: 30, fontWeight: 400 }}>
          Leon San José Larsson
        </span>
      </a>

      <div className="sf-top-avatar" style={{ marginBottom: 10 }}>
        <Image
          src="/assets/images/avatar.png"
          alt="Leon Image"
          width={70}
          height={70}
        />
      </div>

      {/* CURRENT TITLE */}
      {/* <a href="https://sharkmob.com" target="_blank" style={{ marginBottom: 20 }}>
        <Image src="/assets/images/smlogo.png" width={240} height={361 / 8} alt="Sharkmob logo" />
      </a> */}

      <a
        style={{ fontWeight: 300, marginBottom: 5 }}
        href="mailto:leonlarsson8@gmail.com"
        target="_blank"
      >
        {swedish ? "Kontakta mig" : "Contact me"}
      </a>

      <Link
        style={{ fontWeight: 300 }}
        href={swedish ? "/cv-old" : "/cv-old-swe"}
      >
        {swedish ? "English" : "Swedish"}
      </Link>

      <Link
        style={{ fontWeight: 300 }}
        href={swedish ? "/sv/cv" : "/en/cv"}
        target="_blank"
      >
        !! {swedish ? "Läs mitt nya CV" : "Read my new CV"} !!
      </Link>
    </div>
  );
};
