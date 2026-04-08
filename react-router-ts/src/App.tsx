// import LocationNav from "./practicals/LocationNav";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./practicals/LoginPage";
import ProductsPage from "./practicals/ProductsPage";
import ProductDetailsPage from "./practicals/ProductDetailsPage";
import { AuthContext } from "./practicals/authContext";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div>
      <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/details/:id" element={<ProductDetailsPage />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
