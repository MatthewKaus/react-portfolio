import React from "react";
import FadeIn from 'react-fade-in';

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
        <FadeIn>
            <section>
                {info}
            </section>
        </FadeIn>
    )
}

export default Skills;