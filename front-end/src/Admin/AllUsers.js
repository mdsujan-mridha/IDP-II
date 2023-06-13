import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        try {

            const res = await axios.get(`http://localhost:8000/api/v1/admin/users`, {
                withCredentials: 'true',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
            setUsers(res.data.users)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getAllUsers()

    }, []);
    console.log(users);
    return (
        <div className='container'>
            <div className="mt-10 flex flex-col justify-center items-center">
                <h1 className='text-3xl py-3 font-bold'> All users </h1>
                {/* <Table columns={colums} dataSource={users} /> */}
                <div className="overflow-x-auto text-black">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                              
                                <th>Action</th>
                                <th> Status </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((item) => (
                                    <tr>
                                        <td> {item?._id} </td>
                                        <td> {item?.name} </td>
                                        <th> {item?.email} </th>
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

export default AllUsers;