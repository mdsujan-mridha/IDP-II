import { Table } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import "./AllAppointment.css";

const AllAppointment = () => {

    const [appointments, setAppointments] = useState([]);

    const getUserAppointment = async () => {
        try {

            const res = await axios.get(`https://doctorba.onrender.com/api/v1/admin/appointments`, {
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
    return (
        <div>
            <h1>  All Appointment </h1>
            <Table columns={colums} dataSource={appointments} />
        </div>
    );
};

export default AllAppointment;