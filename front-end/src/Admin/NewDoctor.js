import { Col, Form, Input, Row, TimePicker, message } from 'antd';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';


const NewDoctor = () => {
    const { user } = useSelector((state) => state.user);

    const handleFinish = async (values) => {
        console.log(values);
        const res = await axios.post('https://doctorba.onrender.com/api/v1/admin/doctor/new', { ...values ,userId: user._id }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        if(res.data.success){
            message.success(res.data.success);
        } else{
            console.log(res.data.success)
        }
    }


    return (
        <div className='container'>
            <h1 className="text-center">Apply Doctor</h1>
            <Form layout="vertical" onFinish={handleFinish} className="m-3">
                <h4 className="text-white">Personal Details : </h4>
                <Row gutter={20}>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item
                            label="First Name"
                            name="firstName"
                            required
                            rules={[{ required: true }]}
                        >
                            <Input type="text" placeholder="your first name" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            required
                            rules={[{ required: true }]}
                        >
                            <Input type="text" placeholder="your last name" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item
                            label="Phone No"
                            name="phoneNumber"
                            required
                            rules={[{ required: true }]}
                        >
                            <Input type="text" placeholder="your contact no" />
                        </Form.Item>
                    </Col>
                    
                   
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item
                            label="Address"
                            name="address"
                            required
                            rules={[{ required: true }]}
                        >
                            <Input type="text" placeholder="your clinic address" />
                        </Form.Item>
                    </Col>
                </Row>
                <h4>Professional Details :</h4>
                <Row gutter={20}>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item
                            label="Specialization"
                            name="specialization"
                            required
                            rules={[{ required: true }]}
                        >
                            <Input type="text" placeholder="your specialization" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item
                            label="Experience"
                            name="experience"
                            required
                            rules={[{ required: true }]}
                        >
                            <Input type="text" placeholder="your experience" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item
                            label="Fees Per Cunsaltation"
                            name="feePerCunsultation"
                            required
                            rules={[{ required: true }]}
                        >
                            <Input type="text" placeholder="Fee" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Timings" name="timings" required>
                            <TimePicker.RangePicker format="HH:mm" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}></Col>
                    <Col xs={24} md={24} lg={8}>
                        <button className="btn btn-primary form-btn" type="submit">
                            Submit
                        </button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default NewDoctor;