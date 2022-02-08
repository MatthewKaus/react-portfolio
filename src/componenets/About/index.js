import React from 'react';

const About = ({ aboutText }) => {

    const subtitle = aboutText.about.map(subtitle => {
        return <p className='about-text'>{subtitle.text}</p>
    })


    return (
        <section className='about'>
            <h1 className='about-title'>About me</h1>
            {subtitle}
        </section>
    )
}

export default About;