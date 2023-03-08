import React from 'react';
import mentalHealthImg from "../Assets/Search/mentalHelth.png";
import physicanImg from "../Assets/Search/health.png";
import orthoImg from "../Assets/Search/orthopedic.png";
const Search = () => {
    return (
        <div className='container'>
            <div className='mt-28 pb-20'>
                <h1 className='text-center text-6xl font-bold'> Search by a <span className=' text-orange-500'> specific need </span> </h1>
                <div className='flex mt-16 w-full h-full gap-4'>
                    {/* first component  */}
                    <div className='flex flex-col gap-5 w-1/2'>
                        {/* first child  */}
                        <div className="card card-side bg-secondary shadow-xl h-1/2">
                            <div className="flex flex-col lg:flex-row lg:items-center">
                                <figure className='w-96'>
                                    <img src={physicanImg} alt="Doctor" className='w-full' />
                                </figure>
                                <div className="card-body">
                                    <h2 className=" text-2xl font-bold"> Lorem ipsum dolor sit </h2>
                                    <p > Top rated Primary Care physicians
                                        Orthopedic Surgeons for Knee & Leg Surgery </p>
                                </div>
                            </div>
                        </div>
                        {/* second child  */}
                        <div className="card card-side bg-secondary shadow-xl h-1/2">
                            <div className="flex flex-col lg:flex-row lg:items-center">
                                <figure className='w-96'>
                                    <img src={orthoImg} alt="Doctor" className='w-full' />
                                </figure>
                                <div className="card-body">
                                    <h2 className=" text-2xl font-bold"> Lorem ipsum dolor sit amet </h2>
                                    <p> Orthopedic Surgeons for Knee & Leg Surgery Orthopedic Surgeons for Knee & Leg Surgery </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second component  */}

                    <div className="card card-compact bg-secondary shadow-xl h-full w-1/2">
                        <figure><img src={mentalHealthImg} alt="Health" /></figure>
                        <div className=" pl-5 pb-5">
                            <h2 className="text-3xl font-bold pl-5">Lorem ipsum dolor sit amet.</h2>
                            <p className='pl-5 text-lg font-semibold mt-3'>Mental Health Professionals with virtual appointments Mental Health Professionals with virtual appointments</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Search;