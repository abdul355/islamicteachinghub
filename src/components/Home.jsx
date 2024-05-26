import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import videoSrc from "../assets/Final-Project.mkv";

function App() {
  return (
    <div>
      {/* Hero Section */}
      <header
        className=" py-5"
        style={{ height: "80vh", backgroundColor: "#28a745" }}
      >
        <div className="container text-center" style={{ paddingTop: "60px" }}>
          <h4 className="display-3 text-white">بسم الله الرحمن الرحيم</h4>
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
                  <h5 className="card-title">Sawm</h5>
                  <p className="card-text">
                    The Sawm is the Islamic fasting during the month of Ramadan
                    and the fourth pillar of Islam.
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
                  <h5 className="card-title">Zakat</h5>
                  <p className="card-text">
                    The Zakat is the Islamic obligation to give to those in need
                    and the third pillar of Islam.
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

      {/* Content Section 2 */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="display-2 text-center mb-4 text-success">
                Facts About Islam
              </h2>
              <p className="lead ">
                <p>
                  Second Largest Religion: Islam is the second-largest religion
                  globally, after Christianity, with approximately 1.8 billion
                  followers.
                </p>
                <p>
                  Monotheistic Faith: Islam is a monotheistic faith, believing
                  in one God, called Allah in Arabic.
                </p>
                <p>
                  Abrahamic Religion: Like Judaism and Christianity, Islam is an
                  Abrahamic religion, tracing its origins back to the prophet
                  Abraham(
                  <span>PBUH</span>).
                </p>
                <p>
                  The Quran: The holy book of Islam is the Quran, believed to be
                  the word of God as revealed to the Prophet Muhammad (
                  <span>PBUH</span>) over a period of 23 years.
                </p>
                <p>
                  Five Pillars of Islam: These are the five basic acts of
                  worship that are considered essential for Muslims. They
                  include the declaration of faith (Shahada), prayer (Salah),
                  almsgiving (Zakat), fasting (Sawm), and pilgrimage (Hajj).
                </p>
                <p>
                  Prophet Muhammad(
                  <span>PBUH</span>): Muslims believe Muhammad to be the final
                  prophet and messenger of God. He is seen as the model for
                  righteous living.
                </p>
                <p>
                  Mecca and Medina: Islam originated in the Arabian Peninsula,
                  with the city of Mecca being its birthplace. Medina is also
                  significant in Islamic history as the city to which Muhammad
                  (PBUH) and his followers migrated (Hijra).
                </p>
                <p>
                  Diversity: Islam is not a monolithic religion but encompasses
                  a diverse range of cultures, traditions, and interpretations,
                  with adherents from various ethnicities and backgrounds
                  worldwide.
                </p>
                <p>
                  Islamic Law (Sharia): Sharia is the religious law governing
                  the conduct of Muslims, derived from the Quran and the Hadith
                  (sayings and actions of Muhammad PBUH). It covers various
                  aspects of muslims life.
                </p>
                <p>
                  Contributions to Civilization: Islamic civilization has made
                  significant contributions to various fields, including
                  mathematics, science, philosophy, literature, art, and
                  architecture, during the Golden Age of Islam.
                </p>
                <p>
                  These are just a few factual points about Islam, highlighting
                  its key beliefs, practices, and contributions to human
                  civilization.
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
