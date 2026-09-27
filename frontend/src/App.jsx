import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Generator from "./pages/Generator";
import Questionnaire from "./pages/Questionnaire";
import Preview from "./pages/Preview";
import Assistant from "./pages/Assistant";
import Documents from "./pages/Documents";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/questionnaire/:type" element={<Questionnaire />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
