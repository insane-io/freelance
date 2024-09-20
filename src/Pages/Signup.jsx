import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../Context/MyContext";
import { GoogleLogin } from "@react-oauth/google";

const Signup = () => {
    const { setLogin } = useContext(MyContext);
    const [join, setjoin] = useState(false)
    const [token, setToken] = useState()
    const [formData, setFormData] = useState({
        email: "",
        password1: "",
        password2: "",
        first_name: "",
        last_name: "",
        sex: ""
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
            const res = await axios.post("http://127.0.0.1:8000/user/signup/", {
                email: formData.email,
                first_name: formData.first_name,
                last_name: formData.last_name,
                password: formData.password1,
                sex: formData.sex
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
            <div className=" flex justify-center ">
                <form className="bg-white">
                    <div className="mb-4 ">
                        <h1 style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', margin: '20px 0' }}>
                            Register
                        </h1>
                        <div className="flex gap-3">
                            <div className="">
                                <label className="block  text-md font-bold mb-2" htmlFor="email" >
                                    First Name
                                </label>
                                <input className="  rounded-md w-full py-3 px-3 focus:outline-none bg-[#E3FEF0]" onChange={(e) => handleChange(e)} name="first_name" type="text" placeholder="First Name" autoComplete="on" required />
                            </div>
                            <div>
                                <label className="block text-md font-bold mb-2" htmlFor="email">
                                    Last Name
                                </label>
                                <input className="rounded-md w-full py-3 px-3 focus:outline-none bg-[#E3FEF0]" onChange={(e) => handleChange(e)} name="last_name" type="text" placeholder="Last Name" autoComplete="on" required />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block  text-md font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="  rounded-md w-full py-3 px-3 focus:outline-none bg-[#E3FEF0]" onChange={(e) => handleChange(e)} name="email" id="user-email" type="email" placeholder="Email" autoComplete="on" required />
                    </div>
                    <div className="mb-6">
                        <label className="block  text-sm font-bold mb-2" htmlFor="password" >
                            Password
                        </label>
                        <input className="rounded-md w-full py-3 px-3 focus:outline-none bg-[#E3FEF0]" id="user-password" name="password1" type="password" placeholder="******************" onChange={(e) => handleChange(e)} required />
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
                    </div>
                    <button className="bg-[#0A9D50] hover:bg-gray-900 w-full text-white font-thin py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" onClick={() => setjoin(true)}>
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
