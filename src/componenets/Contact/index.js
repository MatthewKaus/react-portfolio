import React, { useEffect } from "react";
import FadeIn from 'react-fade-in';

const Contact = () => {

    useEffect(() => {
        document.body.style = "background-color: black; transition: .5s";
    }, [])


    return (
        <FadeIn>
            <section>
                <div className="contact-container border-bottom">
                    <div className="border-bottom">
                        <h1 className="contact-title">Contact Me</h1>
                    </div>
                    <div className="contact-container">
                        <br></br>
                        <p className="contact-text">Thank you for visiting!</p>
                        <p className="contact-text">Feel free to contact me anytime: matthewkausfox@gmail.com</p>
                        <br></br>
                        <div className="contact-link-container">
                            <ul className="contact flex-row">
                                <li className="contact-items"><a className="" href='https://github.com/MatthewKaus'><i className="fab fa-github"></i></a></li>
                                <li className="contact-items"><a className="" href='https://www.linkedin.com/in/matthewpkaus/'><i className="fab fa-linkedin"></i></a></li>
                                <li className="contact-items"><a className="" href='mailto:matthewkausfox@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                            </ul>
                        </div>
                        <br />
                        <a href="./Matthew-Kaus-Resume.pdf" className="button" download><i class="fa-solid fa-download"></i> Resume</a>
                    </div>
                </div>
            </section>
        </FadeIn>
    );
};

export default Contact;