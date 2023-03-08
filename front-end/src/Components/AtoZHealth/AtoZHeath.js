import React from 'react';

import appointmentImg from "../Assets/AtoZ/appointment.svg";
import videoImg from "../Assets/AtoZ/video.png";
import covidImg from "../Assets/AtoZ/covid.svg";


const AtoZHeath = () => {
    return (
        <div className='container'>
            <div className='mt-24'>
                <h1 className='text-6xl font-bold text-center pb-10'> <span className=' text-orange-500'> Your health </span> A to Z  </h1>
                <p className='text-center font-bold text-xl leading-8'> Easy–to–understand health information to help you be ready for your appointment. Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome. </p>
                <div className='w-full bg-secondary mt-24 rounded-lg p-5 flex flex-col items-center justify-center shadow-2xl'>
                    <img src={covidImg} alt="" className='w-96' />
                    <h1 className='text-2xl font-bold'> Covid-19 </h1>
                    <p className='text-lg font-semibold'> Get the latest updates about the vaccine </p>
                </div>
                <div className='flex h-auto pb-10 mt-10 w-full gap-5'>

                    <div className='w-1/2 p-5 rounded-md shadow-2xl' style={{ backgroundColor: '#583fe6' }}>
                        <img src={appointmentImg} alt="appointmentImg" />
                        <h1 className='pt-5 text-xl font-semibold text-center'> Appointment Guides </h1>
                        <p className='text-center text-md mt-2 font-medium'> Know What to ask your doctor </p>
                    </div>
                    <div className='w-1/2 flex flex-col items-center justify-center p-3 rounded-md shadow-2xl' style={{ backgroundColor: '#f9ab40' }}>
                        <img src={videoImg} alt="" />
                        <h1 className='text-xl mt-2 font-bold'> Video Center </h1>
                        <p className='text-md font-bold'>Watch stories from real patients </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AtoZHeath;