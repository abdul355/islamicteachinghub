import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PillarDetails from "./components/PillarDetails";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy"; // Update import statement
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#28a745" }}
        >
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <Link
                className="navbar-brand fs-2 me-auto"
                to="/"
                style={{ paddingLeft: "3rem" }}
              >
                ISLAM TEACHING HUB
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav mb-2 mb-lg-0 fs-2 "
                style={{ paddingRight: "15rem" }}
              >
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ color: "white" }}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    style={{ color: "white" }}
                  >
                    About
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/privacy-policy"
                    style={{ color: "white" }}
                  >
                    Privacy Policy
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <main className="main-content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pillar/:id" element={<PillarDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
