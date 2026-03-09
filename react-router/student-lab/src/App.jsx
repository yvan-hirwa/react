import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentsLayout from "./layouts/StudentsLayout";
import StudentsList from "./pages/StudentsList";
import NewStudent from "./pages/NewStudent";
import StudentProfile from "./pages/StudentProfile";
import NotFound from "./pages/NotFound";
import PageStatus from "./components/PageStatus";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <PageStatus path={pathname} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentsLayout />}>
          <Route index element={<StudentsList />} />
          <Route path="new" element={<NewStudent />} />
          <Route path=":id" element={<StudentProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
