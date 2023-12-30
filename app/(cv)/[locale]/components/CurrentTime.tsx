"use client";

import { useState, useEffect } from "react";

type Props = {
  locale: string;
  timeZone: string;
};

export default ({ locale, timeZone }: Props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString(locale, { timeZone }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString(locale, { timeZone }));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="print:hidden" suppressHydrationWarning>
      ({time})
    </span>
  );
};
