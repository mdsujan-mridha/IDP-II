import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../actions/userAction';

import profileImage from "../Assets/profile/profile.svg";

const LoginSignUp = () => {

    const dispatch = useDispatch();
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
    const loginSubmit = (e) =>{
         e.preventDefault();
         dispatch(login(loginEmail,loginPassword));
    }

    // register function 
    const registerSubmit = (e)=>{
         e.preventDefault();
         const myForm = new FormData();
         myForm.set("name",name);
         myForm.set("email",email);
         myForm.set("password",password);
         myForm.set("avatar",avatar);
    }

    // read register filed data
    const registerDataChange = (e)=>{
         if(e.target.name === "avatar"){
             const reader = new FileReader();
             reader.onload = () =>{
                           if(reader.readyState ===2){
                            setAvatarPreview(reader.result);
                            setAvatar(reader.result);
                           }
             };
             reader.readAsDataURL(e.target.files[[0]]);
         } else{
            setUser({...user,[e.target.name]:e.target.value});
         }
    }

    // redirect user,if anyone try to access somethings without login then redirect user to login page & anyone come from any location then after login/register redirect user to location page
    const redirect = location.search ? location.search.split("_")[1] :"/account";
     
    return (
        <div>
            <h1> Login </h1>
        </div>
    );
};

export default LoginSignUp;