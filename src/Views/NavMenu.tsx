import React from "react";
import { Link } from 'react-router-dom';

const NavMenu = () => {

    return (
        <>
        	<nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="#" className="flex items-center py-4 px-2">
                                    <span className="font-semibold text-gray-500 text-lg">
                                        open-handicap
                                        </span>
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <Link to="/" ><button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</button></Link>
                                <Link to="/profile" ><button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Profile</button></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavMenu;