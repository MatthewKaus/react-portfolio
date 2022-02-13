import React from 'react';

const Works = ({ worksText }) => {

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
        <section className='works'>
            <h1 className='works-title'>Previous Work</h1>
            <div className='works-container'>
                {sections}
            </div>

        </section>
    )
}

export default Works;