import React from 'react';
import Link from 'next/link';
const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg">
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                    <Link href="/about" className="hover:text-blue-500 ml-4">About</Link>
                    <Link href="/contact" className="hover:text-blue-500 ml-4">Contact</Link>
                    <Link href="/googleform" className="hover:text-blue-500 ml-4">Google Form</Link>
                </div>
                <div className="text-white text-lg">
                    <a href="tel:+66954392158" className="hover:text-blue-500 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                    Tel: 095-439-2158
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;