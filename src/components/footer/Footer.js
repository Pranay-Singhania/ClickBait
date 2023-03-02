import React from "react";
import "./Footer.css";
console.log("footer");

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li>No &copy; copyright issues.</li>
          <li>Feel free to copy. If you need any help, ping me ! </li>
          <li className="flexbetween">
            <a href="https://www.linkedin.com/in/pranay-singhania-aa01aa266/" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
              &nbsp;
            </a>
            <a href="https://github.com/Pranay-Singhania" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
