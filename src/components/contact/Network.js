import React from "react";

const Network = () => {
  return (
    <div className="socialNetwork">
      <ul>
        <a
          href="https://www.youtube.com/channel/UCHGLV13U7YRbjrKpqfbtyYg/videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Youtube</h4>
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://github.com/JustFS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Github</h4>
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://fr.linkedin.com/in/julien-azambourg-1bb1301b4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>LinkedIn</h4>
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://codepen.io/ju-az"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>CodePen</h4>
          <i className="fab fa-codepen"></i>
        </a>
      </ul>
    </div>
  );
};

export default Network;
