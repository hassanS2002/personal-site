import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-gray-900 px-8 py-3 rounded-full border border-gray-700 shadow-lg">
                <ul className="flex space-x-6">
                    <li>
                        <Link to="profile" smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-400 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-400 transition-colors">About</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-400 transition-colors">Projects</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-400 transition-colors">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
