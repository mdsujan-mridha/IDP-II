import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UnorderedListOutlined, UserOutlined, LogoutOutlined, InsertRowRightOutlined } from "@ant-design/icons";
import { FloatButton } from 'antd';

const UserOption = ({ user }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
//    console.log(user);
    const options = [
        { icon: <UnorderedListOutlined />, name: 'Appointment', func: appointment },
        { icon: <UserOutlined />, name: 'Profile', func: profile },
        { icon: <LogoutOutlined />, name: 'Logout', func: logout },
    ];
    if(user?.role === "admin") {
        options.unshift({
            icon: <InsertRowRightOutlined />,
            name: 'Dashboard',
            func: dashboard
        })
    }

    function dashboard() {
        navigate('/dashboard')

    }
    function profile() { 
     navigate("/profile")
    }
    function appointment() {
      navigate("/appointment")
    }
    function logout() {

    }
    return (
        <Fragment>
            <FloatButton
                shape="circle"
                style={{
                    right: 24,
                    zIndex:"11"
                }}
                onClose={()=>setOpen(false)}
                onOpen={()=>setOpen(true)}
                open={open}

            >
              {
                options?.map((item) =>(
                    <FloatButton 
                     key={item?.name}
                    icon={item?.icon}
                    onClick={item?.func}
                    tooltip={item?.name}
                    tooltipOpen={window.innerWidth<=600 ? true : false} 
                    />
                ))
              }
            </FloatButton>
        </Fragment>
    );
};

export default UserOption;