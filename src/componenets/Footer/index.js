import React from 'react';

const Footer = ({ footerLinks }) => {

    const links = footerLinks.links.map(links => {
        return <li key={links.name} className='footer-items'><a href={links.url}><i className={links.className} /></a></li>
    })

    return (
        <footer>
                <ul className='footer flex-row'>
                    {links}
                </ul>
                &copy; Copyright 2022 Matthew Kaus
        </footer>
    )
}

export default Footer;