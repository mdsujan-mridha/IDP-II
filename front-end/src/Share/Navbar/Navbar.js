import { InsertRowRightOutlined, LogoutOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userAction';



const Navbar = ({ user }) => {
    // console.log(user);
    const menuItems = [
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="doctors">Doctors</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>About us</Link></li>
        </>
    ]
    // const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //    console.log(user);
    const options = [
        { icon: <UnorderedListOutlined />, name: 'Appointment', func: appointment },
        { icon: <UserOutlined />, name: 'Profile', func: profile },
        { icon: <LogoutOutlined />, name: 'Logout', func: logoutUser },
    ];
    if (user?.role === "admin") {
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
    function logoutUser() {
        dispatch(logout());
        

    }





    return (
        <div className="navbar bg-primary container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">

                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost  text-3xl capitalize font-semibold" to="/"> Health care </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        (
                            <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn m-1">Profile</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-52 bg-transparent">

                                        {
                                            options?.map((item) => (
                                                <li
                                                    key={item?.name}
                                                    onClick={item?.func}
                                                    className='btn bg-secondary w-38 border-0 mt-1 flex justify-center items-center text-white'
                                                > {item?.icon} {item?.name} </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </>
                        )
                        :
                        (<Link className="btn bg-secondary w-32 border-0" to="/login"> Login </Link>)
                }
            </div>
        </div>
    );
};

export default Navbar;