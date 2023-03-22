import React from 'react';
import chooseImg from "../Assets/Tools/Choose.png";
import connectImg from "../Assets/Tools/Connect.png";
import prepareImg from "../Assets/Tools/Prepare.png";

const items = [
    {
        id: "1",
        title: "Choose",
        img: chooseImg,
        desc: "Find doctors and hospitals based on the factors that matter most to you."
    },
    {
        id: "2",
        title: "Connect",
        img: connectImg,
        desc: "Conveniently schedule your appointment by phone or online when available."
    },
    {
        id: "3",
        title: "Prepare",
        img: prepareImg,
        desc: "Learn what you need to know and which questions to ask your doctor."
    },
]

const ToolsBanner = () => {
    return (
        <div className='container pb-52'>
            <div className='mt-32 '>
                <h1
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className='text-4xl font-semibold text-center'> Health care <span className=' text-orange-600'> gives you the tools and information </span> you need to </h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16'>
                    {
                        items.map((item) => (
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                className="card shadow-2xl w-80 h-96">
                                <h2 className="text-white text-3xl text-center font-semibold pt-5 "> {item.title} </h2>
                                <figure className="px-10 pt-10 w-72">
                                    <img src={item.img} alt="Shoes" className=" w-full h-56" />
                                </figure>
                                <div className="mt-10 text-center text-lg font-medium">
                                    <p> {item.desc} </p>

                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ToolsBanner;