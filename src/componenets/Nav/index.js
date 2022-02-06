import React from 'react';

const Nav = (props) => {

    var tabs = ['About', 'Works', 'Contact']


    return (
            <nav className="navigation">
                <ul>
                    {tabs.map(tab => (
                        <li key={tab}>
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