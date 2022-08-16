import { Avatar, Box, Button, Container, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavigationBar } from '../components/NavigationBar'
import { Formik, useFormik } from 'formik';
import { LoginOutlined } from '@mui/icons-material';
import * as Yup from 'yup';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom'

export const Login = (props) => {
    const theme = createTheme({
        palette: {
            dark: {
                main: '#000000'
            }
        }
    })
    const navigate = useNavigate();
    // const LoginSchema = Yup.object().shape({
    //     emailid: Yup.string()
    //         .email("Invalid Email ")
    //         .required("Please Enter Email Id"),
    //     password: Yup.string()
    //         .min(8, "Password must be greater then 8 character")
    //         .max(16, "Password must be less then 16 characters")
    //         .required("Please Enter Password")
    // })
    const initialValues = {
        emailid: "",
        password: ""
    }
    const formik = useFormik({
        initialValues : initialValues,
        onSubmit: (values, { resetForm }) => {
            const json = JSON.stringify(values,null,2)
            axios.post("http://localhost:9999/login" , json , {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).then((res) => {
                if(res.status === 200) { 
                    console.log(res);
                    props.viewToast("success", `Welcome Back, ${res.data.username}`)
                    resetForm({values:''})
                    const userjson = {
                        name : res.data.username,
                        email : res.data.email,
                        authtoken : res.data.authtoken,
                        userid : res.data.userid
                    }
                    sessionStorage.setItem("userdata" , JSON.stringify(userjson))
                    // props.loggedin(true)
                    // props.seedata()
                    navigate("/")
                }
            }).catch(err=>{
                props.viewToast("error","Invalid Email or Password")
            })
        }
    })
    return (
        <div style={{ backgroundColor: "#f2f5f6" }}>
            <AllCss />
            <NavigationBar />
            <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
                {/* Page Content Goes Here */}
                {/* Login Form*/}
                <div className="col col-md-8 col-lg-6 col-xxl-5">
                    {/* Logo*/}

                    {/* / Logo*/}
                    <div className="shadow-xl p-4 p-lg-5 bg-white">
                        <h1 className="text-center fw-bold mb-5 fs-2">Login</h1>
                        <a href="#" className="btn btn-facebook d-block mb-2">
                            <i className="ri-facebook-circle-fill align-bottom" /> Login with
                            Facebook
                        </a>
                        <a href="#" className="btn btn-twitter d-block mb-2">
                            <i className="ri-twitter-fill align-bottom" /> Login with Twitter
                        </a>
                        <span className="text-muted text-center d-block fw-bolder my-4">OR</span>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group" style={{ textAlign: "left" }}>
                                <label className="form-label" htmlFor="login-email" >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailid"
                                    placeholder="name@email.com"
                                    name="emailid"
                                    value={formik.values.emailid}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="login-password"
                                    className="form-label d-flex justify-content-between align-items-center"
                                >
                                    Password
                                    <a href='/forgetpass'  className="text-muted small">
                                        Forgot your password?
                                    </a>
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" type="submit" onSubmit={formik.handleSubmit} color="dark" sx={{ marginBottom: 3, width: "100%" ,color: "white" , p:2 }} >
                                    Signup
                                </Button>
                            </ThemeProvider>
                        </form>
                        <p className="d-block text-center text-muted">
                            New customer?{" "}
                            <a className="text-muted" href="./register.html">
                                Sign up for an account
                            </a>
                        </p>
                    </div>
                </div>
                {/* / Login Form*/}
                {/* /Page Content */}
            </section>

            <Footer />
        </div>
    )
}
