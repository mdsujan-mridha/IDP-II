import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ children }) => {
    return (
        <div className='flex flex-col gap-5 '>
            <Link className='btn btn-secondary text-white w-52' to="/admin/dashboard"> Dashboard </Link>
            <Link className='btn btn-secondary text-white w-52' to="/admin/dashboard/appointments"> All Appointment </Link>
            <Link className='btn btn-secondary text-white w-52' to="/admin/dashboard/users"> All user </Link>
            <Link className='btn btn-secondary text-white w-52' to="/admin/dashboard/doctors"> All Doctors </Link>
            <Link className='btn btn-secondary text-white w-52' to="/admin/users"> New Doctors </Link>

            <main>{children} </main>
        </div>
    );
};

export default Sidebar;