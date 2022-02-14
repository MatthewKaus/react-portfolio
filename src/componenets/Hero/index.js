import React from 'react';

const Hero = ({ logo }) => {
    return (
        <section>
            <header className='hero'>
                <h1 className='hero-header'>Matthew Kaus</h1>
                <div className='flex-column'>
                    <p className='hero-subtitle'>Full Stack Web Developer</p>
                </div>
                <img src={logo} alt='logo'/>
            </header>
        </section>
    )
}

export default Hero;