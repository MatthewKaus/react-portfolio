import React from 'react';

const Footer = ({ footerLinks }) => {

    const links = footerLinks.links.map(links => {
        return <li key={links.name}><a href={links.url} target='_blank'><i className={links.className} /></a></li>
    })

    return (
        <footer>
            <div className='container'>
                <div>
                    <ul>
                        {links}
                    </ul>
                    &copy; Copyright 2022 Matthew Kaus
                </div>
            </div>
        </footer>
    )
}

export default Footer;