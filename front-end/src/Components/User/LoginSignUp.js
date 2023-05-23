import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearError, login } from '../../actions/userAction';

import profileImage from "../Assets/profile/profile.svg";
import {MdTagFaces} from "react-icons/md";
import {AiOutlineMail} from "react-icons/ai";
import {AiFillUnlock} from "react-icons/ai";
import Loader from "../../Share/Loader";

import "./LoginSignUp.css";

const LoginSignUp = () => {

    const dispatch = useDispatch();
    // const { error, loading, isAuthenticated } = useSelector((state) => state?.user);
    const { error, loading, isAuthenticated } = useSelector((state) => state.user);
    // all state 
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [avatar, setAvatar] = useState(profileImage);
    const [avatarPreview, setAvatarPreview] = useState(profileImage);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const { name, email, password } = user;

    // tab 
    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    // navigate 
    const navigate = useNavigate();
    //  navigate : navigate user to from page or profile page 
    let location = useLocation();
    // location:track user location 

    // login function 
    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    }

    // register function 
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("avatar", avatar);
    }

    // read register filed data
    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[[0]]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    }

    // redirect user,if anyone try to access somethings without login then redirect user to login page & anyone come from any location then after login/register redirect user to location page
    const redirect = location.search ? location.search.split("_")[1] : "/account";

    useEffect(() => {

        if (error) {
            toast.error(error)
            dispatch(clearError());
        }
        if (isAuthenticated) {
            toast.success("You are logged in")
            navigate(redirect);
        }


    }, [dispatch, error, navigate, isAuthenticated, redirect])

    //    tab switch 
    const switchTabs = (e, tab) => {
        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutralForm");
            switcherTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");
            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }

    }

    return (
        <Fragment>
            {
                loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        <div className="LoginSignUpContainer">
                            <div className="LoginSignUpBox">
                                <div>
                                    <div className="login_signUp_toggle">
                                        <p onClick={(e) => switchTabs(e, "login")}> LOGIN </p>
                                        <p onClick={(e) => switchTabs(e, "register")}> REGISTRATION </p>
                                    </div>
                                    <button ref={switcherTab}></button>
                                </div>
                                <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>

                                    <div className="loginEmail">
                                        <AiOutlineMail />
                                        <input
                                            type="email"
                                            placeholder='Email'
                                            required
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}

                                        />
                                    </div>
                                    <div className="loginPassword">
                                        <AiFillUnlock />
                                        <input type="password"
                                            placeholder='password'
                                            required
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                        />
                                    </div>
                                    <Link to="/"> Forget password ? </Link>
                                    <input type="submit" value="Login" className='loginBtn' />
                                </form>
                                <form
                                    className="signUpForm"
                                    ref={registerTab}
                                    encType="multipart/form-data"
                                    onSubmit={registerSubmit}
                                >
                                    <div className="signUpName">
                                        <MdTagFaces />
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            required
                                            name="name"
                                            value={name}
                                            onChange={registerDataChange}
                                        />
                                    </div>
                                    <div className="signUpEmail">
                                        <AiOutlineMail />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            name="email"
                                            value={email}
                                            onChange={registerDataChange}
                                        />
                                    </div>
                                    <div className="signUpPassword">
                                        <AiFillUnlock />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            name="password"
                                            value={password}
                                            onChange={registerDataChange}
                                        />
                                    </div>

                                    <div id="registerImage">
                                        <img src={avatarPreview} alt="Avatar Preview" />
                                        <input
                                            type="file"
                                            name="avatar"
                                            accept="image/*"
                                            onChange={registerDataChange}
                                        />
                                    </div>
                                    <input type="submit" value="Register" className="signUpBtn" />
                                </form>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default LoginSignUp;