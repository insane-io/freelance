import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../Context/MyContext";
import { GoogleLogin } from "@react-oauth/google";

const Signup = () => {
    const { setLogin } = useContext(MyContext);
    const [token, setToken] = useState()
    const [formData, setFormData] = useState({
        email: "",
        password1: "",
        password2: "",
        first_name: "",
        last_name: "",
        phone_no: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async (event) => {
        if (event) {
            event.preventDefault();
        }
        try {
            const res = await axios.post("http://127.0.0.1:8000/user/register/teacher/", {
                email: formData.email,
                first_name: formData.first_name,
                last_name: formData.last_name,
                password: formData.password1,
                phone_no: formData.phone_no,
            }, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                        ? 'Bearer ' + localStorage.getItem('access_token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                },
            });
            localStorage.setItem("access_token", res.data.access);
            localStorage.setItem("refresh_token", res.data.refresh);
            navigate("/");
            setLogin(true);
            console.log(res.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className=" flex justify-center my-4 ">
                <form className="bg-white border-2 rounded-xl p-5">
                    <div className="mb-4 flex flex-col items-center">
                        <h1 className="text-3xl font-semibold my-2">
                            Sign up
                        </h1>
                        <div className="flex gap-3">
                            <div className="">
                                <label className="block  text-md font-bold mb-2" htmlFor="email" >
                                    First Name
                                </label>
                                <input className="  rounded-md w-full py-3 px-3 focus:outline-none bg-[#E6E0E9]" onChange={(e) => handleChange(e)} name="first_name" type="text" placeholder="First Name" autoComplete="on" required />
                            </div>
                            <div>
                                <label className="block text-md font-bold mb-2" htmlFor="email">
                                    Last Name
                                </label>
                                <input className="rounded-md w-full py-3 px-3 focus:outline-none bg-[#E6E0E9]" onChange={(e) => handleChange(e)} name="last_name" type="text" placeholder="Last Name" autoComplete="on" required />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block  text-md font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="  rounded-md w-full py-3 px-3 focus:outline-none bg-[#E6E0E9]" onChange={(e) => handleChange(e)} name="email" id="user-email" type="email" placeholder="Email" autoComplete="on" required />
                    </div>
                    <div className="mb-6">
                        <label className="block  text-sm font-bold mb-2" htmlFor="password" >
                            Password
                        </label>
                        <input className="rounded-md w-full py-3 px-3 focus:outline-none bg-[#E6E0E9]" id="user-password" name="password1" type="password" placeholder="********" onChange={(e) => handleChange(e)} required />
                    </div>
                    <div className="mb-6">
                        <label className="block  text-sm font-bold mb-2" htmlFor="password" >
                            Phone
                        </label>
                        <input className="rounded-md w-full py-3 px-3 focus:outline-none bg-[#E6E0E9]" id="phone_no" name="phone_no" type="number" placeholder="Phone No." onChange={(e) => handleChange(e)} required />
                    </div>
                    {/* <div className="flex justify-between items-center">
                        <div className="h-1 bg-gray-300 rounded-full w-2/5"></div>
                        <h1>OR</h1>
                        <div className="h-1 bg-gray-300 rounded-full w-2/5"></div>
                    </div>
                    <div className="my-5 flex justify-center">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                setToken(credentialResponse.credential);
                                console.log(credentialResponse.credential);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </div> */}
                    <button className="bg-[#DF73FF] hover:bg-gray-900 w-full text-white font-thin py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" onClick={handleSave}>
                        Join
                    </button>
                    <Link to="/login" className="flex justify-center m-4">
                        Already a user? Sign-In{" "}
                    </Link>
                </form>
            </div>


        </>
    );
};

export default Signup;
