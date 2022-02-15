import {
    cherryton,
    employee,
    benefactor,
    // dailytaskscheduler,
    googlebooksearch,
    // passwordgenerator,
    // weatherdashboard
} from './assets/images/works'; 

export const aboutText = {
    about: [
        {
            text: 'I am from small town Gallup, New Mexico and a graduate in Full Stack Web Development from the University of Arizona. I am specialized in the MERN and SERN stack.'
        },
        {
            text: 'I am eager to learn more about technology from any opportunity.'
        },
        {
            text: 'My interest first arose from the opportunity at the University of New Mexico, during the summer National Security Studies Program in 2018. There I learned about Data Science, Cyber Security and my introduction into programming.'
        },
        {
            text: 'After graduating highschool with college experience and wanting to learn more about programming, I undertook learning full stack web development at the University of Arizona. There I earned my certificate after completing the rigoruous 24-week course.'
        },
        {
            text: 'When I am not programming, I enjoy playing guitar, cooking, and taking hikes. '
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
            image: benefactor,
            imageAlt: 'benefactor webpage',
            title: 'Benefactor',
            text: 'Benefactor is a gift giving registry designed to make gift buying fun. Benefactor includes an element of surprise which allows the user to gift randomly to others.',
            technology: 'JavaScript, Handlebars, Bulma, Sequelize, Cloudinary',
            githubUrl: 'https://github.com/CdHebert/benefactor',
            deployUrl: 'https://giving-benefactor.herokuapp.com/'
        },
        {
            image: googlebooksearch,
            imageAlt: 'googlebooksearch webpage',
            title: 'Google Book Search',
            text: 'With Google Book Search Engine, any user could create an account, and search for books to add to their collection',
            technology: 'JavaScript, React, MongoDB, GraphQL',
            githubUrl: 'https://github.com/MatthewKaus/Book-Search-Engine',
            deployUrl: 'https://google-book-search-mattk.herokuapp.com/'
        },
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
            image: employee,
            imageAlt: 'employee results',
            title: 'Employee Manager',
            text: 'With Employee Manager, the user is able to create ID cards for their employees through a series of quesitons',
            technology: 'JavasScript, Node.js, Inquirer, CSS, Bulma, HTML5',
            githubUrl: 'https://github.com/MatthewKaus/Employee-Manager',
            deployUrl: 'https://github.com/MatthewKaus/Employee-Manager'
        },
    ]
}

export const skillsText = {
    skills: [
        {
            title: 'Front-End',
            text: 'JavaScript, HTML5, CSS, ReactJS, Handlebars, jQuery, BootStrap, Bulma'
        },
        {
            title: 'Back-End',
            text: 'mySQL, Sequilize, MongoDB, ExpressJS, NodeJS, GraphQl, RESTful API\'s, PWAs'
        },
        {
            title: 'Coding Paradigms',
            text: 'Object Oriented Programming(OOP), Model View Controller (MVC), Test Driven Development(TDD), Onject-Document Mapping (ODM), Object-Relational Mapping (ORM)'
        },
        {
            title: 'Server Creation and Utilization',
            text: 'ExpressJS, Apollo, Heroku, MongoDB Atlas, Insomnia'
        }
    ]
}

export const contactInfo = {
    contact : [
        {}
    ]
}