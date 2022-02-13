import React from "react";

const Skills = ({ skillsText }) => {

    const info = skillsText.skills.map(info => {
        return (
            <section className="skills">
                <h1 className="skills-title">{info.title}</h1>
                <p className="skills-text">{info.text}</p>
            </section>
        )
    })


    return (
        <section>
            {info}
        </section>
    )
}

export default Skills;