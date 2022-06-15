import React from 'react'
import { AllCss } from '../components/AllCss'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const MyAccount = () => {
    return (
        <div>
            <AllCss />
            <section className="mt-0 vh-lg-100" style={{ textAlign: "left" }}>
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
                                                My Account
                                            </Link>
                                        </li>
                                        <li className="me-4">
                                            <Link className="nav-link-checkout " to="/checkout">
                                                Profile
                                            </Link>
                                        </li><li className="me-4">
                                            <Link
                                                className="nav-link-checkout "
                                                to="/checkoutshipping"
                                            >
                                                Address Book
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="nav-link-checkout nav-link-last "
                                                to="/checkoutpayment"
                                            >
                                                Payments Option
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>{" "}
                                <div className="mt-5">
                                    <h3 className="fs-5 fw-bolder mb-0 border-bottom pb-4">
                                        Your Orders
                                    </h3>
                                    <div className="table-responsive">
                                        <div className="row mx-0 py-4 g-0 border-bottom">
                                            <div className="col-2 position-relative">
                                                <picture className="d-block border">
                                                    <img
                                                        className="img-fluid"
                                                        src="./assets/images/products/product-cart-1.jpg"
                                                        alt="HTML Bootstrap Template by Pixel Rocket"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="col-9 offset-1">
                                                <div>
                                                    <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                        Order-Id : #123901
                                                    </h6>
                                                    <span className="d-block text-muted fw-bolder fs-9">
                                                        Nike ZoomX Vaporfly
                                                    </span>
                                                    <span className="d-block text-muted fw-bolder fs-9">
                                                        Nike ZoomX Vaporfly
                                                    </span>
                                                    <span className="d-block text-muted fw-bolder fs-9">
                                                        Nike ZoomX Vaporfly
                                                    </span>
                                                </div>
                                                <p className="fw-bolder text-end text-muted m-0">$85.00</p>
                                            </div>
                                        </div>
                                        <div className="row mx-0 py-4 g-0 border-bottom">
                                            <div className="col-2 position-relative">
                                                <picture className="d-block border">
                                                    <img
                                                        className="img-fluid"
                                                        src="./assets/images/products/product-cart-2.jpg"
                                                        alt="HTML Bootstrap Template by Pixel Rocket"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="col-9 offset-1">
                                                <div>
                                                    <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                        Nike ZoomX Vaporfly
                                                    </h6>
                                                    <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                        Size: 11 / Qty: 1
                                                    </span>
                                                </div>
                                                <p className="fw-bolder text-end text-muted m-0">$125.00</p>
                                            </div>
                                        </div>
                                        <table className="table align-middle">
                                            <tbody className="border-0">
                                                {/* Cart Item*/}
                                                {/* / Cart Item*/}
                                                {/* Cart Item*/}
                                                {/* / Cart Item*/}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='mt-4'>
                                        <Stack direction="row" spacing={2}>
                                            <Button variant="" startIcon={<ArrowBackIosIcon />} href="index">
                                                Back to Home Page
                                            </Button>
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
