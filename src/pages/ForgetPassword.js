import { Box, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import { AllCss } from '../components/AllCss'
import {useNavigate} from 'react-router-dom'

export const ForgetPassword = (props) => {
    const [load, setload] = useState(false)
    const initialValues = {
        emailid: ""
    }
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values, { resetForm }) => {
            const json = JSON.stringify(values, null, 2)
            setload(true)
            console.log("log5",load);
            axios.post("http://localhost:9999/searchemail", json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if (res.status === 200) {
                    console.log("load   1 ", load);
                    resetForm({ values: "" })
                    axios.post("http://localhost:9999/getotp",json,{
                        headers: {
                            'Content-Type' : 'application/json'
                        }
                    }).then((res) => {
                        console.log("load 2" , load);
                        if(res.status === 200) {
                            console.log("load 4" , load);
                            setload(false)
                            props.viewToast("info" , "OTP has been generated")
                            console.log("Data", res);
                            navigate("/otpcheck")
                        }
                    }).catch(err => {
                        props.viewToast("error", "Network Error")
                    })
                }
            }).catch(err => {
                props.viewToast("error", "Email Id not registered")
            })
        }
    })
    return (
        <div style={{ backgroundColor: "#f2f5f6" }}>
            <AllCss />
            <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
                {/* Page Content Goes Here */}
                {/* Login Form*/}
                <div className="col col-md-8 col-lg-6 col-xxl-5">
                    {/* Logo*/}
                    <a
                        className="navbar-brand fw-bold fs-3 flex-shrink-0 order-0 align-self-center justify-content-center d-flex mx-0 px-0"
                        href="./index.html"
                    >
                        <div className="d-flex align-items-center">
                            <svg
                                className="f-w-7"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 77.53 72.26"
                            >
                                <path
                                    d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </div>
                    </a>
                    {/* / Logo*/}
                    <div className="shadow-xl p-4 p-lg-5 bg-white">
                        <h1 className="text-center fs-2 mb-5 fw-bold">Forgotten Password</h1>
                        {
                            setload === true ?
                                <Box >
                                    <ScaleLoader
                                        height={40}
                                        loading
                                        width={5}
                                    />
                                    <Typography component="h1" variant='h6' sx={{ marginTop: "1rem" }}>Loading...</Typography>
                                    <Typography component="h1" variant='h6'>Please Wait</Typography>
                                </Box> :
                                <>
                                    <p className="text-muted">
                                        Please enter your email below and we will send you an OTP to create new password.
                                    </p>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="forgot-password" className="form-label">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="emailid"
                                                name="emailid"
                                                placeholder="name@email.com"
                                                value={formik.values.emailid}
                                                onChange={formik.handleChange}
                                            // onChange={(e)=>setemail(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-dark d-block w-100 my-4">
                                            Send OTP
                                        </button>
                                    </form>
                                </>
                        }
                    </div>
                </div>
                {/* / Login Form*/}
                {/* /Page Content */}
            </section>

        </div>
    )
}
