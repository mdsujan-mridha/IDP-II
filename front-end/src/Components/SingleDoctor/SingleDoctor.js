import React, { Fragment, useEffect, useState } from 'react';
import doctorImg from "../Assets/Doctor-1.png";
import moment from 'moment/moment';
import { DatePicker, TimePicker } from 'antd';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDoctorDetails } from '../../actions/doctorAction';
import Loader from '../../Share/Loader';
import "./singleDoctor.css";

const SingleDoctor = ({ user }) => {
    const dispatch = useDispatch();

    const { id } = useParams();
    //    console.log(user)
    const { _id, name, email } = user;
    //    console.log(_id)
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    console.log(time);

    const { loading, doctor } = useSelector((state) => state?.doctorDetails);

    useEffect(() => {
        dispatch(getDoctorDetails(id))
    }, [dispatch, id]);

    console.log(doctor);

    const { specialization } = doctor;
    const handleBooking = async (e) => {
        e.preventDefault();

        const res = await axios.post(`http://localhost:8000/api/v1/book/appointment`, {
            doctorId: doctor?._id,
            userId: _id,
            doctorInfo: {
                "firstName": doctor?.firstName,
                "lastName": doctor?.lastName,

            },
            phoneNumber: doctor?.phoneNumber,
            userInfo: {
                "name": name,
                "phone": email,
            },
            date: date,
            time: time
        },
            {
                headers: {
                    "Content-Type": "application/json"
                },
            }
        );
        if (res.data.success) {
            // toast.success(res.data.success);
            console.log(res.data.message);
        }

    }
    // console.log(date)
    // console.log(time)
    const handleTime = (e)=>{
         e.preventDefault();
         setTime(e.target.value)

    }
    return (
        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <div className='container pt-10 pb-10'>
                            <div className=" wi-96 h-auto py-5,px-12 bg-secondary rounded-md">
                                <h1 className='text-center text-3xl p-4 pb-12'> Welcome to doctor <span className='text-orange-500 font-bold'> {doctor?.lastName} </span> profile </h1>
                                <hr />
                                <div className='flex flex-col lg:flex-row justify-center items-center gap-5 pt-5'>
                                    <div className='w-96 h-auto pb-10'>
                                        <img src={doctorImg} alt="Doctor" />

                                    </div>
                                    <div className='pb-10 px-12'>
                                        <h2 className=" text-2xl font-bold">Dr. {doctor?.lastName} </h2>
                                        <p className='text-md font-normal opacity-70'> {doctor?.specialization ? specialization : "Skin, Allergy, Leprosy & Sexual Diseases Specialist"} </p>
                                        <p>Green Life Medical College & Hospital</p>
                                        <p className='pt-10 text-2xl'> Description </p>
                                        <p className='text-justify pt-2 text-sm'>  {doctor?.description} </p>
                                        <p className='text-justify pt-2 text-md'>Fee Per Consultation: <span className='text-orange-400'>{doctor?.feePerCunsultation}</span> </p>
                                        <p className='text-justify pt-2 text-md font-bold'>Timing: <span className='text-orange-400'>{doctor?.timings}</span> </p>

                                        <div className='flex justify-center items-center gap-5 mt-5'>

                                            <DatePicker
                                                format="DD-MM-YYYY"
                                                onChange={(value) => setDate(moment(value).format("DD-MM-YYYY"))}
                                                style={{ zIndex: 100 }}
                                            />
                                            {/* <TimePicker
                                                format="HH:mm"
                                                aria-required={"true"}
                                                onChange={(value) => {
                                                    setTime(moment(value).format("HH:mm"));
                                                }}
                                                style={{ zIndex: 100 }}
                                            /> */}
                                            <select className="select w-32 max-w-xs placeholder-gray-600 bg-transparent"
                                            placeholder='Select your time'
                                             onChange={handleTime}
                                            >
                                                 <option disabled selected className='option'>Select your time</option>
                                                <option value="10:00-10:30" className='option'>10:00-10:30</option>
                                                <option value="10:30-11:00" className='option'>10:30-11:00</option>
                                                <option value="11:00-11:30" className='option'>11:00-11:30</option>
                                                <option value="11:30-12:00" className='option'>11:30-12:00</option>
                                                <option value="12:00-12:30" className='option'>12:00-12:30</option>
                                            </select>
                                            <button onClick={handleBooking} className='btn border-none text-white' style={{ backgroundColor: "#583ee6" }}>Book Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-12 py-12 text-center'>
                                    <p className='text-2xl text-center uppercase'> contact information </p>
                                    <p> {doctor?.phoneNumber} </p>
                                    <p> doctorX@gmail.com </p>
                                </div>

                            </div>
                        </div>
                    )
            }

        </Fragment>
    );
};

export default SingleDoctor;