import React from 'react';
import doctorImg from "../Assets/Doctor-1.png";
const SingleDoctor = () => {
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
                        <div className="overflow-x-auto pt-5">
                            <table className="table w-full bg-secondary">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
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