import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../Share/Loader';

const Profile = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);


    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login");
        }
    }, [navigate, isAuthenticated]);

    console.log(user);
    return (
        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (<Fragment>
                        <h1 className='text-center text-3xl font-bold py-10'> My Profile </h1>
                        <div className='container flex justify-between items-center'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={user?.avatar?.url} alt="" className='w-72 h-72 rounded-full' />
                                <Link to="#" className=' text-3xl pt-5 font-semibold'> Edit Profile </Link>
                            </div>
                            <div className='text-2xl font-bold'>
                                <div >
                                    <h4>Full Name</h4>
                                    <p className='text-orange-500'>{user.name}</p>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p className='text-orange-500'>{user.email}</p>
                                </div>
                                {/* <div>
                                    <h4>Joined On</h4>
                                    <p>{String(user.createdAt).substr(0, 10)}</p>
                                </div> */}

                                <div className='flex mt-4 gap-5'>
                                    <Link to="/appointment" className='btn btn-secondary'>My Appointment</Link>
                                    <Link to="#e" className='btn btn-secondary'>Change Password</Link>
                                </div>
                            </div>
                        </div>

                    </Fragment>)
            }
        </Fragment>
    );
};

export default Profile;