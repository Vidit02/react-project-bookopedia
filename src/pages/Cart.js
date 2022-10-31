import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { AllCss } from '../components/AllCss'

export const Cart = () => {
    const [products, setproducts] = useState([])
    const [prodata, setProdata] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [isuser, setIsuser] = useState(true)
    const [authtoken, setauthtoken] = useState(null)
    const [userid, setuserid] = useState(null)
    const [price, setPrice] = useState(0)
    const navigate = useNavigate()


    // useEffect(() => {
    //     if (sessionStorage.getItem("userdata") !== null) {
    //         setauthtoken(JSON.parse(sessionStorage.getItem("userdata")).authtoken)
    //         setuserid(JSON.parse(sessionStorage.getItem("userdata")).userid)
    //         setIsuser(false)
    //     } else {
    //         setIsuser(true)
    //     }
    // }, [userid])

    // useEffect(() => {
    //     const setAttributes = async () => {
    //         if (sessionStorage.getItem("userdata") !== null) {
    //             setauthtoken(JSON.parse(sessionStorage.getItem("userdata")).authtoken)
    //             setuserid(JSON.parse(sessionStorage.getItem("userdata")).userid)
    //             setIsuser(false)
    //             return true
    //         } else {
    //             setIsuser(true)
    //             return false
    //         }
    //     }
    //     console.log("userid is ", userid, "authtoken is ", authtoken);
    //     const fetchProductCart = async () => {
    //         setAttributes()
    //         axios.get("http://localhost:9999/getPro", {
    //             headers: {
    //                 "authToken": authtoken,
    //                 "userId": userid

    //             }
    //         }).then((res) => {
    //             setproducts(res.data.data)
    //             setisLoading(false)
    //             console.log("data is ", products)
    //         })
    //     }
    //     if (userid != null) {
    //         fetchProductCart()
    //     }
    // }, [])
    useEffect(() => {
        if (sessionStorage.getItem("userdata") !== null && isLoading == true) {
            setauthtoken(JSON.parse(sessionStorage.getItem("userdata")).authtoken)
            setuserid(JSON.parse(sessionStorage.getItem("userdata")).userid)
            axios.get("http://localhost:9999/getPro", {
                headers: {
                    'userid': userid,
                    'authToken': authtoken
                }
            }).then((res) => {
                console.log(res);
                // setCart(false)
                if (res.data.status == 200) {
                    console.log(res.data.data);
                    setisLoading(false)
                    setproducts(res.data.data)
                } else {
                    setisLoading(true)
                    // setCartnum(0)
                }
            })
            axios.get("http://localhost:9999/getTotalPrice", {
                headers: {
                    'userid': userid,
                    'authToken': authtoken
                }
            }).then((res) => {
                if(res.data.status == 200){
                    setPrice(res.data.data)
                }
            })
        }
    })

    console.log("this is productz", products)


    return (
        <div>
            <AllCss />
            <section className="mt-0   vh-lg-100" style={{ textAlign: "left" }}>
                {/* Page Content Goes Here */}
                <div className="container">
                    <div className="row g-0 vh-lg-100">
                        <div className="col-12 col-lg-7 pt-5 pt-lg-10">
                            <div className="pe-lg-5">
                                {/* Logo*/}
                                <Link
                                    className="navbar-brand fw-bold fs-3 flex-shrink-0 mx-0 px-0"
                                    to="/index"
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
                                </Link>
                                {/* / Logo*/}
                                <nav className="d-none d-md-block">
                                    <ul className="list-unstyled d-flex justify-content-start mt-4 align-items-center fw-bolder small">
                                        <li className="me-4">
                                            <Link className="nav-link-checkout active" to="/cart">
                                                Your Cart
                                            </Link>
                                        </li>
                                        <li className="me-4">
                                            <Link
                                                className="nav-link-checkout "
                                                to="/checkoutshipping"
                                            >
                                                Shipping
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>{" "}
                                <div className="mt-5">
                                    <h3 className="fs-5 fw-bolder mb-0 border-bottom pb-4">
                                        Your Cart
                                    </h3>
                                    <div className="table-responsive">
                                        {
                                            isLoading ? <Box>
                                                <ClipLoader
                                                    height={40}
                                                    loading
                                                    width={5}
                                                />
                                                <Typography component="h1" variant='h6' sx={{ marginTop: "1rem" }}>Loading...</Typography>
                                                <Typography component="h1" variant='h6'>Please Wait</Typography>
                                            </Box> :
                                                <>
                                                    {
                                                        products.map((book) => {
                                                            return (
                                                                <div className="row mx-0 py-4 g-0 border-bottom">
                                                                    <div className="col-2 position-relative">
                                                                        <picture className="d-block border">
                                                                            <img
                                                                                className="img-fluid"
                                                                                src={`data:image/png;base64,${book.frontcover}`}
                                                                                alt="HTML Bootstrap Template by Pixel Rocket"
                                                                            />
                                                                        </picture>
                                                                    </div>
                                                                    <div className="col-9 offset-1">
                                                                        <div>
                                                                            <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                                                {book.bookname}
                                                                                <i className="ri-close-line ms-3" />
                                                                            </h6>
                                                                            <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <p className="fw-bolder text-end text-muted m-0">Rs. {book.price}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 bg-light pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
                            <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5">
                                <div className="pb-4 border-bottom">
                                    <div className="d-flex flex-column flex-md-row justify-content-md-between mb-4 mb-md-2">
                                        <div>
                                            <p className="m-0 fw-bold fs-5">Grand Total</p>
                                            <span className="text-muted small">Inc of sales tax</span>
                                        </div>
                                        <p className="m-0 fs-5 fw-bold">Rs. {price}</p>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <div className="input-group mb-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter coupon code"
                                        />
                                        <button className="btn btn-secondary btn-sm px-4">Apply</button>
                                    </div>
                                </div>
                                <Link
                                    to="/checkoutshipping"
                                    className="btn btn-dark w-100 text-center"
                                    role="button"
                                >
                                    Proceed to checkout
                                </Link>{" "}
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </section>

        </div>
    )
}
