import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import banerImg1 from "../Assets/Hero/medicine.svg"
import banerImg2 from "../Assets/Hero/undraw.svg"
import banerImg3 from "../Assets/Hero/undraw_doctor.svg"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Hero = () => {
    return (

        <div className='relative container'>
            <div className="h-72 w-72 bg-violet-700 absolute left-0 top-10 blur-2xl rounded-full opacity-30 z-10"></div>
            <div className=" bg-orange-700 h-60 w-72 absolute -right-10 -bottom-20 blur-3xl rounded-full opacity-30 z-10"></div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper container mt-32"
            >
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row gap-5 items-center justify-center mt-24'>
                        <div className='content w-full lg:w-3/5'>
                            <h1 className='text-6xl font-bold py-3'> Lorem ipsum dolor sit amet consectetur. </h1>
                            <p className='text-lg font-medium mt-5'>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptas culpa ipsam. Distinctio nemo debitis soluta. Quisquam eveniet fugit deserunt! </p>
                            <button className='btn bg-secondary border-0 mt-5 px-10 text-white'>let's Explore </button>
                        </div>
                        <div className='w-full lg:w-2/5'>
                            <img src={banerImg1} alt="" className='w-full' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row gap-5 items-center justify-center mt-24'>
                        <div className='content w-full lg:w-3/5'>
                            <h1 className='text-6xl font-bold py-3'> Lorem ipsum dolor sit amet consectetur. </h1>
                            <p className='text-lg font-medium mt-5'>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptas culpa ipsam. Distinctio nemo debitis soluta. Quisquam eveniet fugit deserunt! </p>
                            <button className='btn bg-secondary border-0 mt-5 px-10 text-white'>let's Explore </button>
                        </div>
                        <div className='w-full lg:w-2/5'>
                            <img src={banerImg2} alt="" className='w-full' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row gap-5 items-center justify-center mt-24'>
                        <div className='content w-full lg:w-3/5'>
                            <h1 className='text-6xl font-bold py-3'> Lorem ipsum dolor sit amet consectetur. </h1>
                            <p className='text-lg font-medium mt-5'>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptas culpa ipsam. Distinctio nemo debitis soluta. Quisquam eveniet fugit deserunt! </p>
                            <button className='btn bg-secondary border-0 mt-5 px-10 text-white'>let's Explore </button>
                        </div>
                        <div className='w-full lg:w-2/5'>
                            <img src={banerImg3} alt="" className='w-full' />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            {/* <div className='flex flex-col lg:flex-row gap-5 items-center justify-center mt-24'>
                 <div className='content w-full lg:w-3/5'>
                     <h1 className='text-6xl font-bold py-3'> Lorem ipsum dolor sit amet consectetur. </h1>
                     <p className='text-lg font-medium mt-5'>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptas culpa ipsam. Distinctio nemo debitis soluta. Quisquam eveniet fugit deserunt! </p>
                    <button className='btn bg-secondary border-0 mt-5 px-10 text-white'>let's Explore </button> 
                 </div>
                 <div className='w-full lg:w-2/5'>
                    <img src={banerImg1} alt="" className='w-full'/>
                 </div>
             </div> */}
        </div>



    );
};

export default Hero;