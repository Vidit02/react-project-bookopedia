import { Cookie, CookieTwoTone } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { AllCss } from '../components/AllCss'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

export const OtpCheck = (props) => {
    const [firstchar, setfirstchar] = useState('')
    const [secondchar, setsecondchar] = useState('')
    const [thirdchar, setthirdchar] = useState('')
    const [fourthchar, setfourthchar] = useState('')
    const [fifthchar, setfifthchar] = useState('')
    const [sixthchar, setsixthchar] = useState('')
    const otp = firstchar + secondchar + thirdchar + fourthchar + fifthchar + sixthchar;
    const cookie = new Cookies()
    var otpcookie = cookie.get("otpforforgetpass");
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Otp entered is :: " , otpcookie);
        if(otpcookie === otp){
            console.log("OTP entered correctly");
            props.viewToast("success" , "Otp Verified Successfully")
            navigate("/login")
        } else {
            console.log("OTP incorrect");
            props.viewToast("error" , "Otp is incorrect")
            navigate("/otpcheck")
        }
    }
    console.log("Otp :: ", cookie.get("otpforforgetpass"));

    return (
        <div style={{ backgroundColor: "#f2f5f6" }}>
            <AllCss />
            <Helmet>
                <script src="../lib/jquery/jquery.min.js"></script>
                <script src="../js/otpjs.js"></script>
            </Helmet>
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
                        <p className="text-muted">
                            Please enter the OTP send to your email to create new password.
                            OTP will be valid for 90 seconds only.
                        </p>
                        <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                            <input class="m-2 text-center form-control rounded" type="text" id="first" maxLength={1} onChange={(e) => { setfirstchar(e.target.value) }} />
                            <input class="m-2 text-center form-control rounded" type="text" id="second" maxLength={1} onChange={(e) => { setsecondchar(e.target.value) }} />
                            <input class="m-2 text-center form-control rounded" type="text" id="third" maxLength={1} onChange={(e) => { setthirdchar(e.target.value) }} />
                            <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxLength={1} onChange={(e) => { setfourthchar(e.target.value) }} />
                            <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxLength={1} onChange={(e) => { setfifthchar(e.target.value) }} />
                            <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxLength={1} onChange={(e) => { setsixthchar(e.target.value) }} />
                        </div>
                        <Box sx={{ alignContent: "center", width: "100%", marginLeft: "6rem", marginTop: "1rem" }}>
                            <Stack spacing={3} direction="row" >
                                <Button variant='outlined' disabled sx={{ p: 1 }}>Resend OTP</Button>
                                <Button variant='contained' color='success' sx={{ p: 1 }} onClick={handleSubmit}>Verify OTP</Button>
                            </Stack>
                        </Box>
                    </div>

                </div>
                {/* / Login Form*/}
                {/* /Page Content */}
            </section>
        </div>
    )
}
