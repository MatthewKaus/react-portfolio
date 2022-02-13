import React, { useState, useEffect } from "react";
import FadeIn from 'react-fade-in';

const Skills = ({ skillsText }) => {

    const info = skillsText.skills.map(info => {
        return (
            <div className="skills">
                <h1 className="skills-title">{info.title}</h1>
                <p className="skills-text">{info.text}</p>
            </div>
        )
    })

    useEffect(() => {
        document.body.style = "background-color: white; transition: .5s";
    }, [])



    return (
        <FadeIn>
            <section>
                {info}
            </section>
        </FadeIn>
    )
}

export default Skills;