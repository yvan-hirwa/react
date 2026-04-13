import { createContext } from "react";

export const userContext = createContext<{
  users: string[];
  addUser: (value: string) => void;
} | null>(null);
