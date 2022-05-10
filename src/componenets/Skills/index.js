import React, { useEffect } from "react";
import FadeIn from 'react-fade-in';

const Skills = ({ skillsText }) => {

    const info = skillsText.skills.map(info => {
        return (
            <div className="skills-card">
                <div className="skills-icon-box">
                    <i className={info.className} />
                </div>
                <h1 className="skills-title">{info.title}</h1>
                <ul>
                    {info.text.map((info) => {
                        return <li className="skills-text">{info}</li>
                    })}
                </ul>
            </div>
        )
    })

    useEffect(() => {
        document.body.style = "background-color: white; transition: .5s";
    }, [])



    return (
        <FadeIn>
            <section>
                <h1 className="works-title">Skills</h1>
                <div className="skills">
                    {info}
                </div>
            </section>
        </FadeIn >
    )
}

export default Skills;