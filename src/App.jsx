import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();

function App() {
  return (
    <div>
      {/* Hero Section */}
      <header
        className=" py-5"
        style={{ height: "80vh", backgroundColor: "#28a745" }}
      >
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-35Z2VVZCMH"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config',
          'G-35Z2VVZCMH');
        </script>
        <div className="container text-center" style={{ paddingTop: "60px" }}>
          <h1 className="display-1 text-white">
            Discover the Islam Foundations
          </h1>
          <h4 className="display-4 text-white mb-4">
            A Comprehensive Journey through the Five Pillars of Islam
          </h4>
          {/* <Link to="/#pilla" className="btn btn-lg btn-light" role="button">
            Let's Start
          </Link> */}
        </div>
      </header>

      {/* Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="display-2 text-center mb-4 text-success">Islam</h2>
              <p className="lead text-center">
                Islam is a monotheistic Abrahamic religion that originated in
                the 7th century CE in the Arabian Peninsula, based on the
                teachings of the Prophet Muhammad Peace Be Upon Him (
                <span>PBUH</span>). It is the second-largest religion in the
                world, with over 1.8 billion followers, known as Muslims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pilla" className="bg-light py-5">
        <div className="container">
          <h2 className="display-2 text-center mb-4 text-success">
            Five Pillars of Islam
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Shahada</h5>
                  <p className="card-text">
                    The Shahada is the Islamic declaration of faith and the
                    first pillar of Islam.
                  </p>
                  <Link
                    to="/pillar/1"
                    className="btn btn-primary"
                    role="button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* Repeat this card for each pillar */}
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Salah</h5>
                  <p className="card-text">
                    The Salah is the Islamic prayer and the second pillar of
                    Islam.
                  </p>
                  <Link
                    to="/pillar/2"
                    className="btn btn-primary"
                    role="button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Zakat</h5>
                  <p className="card-text">
                    The Zakat is the Islamic obligation to give to those in need
                    and the third pillar of Islam.
                  </p>
                  <Link
                    to="/pillar/3"
                    className="btn btn-primary"
                    role="button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Sawm</h5>
                  <p className="card-text">
                    The Sawm is the Islamic fasting during the month of Ramadan
                    and the fourth pillar of Islam.
                  </p>
                  <Link
                    to="/pillar/4"
                    className="btn btn-primary"
                    role="button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Hajj</h5>
                  <p className="card-text">
                    The Hajj is the Islamic pilgrimage to Mecca and the fifth
                    pillar of Islam.
                  </p>
                  <Link
                    to="/pillar/5"
                    className="btn btn-primary"
                    role="button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <video controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section> */}

      {/* Embedding iframe */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="embed-container">
                <iframe
                  src="https://epub.qurancomplex.gov.sa/issues/translations/indonesian/"
                  style={{ border: "0" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="display-2 text-center mb-4 text-success">
            Contact Us
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2024 Islam Teaching Hub. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to="/privacy-policy" className="text-white me-2">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import PillarDetails from "./components/PillarDetails";
// import About from "./components/About";
// import PrivacyPolicy from "./components/PrivacyPolicy"; // Update import statement
// import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <nav
//           className="navbar navbar-expand-lg navbar-dark"
//           style={{ backgroundColor: "#28a745" }}
//         >
//           <div className="container-fluid">
//             <div className="d-flex align-items-center">
//               <Link
//                 className="navbar-brand fs-2 me-auto"
//                 to="/"
//                 style={{ paddingLeft: "3rem" }}
//               >
//                 ISLAM TEACHING HUB
//               </Link>
//             </div>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse justify-content-end"
//               id="navbarSupportedContent"
//             >
//               <ul
//                 className="navbar-nav mb-2 mb-lg-0 fs-2 "
//                 style={{ paddingRight: "15rem" }}
//               >
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/" style={{ color: "white" }}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="/about"
//                     style={{ color: "white" }}
//                   >
//                     About
//                   </Link>
//                 </li>
//                 {/* <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="/privacy-policy"
//                     style={{ color: "white" }}
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li> */}
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <main className="main-content">
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/pillar/:id" element={<PillarDetails />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           </Routes>
//         </main>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
