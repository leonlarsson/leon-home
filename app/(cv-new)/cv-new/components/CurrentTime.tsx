"use client";

import { useState, useEffect } from "react";

type Props = {
  timeZone: string;
};

export default ({ timeZone }: Props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString(undefined, { timeZone }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString(undefined, { timeZone }));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return time;
};
