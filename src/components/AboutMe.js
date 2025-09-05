import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          I'm <span>Purvansh</span>, a pre-final year student pursuing <span>BSc in Computer Science</span> with a specialization in <span>AI and ML</span>. I'm a creative photographer who loves to unfold the world around and behind digital screens. My passion lies in blending technology and creativity, whether it's through coding, capturing moments, or exploring new perspectives. Let's connect and create something extraordinary together!
          <br/> <br/>
          Want to know more about me? Feel free to <a className='resume' href="https://drive.google.com/drive/folders/1CC-_PmNC08sz2GFfAkkWZguPWKMKxmTr?usp=sharing" target="_blank" rel="noopener noreferrer">explore my resume.</a>
        </div>
        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name"></div>
      </div>
  );
}
