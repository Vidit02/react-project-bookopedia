import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavigationBar } from '../components/NavigationBar'
import { Formik, useFormik } from 'formik';
import { LoginOutlined } from '@mui/icons-material';

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            emaildid: "",
            password: ""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    console.log(formik.values);
    return (
        <div style={{backgroundColor:"#f2f5f6"}}>
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
                        <form>
                            <div className="form-group" style={{textAlign:"left"}}>
                                <label className="form-label" htmlFor="login-email" >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="login-email"
                                    placeholder="name@email.com"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="login-password"
                                    className="form-label d-flex justify-content-between align-items-center"
                                >
                                    Password
                                    <a href="./forgotten-password.html" className="text-muted small">
                                        Forgot your password?
                                    </a>
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="login-password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button type="submit" className="btn btn-dark d-block w-100 my-4">
                                Login
                            </button>
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
