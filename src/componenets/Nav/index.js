import React from 'react';

const Nav = (props) => {

    var tabs = ['About', 'Works', 'Skills', 'Contact']


    return (
            <nav>
                <ul className='nav flex-row'>
                    {tabs.map(tab => (
                        <li key={tab} className='nav-items hover-underline-animation'>
                            <a href={`#${tab.toLowerCase()}`} onClick={() => props.handlePageChange(tab)}>
                                {tab}
                            </a>
                        </li>
                    ))}

                </ul>
            </nav>
    )
}

export default Nav;