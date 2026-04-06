import { useLocation, useNavigationType } from "react-router-dom";

export default function LocationNav() {
  type Location = {
    pathname: string;
    search: string;
    hash: string;
    state: unknown;
    key: string;
  };
  type NavigationType = "POP" | "PUSH" | "REPLACE";

  const location: Location = useLocation();
  const navType: NavigationType = useNavigationType();

  return (
    <div style={{ position: "fixed", left: 0 }}>
      <p>PathName: {location.pathname}</p>
      <p>search: {location.search}</p>
      <p>navigation Type: {navType}</p>
    </div>
  );
}
