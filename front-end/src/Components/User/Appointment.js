import React, { useEffect, useState } from 'react';
import moment from 'moment';

import axios from 'axios';
import { Table } from 'antd';
const Appointment = ({ user }) => {

    const [appointments, setAppointments] = useState([]);

    const getUserAppointment = async () => {
        try {

            const res = await axios.get(`http://localhost:8000/api/v1/myAppointment`, {
                withCredentials: 'true',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
            setAppointments(res?.data.appointments);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getUserAppointment();

    }, []);

    console.log(appointments);
     const colums =[
        {
            title:"ID",
            dataIndex:"_id"
        },
        {
            title:"Name",
            dataIndex:"name",
            render:(text,record)=>(
                <span>
                    {record?.doctorInfo.firstName} {record?.doctorInfo.lastName}
                </span>
            )
        },
        {
            title:"Phone",
            dataIndex:"phoneNumber",
            
        },
        {
            title: "Date ",
            dataIndex: "date",
            render: (text, record) => (
              <span>
                {moment(record.date).format("DD-MM-YYYY")} ;
              </span>
            ),
          },
        {
            title: "Time ",
            dataIndex: "time",
            render: (text, record) => (
              <span>
                {moment(record.time).format("HH:mm")} ;
              </span>
            ),
          },
        {
            title:"Status",
            dataIndex:"status",
            
        },
     ]
     console.log(appointments)
    return (
        <div className='container'>
            <h1 className='text-center py-10 text-4xl font-bold'>  Hello! <span className='text-orange-600'>{user?.name}</span> Your Appointments  </h1>
            <Table columns={colums} dataSource={appointments} />
        </div>
    );
};

export default Appointment;