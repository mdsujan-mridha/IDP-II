import React from 'react';

const HomeBanner = () => {
    return (
        <div className='container py-10 lg:py-0 lg:h-52 bg-secondary rounded-md flex flex-col lg:flex-row gap-10 lg:items-center justify-between px-12 items-start' style={{ marginTop: '70px' }}>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='w-24 h-24 bg-cyan-400 items-center flex justify-center rounded-full text-3xl font-bold'> 2000+ </div>
                <div className='text-4xl font-bold capitalize'> users </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-3xl font-bold'> 2500+ </div>
                <div className='text-4xl font-bold capitalize'>Doctors</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='w-24 h-24 bg-rose-500 flex items-center justify-center rounded-full text-3xl font-bold'>3000+</div>
                <div className='text-4xl font-bold'> Reviews</div>
            </div>
        </div>
    );
};

export default HomeBanner;