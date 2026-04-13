import { useContext } from "react";
import { userContext } from "./context";

export function useUser() {
  const ctx = useContext(userContext);

  if (!ctx) throw new Error("User Context is not provided");

  return ctx;
}
