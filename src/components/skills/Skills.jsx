import React from "react";
import "./skills.css";
import skillsData from "../../data/skills";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        {skillsData.map((group) => (
          <div className="skills__content" key={group.category}>
            <div className="skills__title-row">
              <i className={`${group.icon} skills__category-icon`}></i>
              <h3 className="skills__title">{group.category}</h3>
            </div>
            <div className="skills__list">
              {group.skills.map((skill) => (
                <span className="skills__badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
