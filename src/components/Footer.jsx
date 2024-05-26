import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#28a745",
        color: "white",
        textAlign: "center",
        padding: "1rem 0",
        bottom: "0",
        left: "0",
        width: "100%",
      }}
    >
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} islamteachinghub. All rights
          reserved.{" "}
          <Link
            to="/privacy-policy"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Privacy Policy
          </Link>
        </p>
        <p></p>
        <p>
          More content will be added soon Inshallah. Please let us know if we
          can serve you better by contacting us via email:
          aghaniza@islamteachinghub.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
