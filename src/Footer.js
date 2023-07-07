import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by Maddie Newby and is{" "}
      <a
        href="https://github.com/maddie-newby/react-weather-app-project"
        target="_blank"
        className="footer-link"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        className="footer-link"
        rel="noopener noreferrer"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
