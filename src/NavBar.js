import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center p-6 bg-white shadow-md">
            <div className="NAME">
                Hassan Siddiqui
            </div>
            <div className="flex space-x-10">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/About" className="hover:underline">About</Link>
                <Link to="/projects" className="hover:underline">Projects</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
