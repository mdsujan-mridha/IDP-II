import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    // console.log(doctor);
    const{specialization} = doctor;
    return (
        <Link to={`/doctors/${doctor?._id}`} className="card card-side bg-secondary shadow-xl container px-12 py-5 lg:relative">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <figure className='h-44 w-44'>
                    <img src='' alt="Doctor" className='w-full' />
                </figure>
                <div className="card-body">
                    <h2 className=" text-2xl font-bold">Dr. {doctor?.lastName}</h2>
                    <p className='text-md font-normal opacity-70'>specialization: {doctor?.specialization? specialization:"Venereologist & Allergologist"} </p>
                    <p>Bangabandhu Sheikh Mujib Medical University Hospital</p>

                </div>
                <div className="lg:justify-end lg:top-12 lg:absolute lg:right-3">
                    <Link
                        to={`/doctors/${doctor?._id}`}
                        className="btn btn-primary capitalize text-white font-semibold text-lg"> view profile </Link>
                </div>
            </div>
        </Link>
    );
};

export default Doctor;