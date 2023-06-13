import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const AllDoctors = () => {
    const [doctors, setDoctors] = useState([])

    const getAllDoctors = async () => {
        try {

            const res = await axios.get(`http://localhost:8000/api/v1/admin/allDoctors`, {
                withCredentials: 'true',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
            setDoctors(res.data.allDoctors)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getAllDoctors();

    }, []);
    // console.log(doctors)
    // const colums = [
    //     {
    //         title: "ID",
    //         dataIndex: "_id"
    //     },
    //     {
    //         title: "Name",
    //         dataIndex: "lastName",

    //     },
    //     {
    //         title: "Phone",
    //         dataIndex: "phoneNumber",

    //     },
    //     {
    //         title: "Specialization",
    //         dataIndex: "specialization",

    //     },
    //     {
    //         title: "Action",
    //         dataIndex: <button> Delete </button>,

    //     },



    // ]
    return (
        <div className='container'>
            <div className="mt-10 flex flex-col justify-center items-center">
                <h1 className='text-3xl py-3 font-bold'> All Doctors </h1>
                {/* <Table columns={colums} dataSource={doctors} /> */}
                <div className="overflow-x-auto text-black">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Specialization</th>
                                <th>Action</th>
                                <th> Status </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.map((item) => (
                                    <tr>
                                        <td> {item?._id} </td>
                                        <td> {item?.lastName} </td>
                                        <th> {item?.phoneNumber} </th>
                                        <th> {item?.specialization} </th>
                                        <th> <button className="btn  btn-xs btn-error"> Delete </button> </th>
                                        <th> <button className="btn btn-xs btn-info"> update </button> </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllDoctors;