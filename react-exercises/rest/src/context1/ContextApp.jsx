import { UserContext } from "./context/UserContext";
import Layout from "./Layout";

function ContextApp() {
  return (
    <div className="dark:bg-amber-600 bg-gray-900">
      <UserContext.Provider value={"Hirwa"}>
        <Layout />
      </UserContext.Provider>
    </div>
  );
}

export default ContextApp;
