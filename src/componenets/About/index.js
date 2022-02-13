import React from 'react';
import FadeIn from 'react-fade-in';

const About = ({ aboutText }) => {

    const subtitle = aboutText.about.map(subtitle => {
        return <p className='about-text'>{subtitle.text}</p>
    })


    return (
        <FadeIn>
            <section className='about'>
                <h1 className='about-title'>About Me</h1>
                <p>{subtitle}</p>
            </section>
        </FadeIn>
    )
}

export default About;