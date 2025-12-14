import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";

/**
 * Main App component that handles routing for the entire application
 * Sets up React Router with defined routes for different pages
 * @returns JSX element containing the router configuration
 */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main home route */}
        <Route path="/" element={<Home />} />
        {/* Alternative route for uzofin path */}
        <Route path="/uzofin" element={<Home />} />
      </Routes>
    </Router>
  );
}
