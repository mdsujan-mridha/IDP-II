import React from 'react';
import mentalHealthImg from "../Assets/Search/mentalHelth.png";
import physicanImg from "../Assets/Search/health.png";
import orthoImg from "../Assets/Search/orthopedic.png";
const Search = () => {
    return (
        <div className='container relative'>
             {/* <div className=" bg-violet-800 h-60 w-72 absolute -left-20 bottom-0 blur-2xl rounded-full opacity-30 z-10"></div> */}
            <div className='mt-28 pb-20'>
                <h1
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className='text-center text-6xl font-bold'> Search by a <span className=' text-orange-500'> specific need </span> </h1>
                <div className='flex mt-16 w-full h-auto gap-4'>
                    {/* first component  */}
                    <div className='flex flex-col gap-5 w-1/2'>
                        {/* first child  */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="card card-side bg-secondary shadow-xl h-auto">
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
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="card card-side bg-secondary shadow-xl h-auto">
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

                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="card card-compact bg-secondary shadow-xl h-auto w-1/2">
                        <figure><img src={mentalHealthImg} alt="Health" className='h-52' /></figure>
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