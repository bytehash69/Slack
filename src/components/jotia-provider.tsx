"use client";

import { Provider } from "jotai";

interface JotiaProviderProps {
  children: React.ReactNode;
}

export const JotaiProvider = ({ children }: JotiaProviderProps) => {
  return <Provider>{children}</Provider>;
};
