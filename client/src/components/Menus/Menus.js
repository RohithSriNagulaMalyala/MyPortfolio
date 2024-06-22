import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { TbCertificate } from "react-icons/tb";
import { AiOutlineTeam ,AiOutlineTrophy, AiOutlineAppstore} from "react-icons/ai";

const Menus = ({ toggle }) => {
  return (
    <Fade left>
    <div className={toggle ? "nav-items active" : "nav-items"}>
      <div className="nav-item">
        <div className="nav-link">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <FcHome />
            Home
          </Link>
        </div>
        <div className="nav-link">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout />
            About
          </Link>
        </div>
        <div className="nav-link">
          <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
            <FcReadingEbook />
            Education
          </Link>
        </div>
        <div className="nav-link">
          <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
            <FcBiotech />
            Tech Stack
          </Link>
        </div>
        <div className="nav-link">
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
            <FcVideoProjector />
            Projects
          </Link>
        </div>
        <div className="nav-link">
          <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
            <FcPortraitMode />
            Work Experience
          </Link>
        </div>
        <div className="nav-link">
          <Link to="certifications" spy={true} smooth={true} offset={-100} duration={100}>
            <TbCertificate />
            Certifications
          </Link>
        </div>
        <div className="nav-link">
          <Link to="achievements" spy={true} smooth={true} offset={-100} duration={100}>
            <AiOutlineTrophy/>
            Acheivements
          </Link>
        </div>
        <div className="nav-link">
          <Link to="roles" spy={true} smooth={true} offset={-100} duration={100}>
            <AiOutlineTeam/>
            Roles
          </Link>
        </div>
        <div className="nav-link">
          <Link to="activities" spy={true} smooth={true} offset={-100} duration={100}>
            <AiOutlineAppstore/>
            Extra&CoCurricular Activities
          </Link>
        </div>
        <div className="nav-link">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
            <FcBusinessContact />
            Contact
          </Link>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default Menus;
