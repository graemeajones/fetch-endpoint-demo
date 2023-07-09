import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/views/Home.jsx";
import Modules from "./components/views/Modules.jsx";
import Students from "./components/views/Students.jsx";

function App() {
  // Initialisation ------------------------------
  const loggedInUser = "Graeme";
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
