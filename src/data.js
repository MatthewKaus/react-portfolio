import {
    cherryton,
    employee,
    benefactor
} from './assets/images/works'; 

export const aboutText = {
    about: [
        {
            text: 'I am from small town Gallup, New Mexico and a graduate in Full Stack Web Development from the University of Arizona. I am specialized in the MERN Stack (MangoDB, Express.js, React, Node.js)'
        },
        {
            text: ''
        },
        {
            text: 'Third text goes here'
        }
    ]
};

export const footerLinks = {
    links: [
        {
            name: 'linkedIn',
            url: 'https://www.linkedin.com/in/matthewpkaus/',
            className: 'fab fa-linkedin footer-icon'
        },
        {
            name: 'github',
            url: 'https://github.com/MatthewKaus',
            className: 'fab fa-github footer-icon'
        }
    ]
};

export const worksText = {
    works: [
        {
            image: cherryton,
            imageAlt: 'cherryton webpage',
            title: 'Cherryton Academy',
            text: 'Cherryton Academy is a mockup website from the manga and animated series, Beastars.',
            technology: 'JavasSript, Handlebars, Bulma, CSS, Sequalize',
            githubUrl: 'https://github.com/MatthewKaus/cherryton-academy',
            deployUrl: 'https://cherryton-academy.herokuapp.com/'
        },
        {
            image: benefactor,
            imageAlt: 'benefactor webpage',
            title: 'Benefactor',
            text: 'Benefactor is a gift giving registry designed to make gift buying fun. Benefactor includes an element of surprise which allows the user to gift randomly to others.',
            technology: 'JavaScript, Handlebars, Bulma, Sequelize, Cloudinary',
            githubUrl: 'https://github.com/CdHebert/benefactor',
            deployUrl: ''
        },
        {
            image: employee,
            imageAlt: 'employee results',
            title: 'Employee Manager',
            text: 'With Employee Manager, the user is able to create ID cards for their employees through a series of quesitons',
            technology: 'JavasScript, Node.js, Inquirer, CSS, Bulma, HTML5',
            githubUrl: '',
            deployUrl: ''
        }
    ]
}

export const skillsText = {
    skills: [
        {
            title: 'Front-End',
            text: 'JavaScript, ReactJS, HTML5, CSS, jQuery, BootStrap, Bulma'
        },
        {
            title: 'Back-End',
            text: 'mySQL, MongoDB, ExpressJS, NodeJS, RESTful API\'s, PWAs'
        },
        {
            title: 'Coding Paradigms',
            text: 'Object Oriented Programming(OOP), Test Driven Development(TDD), Object Relational Mapping (ORM)'
        },
        {
            title: '',
            text: ''
        }
    ]
}