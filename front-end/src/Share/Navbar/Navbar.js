import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const menuItems = [
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="doctors">Doctors</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>About us</Link></li>
        </>
    ]
    return (
        <div className="navbar bg-primary container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                          
                          {menuItems }
                    </ul>
                </div>
                <Link className="btn btn-ghost  text-3xl capitalize font-semibold" to="/"> Health care </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn bg-secondary w-32 border-0"> Login </Link>
            </div>
        </div>
    );
};

export default Navbar;