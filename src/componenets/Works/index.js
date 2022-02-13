import React, { useEffect } from "react";
import FadeIn from 'react-fade-in';

const Works = ({ worksText }) => {

    useEffect(() => {
        document.body.style = "background-color: white; transition: .5s";
    }, [])


    const sections = worksText.works.map(sections => {

        return (
            <div className='work-container'>
                <div className='work-image'>
                    <img src={sections.image} alt={sections.imageAlt} />
                </div>
                <div className='work-text-container'>
                    <h1>{sections.title}</h1>
                    <p>{sections.text}</p>
                    <ul>
                        <li>{sections.technology}</li>
                    </ul>
                    <ul>
                        <li key='github'><a href={sections.githubUrl}><i className="fab fa-github"></i></a></li>
                        <li key='deployed'><a href={sections.deployUrl}><i className="fa fa-link"></i></a></li>
                    </ul>
                </div>
            </div>
        )

    })



    return (
        <FadeIn>
            <section className='works'>
                <h1 className='works-title'>Previous Work</h1>
                <div className='works-container'>
                    {sections}
                </div>
            </section>
        </FadeIn>
    )
}

export default Works;