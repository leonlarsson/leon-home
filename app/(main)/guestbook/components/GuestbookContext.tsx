"use client";

import { createContext, useState } from "react";

export type GuestbookContextType = {
  showTimestamps: boolean;
  setShowTimestamps: (showTimestamps: boolean) => void;
};

export const GuestbookContext = createContext<GuestbookContextType | null>(null);

export const GuestbookProvider = ({ children }: { children: React.ReactNode }) => {
  const [showTimestamps, setShowTimestamps] = useState(false);
  return <GuestbookContext.Provider value={{ showTimestamps, setShowTimestamps }}>{children}</GuestbookContext.Provider>;
};
