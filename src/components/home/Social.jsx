import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/mohamed-asriff-122as315/" className="home__social-icon" target="_blank" rel="noreferrer">
      <i class='bx bxl-linkedin' ></i>
      </a>

      <a href="https://twitter.com/AsriffMohamed" className="home__social-icon" target="_blank" rel="noreferrer">
        <i class="uil uil-twitter"></i>
      </a>

      <a href="https://github.com/Mohamed-Asriff" className="home__social-icon" target="_blank" rel="noreferrer">
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
