import React, { useState } from 'react';
import doctorImg from "../Assets/Doctor-1.png";
import  format  from 'date-fns/format';
import { DayPicker } from 'react-day-picker';
const SingleDoctor = () => {
    const [selected, setSelected] = useState();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
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
                        <div className='flex justify-around gap-5'>
                            <div className='bg-primary px-12 py-10'>
                                <DayPicker
                                    mode="single"
                                    selected={selected}
                                    onSelect={setSelected}
                                    footer={footer}
                                >

                                </DayPicker>
                            </div>
                            <div className="dropdown dropdown-bottom">
                                <label tabIndex={0} className="btn m-1"> Schedule </label>
                                <ul tabIndex={0} className="">
                                    <li><> 90:30  - 10:30 </></li>
                                    <li><> 10:30 - 11:00 </></li>
                                    <li><> 11:00 - 11:30 </></li>
                                    <li><> 11:30 - 12:00 </></li>
                                    <li><> 12:00 - 12:30 </></li>
                                    <li><> 2:00 - 2:30 </></li>
                                    <li><> 2:30 - 3:00 </></li>

                                </ul>
                            </div>
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