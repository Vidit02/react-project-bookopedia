import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { AllCss } from '../components/AllCss'

export const CheckoutShipping = (props) => {
    const [products, setproducts] = useState([])
    const [prodata, setProdata] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [isuser, setIsuser] = useState(true)
    const [user, setUser] = useState()
    const [authtoken, setauthtoken] = useState(null)
    const [userid, setuserid] = useState(null)
    const [price, setPrice] = useState(0)
    const navigate = useNavigate()

    

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
                if (res.data.status == 200) {
                    setPrice(res.data.data)
                }
            })
        }
    })

    const placeOrder = async () => {
        console.log("userid is",userid);
        console.log(authtoken , "Authtoken is");
        await axios.post("http://localhost:9999/placeorder/"+userid+"/"+authtoken).then((res) => {
            console.log(res);
            props.viewToast("success","Order is placed")
            navigate("/index")
        })
    }
    return (
        <div>
            <AllCss />
            <section className="mt-0  vh-lg-100">
                {/* Page Content Goes Here */}
                <div className="container">
                    <div className="row g-0 vh-lg-100">
                        <div className="col-lg-7 pt-5 pt-lg-10">
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
                                            <Link className="nav-link-checkout " to="/cart">
                                                Your Cart
                                            </Link>
                                        </li>
                                        <li className="me-4">
                                            <Link
                                                className="nav-link-checkout active"
                                                to="/checkoutshipping"
                                            >
                                                Shipping
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>{" "}
                                <div className="mt-5">
                                    {/* Checkout Information Summary */}
                                    {/* / Checkout Information Summary*/}
                                    {/* Checkout Panel Information*/}
                                    <h3 className="fs-5 fw-bolder mb-4 border-bottom pb-4">
                                        Shipping Method
                                    </h3>
                                    {/* Shipping Option*/}
                                    <div className="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="checkoutShippingMethod"
                                            id="checkoutShippingMethodOne"
                                            defaultChecked=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="checkoutShippingMethodOne"
                                        >
                                            <span className="d-flex justify-content-between align-items-left">
                                                <span>
                                                    <span className="mb-0 fw-bolder d-block">
                                                        Normal Delivery
                                                    </span>
                                                    <small className="fw-bolder">
                                                        Will be delivered in 7-10 days
                                                    </small>
                                                </span>
                                                <span className="small fw-bolder text-uppercase">Free</span>
                                            </span>
                                        </label>
                                    </div>
                                    {/* Shipping Option*/}
                                    <div className="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="checkoutShippingMethod"
                                            id="checkoutShippingMethodTwo"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="checkoutShippingMethodTwo"
                                        >
                                            <span className="d-flex justify-content-between align-items-start">
                                                <span>
                                                    <span className="mb-0 fw-bolder d-block">Early Delivery</span>
                                                    <small className="fw-bolder">
                                                        Will be delivered in 2-3 days
                                                    </small>
                                                </span>
                                                <span className="small fw-bolder text-uppercase">Rs. 100</span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="pt-5 mt-5 pb-5 border-top d-flex flex-column flex-md-row justify-content-between align-items-center">
                                        <Link
                                            to="/checkout"
                                            className="btn ps-md-0 btn-link fw-bolder w-100 w-md-auto mb-2 mb-md-0"
                                            role="button"
                                        >
                                            Back to information
                                        </Link>
                                        {/* className="btn btn-dark w-100 w-md-auto" */}
                                        <Button className='btn btn-dark w-100 w-md-auto' onClick={()=>placeOrder()}>
                                            Proceed to Order
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 bg-light pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
                            <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5">
                                <div className="pb-3">
                                    {
                                        isLoading ? <Box>
                                            <ClipLoader
                                                height={40}
                                                loading
                                                width={5}
                                            />
                                            <Typography component="h1" variant='h6' sx={{ marginTop: "1rem" }}>Loading...</Typography>
                                            <Typography component="h1" variant='h6'>Please Wait</Typography>
                                        </Box> : <>
                                            {
                                                products.map((book) => {
                                                    return (
                                                        <div className="row mx-0 py-4 g-0 border-bottom">
                                                            <div className="col-2 position-relative">
                                                                <span className="checkout-item-qty">3</span>
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
                                    {/* Cart Item*/}

                                </div>
                                <div className="py-4 border-bottom">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <p className="m-0 fw-bolder fs-6">Subtotal</p>
                                        <p className="m-0 fs-6 fw-bolder">Rs. {price}</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <p className="m-0 fw-bolder fs-6">Shipping</p>
                                        <p className="m-0 fs-6 fw-bolder">FREE</p>
                                    </div>
                                </div>
                                <div className="py-4 border-bottom">
                                    <div className="d-flex justify-content-between">
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
                                            placeholder="Enter your coupon code"
                                        />
                                        <button className="btn btn-dark btn-sm px-4">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </section>


        </div>

        // <div>
        //     <AllCss />
        //     <section class="mt-0 vh-lg-100">
        //         <div class="container">
        //             <div class="row g-0 vh-lg-100">
        //                 <div class="col-lg-7 pt-5 pt-lg-10">
        //                     <div class="pe-lg-5">
        //                         {/* LOGO */}
        //                         <Link class="navbar-brand fw-bold fs-3 flex-shrink-0 mx-0 px-0" to="/index">
        //                             <div class="d-flex align-items-center">
        //                                 <svg class="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fill-rule="evenodd" /></svg>
        //                             </div>
        //                         </Link>
        //                         {/* Navbar for cart */}
        //                         <nav class="d-none d-md-block">
        //                             <ul class="list-unstyled d-flex justify-content-start mt-4 align-items-center fw-bolder small">
        //                                 <li class="me-4"><Link class="nav-link-checkout "
        //                                     to="/cart">Your Cart</Link></li>
        //                                 <li class="me-4"><Link class="nav-link-checkout "
        //                                     to="/checkout">Information</Link></li>
        //                                 <li class="me-4"><Link class="nav-link-checkout active"
        //                                     to="/checkoutshipping">Shipping</Link></li>
        //                                 <li><Link class="nav-link-checkout nav-link-last "
        //                                     to="/checkoutpayment">Payment</Link></li>
        //                             </ul>
        //                         </nav>
        //                         {/* Div */}
        //                         <div class="mt-5">
        //                             <ul class="list-group mb-5 d-none d-lg-block rounded-0">
        //                                 <li class="list-group-item d-flex justify-content-between align-items-center">
        //                                     <div class="d-flex justify-content-start align-items-center">
        //                                         <span class="text-muted small me-2 f-w-36 fw-bolder">Contact</span>
        //                                         <span class="small">test@email.com</span>
        //                                     </div>
        //                                     <Link to="/checkout" class="text-muted small" role="button">Change</Link>
        //                                 </li>
        //                             </ul>
        //                             <h3 class="fs-5 fw-bolder mb-4 border-bottom pb-4">Shipping Method</h3>
        //                             <div class="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
        //                                 <input class="form-check-input" type="radio" name="checkoutShippingMethod" id="checkoutShippingMethodOne" />
        //                                 <label class="form-check-label" for="checkoutShippingMethodOne">
        //                                     <span class="d-flex justify-content-between align-items-start">
        //                                         <span>
        //                                             <span class="mb-0 fw-bolder d-block">Click & Collect Shipping</span>
        //                                             <small class="fw-bolder">Collect from our London store</small>
        //                                         </span>
        //                                         <span class="small fw-bolder text-uppercase">Free</span>
        //                                     </span>
        //                                 </label>
        //                             </div>
        //                             <div class="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3" style={{ textAlign: "left" }}>
        //                                 <input class="form-check-input" type="radio" name="checkoutShippingMethod" id="checkoutShippingMethodTwo" />
        //                                 <label class="form-check-label" for="checkoutShippingMethodTwo">
        //                                     <span class="d-flex justify-content-between align-items-start">
        //                                         <span>
        //                                             <span class="mb-0 fw-bolder d-block">UPS Next Day</span>
        //                                             <small class="fw-bolder">For all orders placed before 1pm Monday to Thursday</small>
        //                                         </span>
        //                                         <span class="small fw-bolder text-uppercase">$19.99</span>
        //                                     </span>
        //                                 </label>
        //                             </div>
        //                             <div class="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
        //                                 <input class="form-check-input" type="radio" name="checkoutShippingMethod" id="checkoutShippingMethodThree" />
        //                                 <label class="form-check-label" for="checkoutShippingMethodThree">
        //                                     <span class="d-flex justify-content-between align-items-start">
        //                                         <span>
        //                                             <span class="mb-0 fw-bolder d-block">DHL Priority Service</span>
        //                                             <small class="fw-bolder">24 - 36 hour delivery</small>
        //                                         </span>
        //                                         <span class="small fw-bolder text-uppercase">$9.99</span>
        //                                     </span>
        //                                 </label>
        //                             </div>
        //                             <div class="pt-5 mt-5 pb-5 border-top d-flex flex-column flex-md-row justify-content-between align-items-center">
        //                                 <Link to="/checkout" class="btn ps-md-0 btn-link fw-bolder w-100 w-md-auto mb-2 mb-md-0" role="button">Back to information</Link>
        //                                 <Link to="/checkoutpayment" class="btn btn-dark w-100 w-md-auto" role="button">Proceed to payment</Link>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div class="col-12 col-lg-5 bg-light pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
        //                     <div class="p-4 py-lg-0 pe-lg-0 ps-lg-5">
        //                         <div class="pb-3">
        //                             {/* Cart Item */}
        //                             <div class="row mx-0 py-4 g-0 border-bottom">
        //                                 <div class="col-2 position-relative">
        //                                     <span class="checkout-item-qty">3</span>
        //                                     <picture class="d-block border">
        //                                         <img class="img-fluid" src="./assets/images/products/product-cart-1.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
        //                                     </picture>
        //                                 </div>
        //                                 <div class="col-9 offset-1">
        //                                     <div>
        //                                         <h6 class="justify-content-between d-flex align-items-start mb-2">
        //                                             Nike Air VaporMax 2021
        //                                             <i class="ri-close-line ms-3"></i>
        //                                         </h6>
        //                                         <span class="d-block text-muted fw-bolder text-uppercase fs-9">Size: 9 / Qty: 1</span>
        //                                     </div>
        //                                     <p class="fw-bolder text-end text-muted m-0">$85.00</p>
        //                                 </div>
        //                             </div>
        //                             {/* Cart Item */}
        //                             <div class="row mx-0 py-4 g-0 border-bottom">
        //                                 <div class="col-2 position-relative">
        //                                     <span class="checkout-item-qty">3</span>
        //                                     <picture class="d-block border">
        //                                         <img class="img-fluid" src="./assets/images/products/product-cart-2.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
        //                                     </picture>
        //                                 </div>
        //                                 <div class="col-9 offset-1">
        //                                     <div>
        //                                         <h6 class="justify-content-between d-flex align-items-start mb-2">
        //                                             Nike ZoomX Vaporfly
        //                                             <i class="ri-close-line ms-3"></i>
        //                                         </h6>
        //                                         <span class="d-block text-muted fw-bolder text-uppercase fs-9">Size: 11 / Qty: 1</span>
        //                                     </div>
        //                                     <p class="fw-bolder text-end text-muted m-0">$125.00</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div class="py-4 border-bottom">
        //                             <div class="d-flex justify-content-between align-items-center mb-2">
        //                                 <p class="m-0 fw-bolder fs-6">Subtotal</p>
        //                                 <p class="m-0 fs-6 fw-bolder">$422.99</p>
        //                             </div>
        //                             <div class="d-flex justify-content-between align-items-center ">
        //                                 <p class="m-0 fw-bolder fs-6">Shipping</p>
        //                                 <p class="m-0 fs-6 fw-bolder">$8.95</p>
        //                             </div>
        //                         </div>
        //                         <div class="py-4 border-bottom">
        //                             <div class="d-flex justify-content-between">
        //                                 <div>
        //                                     <p class="m-0 fw-bold fs-5">Grand Total</p>
        //                                     <span class="text-muted small">Inc $45.89 sales tax</span>
        //                                 </div>
        //                                 <p class="m-0 fs-5 fw-bold">$422.99</p>
        //                             </div>
        //                         </div>
        //                         <div class="py-4">
        //                             <div class="input-group mb-0">
        //                                 <input type="text" class="form-control" placeholder="Enter your coupon code"/>
        //                                     <button class="btn btn-dark btn-sm px-4">Apply</button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
    )
}
