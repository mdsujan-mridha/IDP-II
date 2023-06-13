import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AllAppointment from './AllAppointment';

const Dashboard = () => {
    return (
        <div className='container '>
            <div className='flex gap-5 mt-32'>
                <Sidebar />

                <div>

                    <AllAppointment />

                </div>
            </div>
        </div>
    );
};

export default Dashboard;