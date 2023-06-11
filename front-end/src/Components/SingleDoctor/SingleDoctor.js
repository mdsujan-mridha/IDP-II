import React, { useState } from 'react';
import doctorImg from "../Assets/Doctor-1.png";
import moment from 'moment/moment';
import { DatePicker, TimePicker } from 'antd';
import axios from 'axios';
import  {toast } from 'react-toastify';


const SingleDoctor = () => {
    const [date, setDate] = useState();
    const [time, setTime] = useState(["90:30"]);
    
    const handleBooking = async(e)=>{
         e.preventDefault();

         const res = await axios.post(`http://localhost:8000/api/v1/book/appointment`,{
            doctorId:'2',
            userId:'646cbe6abcdfba770e8a63cf',
            doctorInfo: {
                "firstName": "Doctor",
                "lastName": "Imaran sorker",
                "phoneNumber": "01389435958"
            },
            userInfo: {
                "name": "Sheme",
                "phone": "08458454545"
            },
            date:date,
            time:time
         },
         {
            headers:{
                "Content-Type":"application/json"
            },
         }
         );
         if(res.data.success){
            toast.error(res.data.success);
            console.log(res.data.message);
         }

    }
    console.log(date)
    console.log(time)
    return (
        <div className='container pt-10 pb-10'>
            <div className=" wi-96 h-auto py-5,px-12 bg-secondary ">
                <h1 className='text-center text-3xl p-4 pb-12'> Welcome to doctor "X" profile </h1>
                <hr />
                <div className='flex flex-col lg:flex-row justify-center items-center gap-5 pt-5'>
                    <div className='w-96 h-auto pb-10'>
                        <img src={doctorImg} alt="Doctor" />

                    </div>
                    <div className='pb-10 px-12'>
                        <h2 className=" text-2xl font-bold">Dr. ASM Didarul Ahsan</h2>
                        <p className='text-md font-normal opacity-70'>Skin, Allergy, Leprosy & Sexual Diseases Specialist</p>
                        <p>Green Life Medical College & Hospital</p>
                        <p className='pt-10 text-2xl'> Description </p>
                        <p className='text-justify pt-2 text-sm'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore ab temporibus aut dolores quaerat quo vitae minus asperiores id, a sit rem qui culpa eligendi nemo sapiente mollitia quod! </p>
                        <p className='pt-10 text-2xl'> Appointment schedule </p>
                        <div className='flex justify-center items-start gap-5 mt-5'>

                            <DatePicker
                                format="DD-MM-YYYY"
                                onChange={(value) => setDate(moment(value).format("DD-MM-YYYY"))}
                                style={{zIndex:100 }}
                            />
                            <TimePicker format="HH:mm"
                                onChange={(value) => {
                                    setTime(moment(value).format("HH:mm"));
                                }}
                                style={{zIndex:100 }}
                            />
                          <button onClick={handleBooking} className='bg-primary w-52 h-'>Book Now </button>
                        </div>
                    </div>
                </div>
                <div className='px-12 py-12 text-center'>
                    <p className='text-2xl text-center uppercase'> contact information </p>
                    <p> +8801857465656756 </p>
                    <p> doctorX@gmail.com </p>
                </div>

            </div>
        </div>
    );
};

export default SingleDoctor;