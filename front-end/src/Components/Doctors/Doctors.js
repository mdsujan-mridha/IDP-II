import React from 'react';
import { Link } from 'react-router-dom';
import doctor1 from "../Assets/Doctor-1.png";
import doctor2 from "../Assets/Doctor-2.png";
import doctor3 from "../Assets/Doctor-3.png";
import doctor4 from "../Assets/Doctor-4.png";
import doctor5 from "../Assets/Doctor-5.png";
const Doctors = () => {
    return (
        <section className='mt-10 grid grid-cols-1 gap-10'>
            <div className="card card-side bg-secondary shadow-xl container px-12 py-5 lg:relative">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <figure className='h-44 w-44'>
                        <img src={doctor1} alt="Doctor" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-2xl font-bold">Dr. Zakir Ahmed</h2>
                        <p className='text-md font-normal opacity-70'>Dermatologist, Venereologist & Allergologist</p>
                        <p>Bangabandhu Sheikh Mujib Medical University Hospital</p>

                    </div>
                    <div className="lg:justify-end lg:top-12 lg:absolute lg:right-3">
                        <Link
                        to="/doctorDetails"
                         className="btn btn-primary capitalize text-white font-semibold text-lg"> view profile </Link>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-secondary shadow-xl container px-12 py-5 lg:relative">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <figure className='h-44 w-44'>
                        <img src={doctor2} alt="Doctor" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-2xl font-bold">Dr. Lutfun Nahar</h2>
                        <p className='text-md font-normal opacity-70'>Dermatology, Venereology & Laser Surgery Specialist</p>
                        <p>Central Hospital Limited</p>

                    </div>
                    <div className="lg:justify-end lg:top-12 lg:absolute lg:right-3">
                       <Link
                        to="/doctorDetails"
                         className="btn btn-primary capitalize text-white font-semibold text-lg"> view profile </Link>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-secondary shadow-xl container px-12 py-5 lg:relative">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <figure className='h-44 w-44'>
                        <img src={doctor3} alt="Doctor" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-2xl font-bold">Prof. Dr. Nasima Akhtar</h2>
                        <p className='text-md font-normal opacity-70'>ENT (Ear, Nose, Throat) Specialist & Head Neck Surgeon</p>
                        <p>Middle Ear Micro Surgery, Ossiculoplasty, Stapedotomy, Cochlear Implant</p>

                    </div>
                    <div className="lg:justify-end lg:top-12 lg:absolute lg:right-3">
                       <Link
                        to="/doctorDetails"
                         className="btn btn-primary capitalize text-white font-semibold text-lg"> view profile </Link>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-secondary shadow-xl container px-12 py-5 lg:relative">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <figure className='h-44 w-44'>
                        <img src={doctor4} alt="Doctor" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-2xl font-bold">Dr. ASM Didarul Ahsan</h2>
                        <p className='text-md font-normal opacity-70'>Skin, Allergy, Leprosy & Sexual Diseases Specialist</p>
                        <p>Green Life Medical College & Hospital</p>

                    </div>
                    <div className="lg:justify-end lg:top-12 lg:absolute lg:right-3">
                       <Link
                        to="/doctorDetails"
                         className="btn btn-primary capitalize text-white font-semibold text-lg"> view profile </Link>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-secondary shadow-xl container px-12 py-5 lg:relative">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <figure className='h-44 w-44'>
                        <img src={doctor5} alt="Doctor" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-2xl font-bold">Dr. Md. Enayet Ullah (Rubel)</h2>
                        <p className='text-md font-normal opacity-70'>Hepatobillary, Pancreatic & Laparoscopic Surgeon</p>
                        <p>Green Life Medical College & Hospital</p>

                    </div>
                    <div className="lg:justify-end lg:top-12 lg:absolute lg:right-3">
                       <Link
                        to="/doctorDetails"
                         className="btn btn-primary capitalize text-white font-semibold text-lg"> view profile </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;