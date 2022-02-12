import React from "react";

const Skills = ({ skillsText }) => {

    const info = skillsText.skills.map(info => {
        return (
            <div>
                <h1>{info.title}</h1>
                <p>{info.text}</p>
            </div>
        )
    })


    return (
        <section>
            {info}
        </section>
    )
}

export default Skills;