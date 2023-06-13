import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
         <h1> Profile page </h1>
        </Fragment>
    );
};

export default Profile;