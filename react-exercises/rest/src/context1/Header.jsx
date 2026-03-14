import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Header() {
  const name = useContext(UserContext);
  return <h1>{name}</h1>;
}
