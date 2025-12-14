import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* READY FOR FUTURE PAGES */}
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
