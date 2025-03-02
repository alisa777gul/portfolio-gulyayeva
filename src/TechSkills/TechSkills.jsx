import React from "react";
import styles from "./TechSkills.module.css";
import Marquee from "react-fast-marquee";

const TechSkills = ({ direction = "left" }) => {
  const skills = [
    "React",
    "Redux",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
    "TypeScript",
  ];

  return (
    <div className={styles.marqueeContainer}>
      <Marquee gradient={false} pauseOnHover speed={100} direction={direction}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.marqueeItem}>
            {skill}&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TechSkills;
