import React from 'react'
import "./SkillCardStyle.css";
import { SiPython, SiMysql, SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiFastapi, SiDocker, SiSwagger, SiPostman, SiJava } from "react-icons/si";
import {DiGit} from "react-icons/di";
import {SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap, SiFigma, SiInkscape } from "react-icons/si";
import {TbBrandCss3, TbBrandJavascript, TbBrandHtml5} from "react-icons/tb";
import {IoLogoWindows, IoLogoNpm} from "react-icons/io"

export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id={id}>
          <div className="skill-header">My Skills</div>
          <div className="skill-box">
            <h2>Languages</h2>
            <div className="skillset">
              <abbr title='Python'><SiPython className='techLogo'/></abbr>
              <abbr title='Java'><SiJava className='techLogo'/></abbr>
              <abbr title='JavaScript'><TbBrandJavascript className='techLogo'/></abbr>
              <abbr title='SQL'><SiMysql className='techLogo'/></abbr>
              <abbr title='HTML 5'><TbBrandHtml5 className='techLogo'/></abbr>
            </div>
          </div>
          <div className="skill-box">
            <h2>ML & Data Science</h2>
            <div className="skillset">
              <abbr title='scikit-learn'><SiScikitlearn className='techLogo'/></abbr>
              {/* <abbr title='XGBoost'><img className='techLogo' src='https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png' alt='XGBoost' style={{height: '1em'}}/></abbr> */}
              <abbr title='Pandas'><SiPandas className='techLogo'/></abbr>
              <abbr title='NumPy'><SiNumpy className='techLogo'/></abbr>
              <abbr title='Matplotlib'><img className='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' alt='Matplotlib'/></abbr>
              <abbr title='Jupyter'><SiJupyter className='techLogo'/></abbr>
            </div>
          </div>
          <div className="skill-box">
            <h2>Dev Tools</h2>
            <div className="skillset">
              <abbr title='FastAPI'><SiFastapi className='techLogo'/></abbr>
              <abbr title='REST APIs'><SiSwagger className='techLogo'/></abbr>
              <abbr title='GitHub Actions'><img className='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt='GitHub Actions'/></abbr>
              <abbr title='Docker'><SiDocker className='techLogo'/></abbr>
              <abbr title='Swagger'><SiSwagger className='techLogo'/></abbr>
              <abbr title='Postman'><SiPostman className='techLogo'/></abbr>
              <abbr title='Git/Github'><DiGit className='techLogo'/></abbr>
              <abbr title='NPM'><IoLogoNpm className='techLogo'/></abbr>
              <abbr title='Bootstrap'><SiBootstrap className='techLogo'/></abbr>
              <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
              <abbr title='React Router'><SiReactrouter className='techLogo'/></abbr>
              <abbr title='CSS 3'><TbBrandCss3 className='techLogo'/></abbr>
            </div>
          </div>
          <div className="skill-box">
            <h2>Tools & Systems</h2>
            <div className="skillset">
              <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo'/></abbr>
              <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
              <abbr title='Figma'><SiFigma className='techLogo'/></abbr>
              <abbr title='Inkscape'><SiInkscape className='techLogo'/></abbr>
            </div>
          </div>
        </div>
    </>

  )
}
