import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
            <h3>Hey there, 👋</h3>
            I'm <span>Purvansh</span>, a passionate <span>photographer</span> who loves capturing moments and exploring creativity beyond the digital world. You can often find me out and about, watching life unfold or engaging in creative pursuits outside the screen. Whether it's through my lens or hands-on artistic projects, I thrive on bringing fresh perspectives to everything I do.
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