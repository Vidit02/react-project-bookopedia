import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import "../assets/css/"
import { Link, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import { NavigationBar } from '../components/NavigationBar'

export const Product = () => {

    var productid = useParams().id;
    const [products, setproducts] = useState([])
    const [prodata, setProdata] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [isProLoading, setIsProLoading] = useState(true)
    const [fast, setFast] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            axios.get("http://localhost:9999/products").then((res => {
                setproducts(res.data)
                setisLoading(false)
                console.log("this is all products fetch data");
            }))
        }
        const fetchProductData = async () => {
            axios.get("http://localhost:9999/product/" + productid).then((res => {
                setProdata(res.data)
                setIsProLoading(false)
                console.log("This is the single produc");
            }))
        }
        fetchData();
        fetchProductData();
    }, [])
    console.log(prodata)
    return (
        <div>
            <AllCss />
            <NavigationBar />
            <section class="mt-0">
                {
                    isProLoading && isLoading ? <Box>
                        <ClipLoader
                            height={40}
                            loading
                            width={5}
                        />
                        <Typography component="h1" variant='h6' sx={{ marginTop: "1rem" }}>Loading...</Typography>
                        <Typography component="h1" variant='h6'>Please Wait</Typography>
                    </Box> :
                        <>   <div class="bg-dark py-6">
                            <div class="container-fluid">
                                <nav class="m-0" aria-label="breadcrumb">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item breadcrumb-light"><Link to="/">Home</Link></li>
                                        <li class="breadcrumb-item breadcrumb-light"><Link to="/category">Books</Link></li>
                                        <li class="breadcrumb-item  breadcrumb-light active" aria-current="page"> {prodata.data.bookname}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                            {/* BreadCrumbs */}
                            <div class="container-fluid mt-5">
                                <div class="row g-9" data-sticky-container>
                                    <div class="col-12 col-md-6 col-xl-7">
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <picture>
                                                    <img class="img-fluid" data-zoomable src={`data:image/png;base64,${prodata.data.frontcover}`} alt="HTML Bootstrap Template by Pixel Rocket" />
                                                </picture>
                                            </div>
                                            <div class="col-12">
                                                <picture>
                                                    <img class="img-fluid" data-zoomable src={`data:image/png;base64,${prodata.data.frontcover}`} alt="HTML Bootstrap Template by Pixel Rocket" />
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Information */}
                                    <div class="col-12 col-md-6 col-lg-5">
                                        <div class="sticky-top top-5">
                                            <div class="pb-3">
                                                <div class="d-flex align-items-center mb-3">
                                                    <p class="small fw-bolder  tracking-wider text-muted m-0 me-4">By {prodata.data.author}</p>
                                                    <div class="d-flex justify-content-start align-items-center disable-child-pointer cursor-pointer"
                                                        data-pixr-scrollto
                                                        data-target=".reviews">
                                                        <div class="rating position-relative d-table">
                                                            <div class="position-absolute stars" style={{ width: "80%" }}>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                            </div>
                                                            <div class="stars">
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            </div>
                                                        </div>
                                                        <small class="text-muted d-inline-block ms-2 fs-bolder">(105 reviews)</small>
                                                    </div>
                                                </div>
                                                <h1 class="mb-1 fs-2 fw-bold" style={{ textAlign: "left" }}>{prodata.data.bookname}</h1>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p class="fs-4 m-0">Rs.{prodata.data.price}</p>
                                                </div>
                                                <div class="border-top mt-4 mb-3 product-option">
                                                    <small class="text-uppercase pt-4 d-block fw-bolder" style={{ textAlign: "left" }}>
                                                        <span class="text-muted">Delivery Chosen</span> : <span class="selected-option fw-bold"
                                                            data-pixr-product-option="size">
                                                            {
                                                                fast ? "Fast Delivery Chosen" : "Standard Delivery Chosen"
                                                            }
                                                        </span>
                                                        <div style={{ marginTop: "10px" }}>
                                                            <Button variant="outlined" sx={{
                                                                marginRight: '20px',
                                                                color: 'black',
                                                                borderColor: 'black'
                                                            }} onClick={() => { setFast(false); }}>
                                                                Standard Delivery (Free)
                                                            </Button>
                                                            <Button variant='outlined' sx={{
                                                                color: 'black',
                                                                borderColor: 'black'
                                                            }} onClick={() => { setFast(true) }}>
                                                                Fast Delivery (Rs. 100)
                                                            </Button>
                                                        </div>
                                                    </small>
                                                </div>
                                                <button class="btn btn-dark w-100 mt-4 mb-0 hover-lift-sm hover-boxshadow">Add To Shopping Bag</button>
                                                {/* Product Features */}
                                                <div class="my-5">
                                                    <div class="row">
                                                        <div class="col-12 col-md-4">
                                                            <div class="text-center px-2">
                                                                <i class="ri-24-hours-line ri-2x"></i>
                                                                <small class="d-block mt-1">Fast Delivery</small>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <div class="text-center px-2">
                                                                <i class="ri-secure-payment-line ri-2x"></i>
                                                                <small class="d-block mt-1">Secure Checkout</small>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <div class="text-center px-2">
                                                                <i class="ri-service-line ri-2x"></i>
                                                                <small class="d-block mt-1">Free Returns</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Details of products */}
                                                {/* <div class="accordion" id="accordionProduct">
                                        <div class="accordion-item" style={{ textAlign: "left" }}>
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <b>Product Details</b>
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionProduct">
                                                <div class="accordion-body">
                                                    <p class="m-0">Made from 100% organic cotton, The Kiikii Osaka Japan T-Shirt was created with everyday use in mind. It features printed graphics and heavyweight fabric for maximum comfort and lifespan.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Details & Care
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionProduct">
                                                <div class="accordion-body">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item d-flex border-0 row g-0 px-0">
                                                            <span class="col-4 fw-bolder">Composition</span>
                                                            <span class="col-7 offset-1">98% Cotton, 2% elastane</span>
                                                        </li>
                                                        <li class="list-group-item d-flex border-0 row g-0 px-0">
                                                            <span class="col-4 fw-bolder">Care</span>
                                                            <span class="col-7 offset-1">Professional dry clean only. Do not bleach. Do not iron.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item" style={{ textAlign: "left" }}>
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Delivery & Returns
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionProduct">
                                                <div class="accordion-body">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item d-flex border-0 row g-0 px-0">
                                                            <span class="col-4 fw-bolder">Delivery</span>
                                                            <span class="col-7 offset-1">Standard delivery free for orders over $99. Next day delivery $9.99</span>
                                                        </li>
                                                        <li class="list-group-item d-flex border-0 row g-0 px-0">
                                                            <span class="col-4 fw-bolder">Returns</span>
                                                            <span class="col-7 offset-1">30 day return period. See our <Link class="text-link-border" to="/">terms & conditions.</Link></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Information */}
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="fs-4 fw-bolder mt-7 mb-4" style={{ textAlign: "left" }}>You May Also Like</h3>
                                        <div class="swiper-container" data-swiper data-options='{
                                "spaceBetween": 10,
                                "loop": true,
                                "autoplay": {
                                "delay": 5000,
                                "disableOnInteraction": false
                                },
                                "navigation": {
                                "nextEl": ".swiper-next",
                                "prevEl": ".swiper-prev"
                                },   
                                "breakpoints": {
                                "600": {
                                    "slidesPerView": 2
                                },
                                "1024": {
                                    "slidesPerView": 3
                                },       
                                "1400": {
                                    "slidesPerView": 4
                                }
                                }
                            }'>
                                            <div class="swiper-wrapper">
                                                {
                                                    products.map((book) => (
                                                        <div class="swiper-slide" style={{ width: "317.5px", marginRight: "10px" }}>
                                                            <div class="card border border-transparent position-relative overflow-hidden transparent">
                                                                <div class="card-img position-relative">
                                                                    <div class="card-badges">
                                                                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span> Sale</span>
                                                                    </div>
                                                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src={`data:image/png;base64,${book.frontcover}`} alt="" />
                                                                    </picture>
                                                                    <div class="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                                                        <button class="btn btn-quick-add"><i class="ri-add-line me-2"></i> Quick Add</button>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body px-0">
                                                                    <Link class="text-decoration-none link-cover" to="/product">Nike Air VaporMax 2021</Link>
                                                                    <small class="text-muted d-block">4 colours, 10 sizes</small>
                                                                    <p class="mt-2 mb-0 small"><s class="text-muted">$329.99</s> <span class="text-danger">$198.66</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div
                                                class="swiper-prev top-50  start-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 start-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
                                                <i class="ri-arrow-left-s-line ri-lg"></i>
                                            </div>
                                            <div
                                                class="swiper-next top-50 end-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 end-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
                                                <i class="ri-arrow-right-s-line ri-lg"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <h3 class="fs-4 fw-bolder mt-7 mb-4 reviews">Reviews</h3>
                                        <div class="bg-light p-5 justify-content-between d-flex flex-column flex-lg-row">
                                            <div class="d-flex flex-column align-items-center mb-4 mb-lg-0">
                                                <div class="bg-dark text-white f-w-24 f-h-24 d-flex rounded-circle align-items-center justify-content-center fs-2 fw-bold mb-3">4.3</div>
                                                <div class="rating position-relative d-table">
                                                    <div class="position-absolute stars" style={{ width: "88%" }}>
                                                        <i class="ri-star-fill text-dark ri-2x mr-1"></i>
                                                        <i class="ri-star-fill text-dark ri-2x mr-1"></i>
                                                        <i class="ri-star-fill text-dark ri-2x mr-1"></i>
                                                        <i class="ri-star-fill text-dark ri-2x mr-1"></i>
                                                        <i class="ri-star-fill text-dark ri-2x mr-1"></i>
                                                    </div>
                                                    <div class="stars">
                                                        <i class="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                                                        <i class="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                                                        <i class="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                                                        <i class="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                                                        <i class="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-grow-1 flex-column ms-lg-8">
                                                <div class="d-flex align-items-center justify-content-start mb-2">
                                                    <div class="f-w-20">
                                                        <div class="rating position-relative d-table">
                                                            <div class="position-absolute stars" style={{ width: "100%" }}>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                            </div>
                                                            <div class="stars">
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="progress d-flex flex-grow-1 mx-4 f-h-1">
                                                        <div class="progress-bar bg-dark" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span class="fw-bold small d-block f-w-4 text-end">55</span>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-start mb-2">
                                                    <div class="f-w-20">
                                                        <div class="rating position-relative d-table">
                                                            <div class="position-absolute stars" style={{ width: "80%" }}>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                            </div>
                                                            <div class="stars">
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="progress d-flex flex-grow-1 mx-4 f-h-1">
                                                        <div class="progress-bar bg-dark" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span class="fw-bold small d-block f-w-4 text-end">32</span>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-start mb-2">
                                                    <div class="f-w-20">
                                                        <div class="rating position-relative d-table">
                                                            <div class="position-absolute stars" style={{ width: "60%" }}>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                            </div>
                                                            <div class="stars">
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            </div>
                                                        </div>            </div>
                                                    <div class="progress d-flex flex-grow-1 mx-4 f-h-1">
                                                        <div class="progress-bar bg-dark" role="progressbar" style={{ width: "30%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span class="fw-bold small d-block f-w-4 text-end">15</span>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-start mb-2">
                                                    <div class="f-w-20">
                                                        <div class="rating position-relative d-table">
                                                            <div class="position-absolute stars" style={{ width: "40%" }}>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                            </div>
                                                            <div class="stars">
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="progress d-flex flex-grow-1 mx-4 f-h-1">
                                                        <div class="progress-bar bg-dark" role="progressbar" style={{ width: "8%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span class="fw-bold small d-block f-w-4 text-end">5</span>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-start mb-2">
                                                    <div class="f-w-20">
                                                        <div class="rating position-relative d-table">
                                                            <div class="position-absolute stars" style={{ width: "20%" }}>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                                <i class="ri-star-fill text-dark mr-1"></i>
                                                            </div>
                                                            <div class="stars">
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            </div>
                                                        </div>            </div>
                                                    <div class="progress d-flex flex-grow-1 mx-4 f-h-1">
                                                        <div class="progress-bar bg-dark" role="progressbar" style={{ width: "5%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span class="fw-bold small d-block f-w-4 text-end">1</span>
                                                </div>
                                                <p class="mt-3 mb-0 d-flex align-items-start"><i class="ri-chat-voice-line me-2"></i> 105 customers have reviewed this product</p>
                                            </div>
                                        </div>
                                        <div class="row g-6 g-md-8 g-lg-10 my-3">
                                            <div class="col-12 col-lg-6 col-xxl-4">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <div class="rating position-relative d-table">
                                                        <div class="position-absolute stars" style={{ width: "80%" }}>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                        </div>
                                                        <div class="stars">
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                        </div>
                                                    </div>
                                                    <div class="text-muted small">20th September 2020 by DaveD</div>
                                                </div>
                                                <p class="fw-bold mb-2">Great fit, great price</p>
                                                <p class="fs-7">Worth buying this for value for money. But be warned: get one size larger as the medium is closer to small medium!</p>
                                            </div>
                                            <div class="col-12 col-lg-6 col-xxl-4">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <div class="rating position-relative d-table">
                                                        <div class="position-absolute stars" style={{ width: "40%" }}>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                        </div>
                                                        <div class="stars">
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                        </div>
                                                    </div>
                                                    <div class="text-muted small">18th September 2020 by Sandra K</div>
                                                </div>
                                                <p class="fw-bold mb-2">Not worth the money</p>
                                                <p class="fs-7">Loose and poor stiching on the sides. Won&#x27;t buy this again.</p>
                                            </div>
                                            <div class="col-12 col-lg-6 col-xxl-4">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <div class="rating position-relative d-table">
                                                        <div class="position-absolute stars" style={{ width: "90%" }}>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                        </div>
                                                        <div class="stars">
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                        </div>
                                                    </div>
                                                    <div class="text-muted small">16th September 2020 by MikeS</div>
                                                </div>
                                                <p class="fw-bold mb-2">Decent for the price</p>
                                                <p class="fs-7">I buy these often as they are good quality and value for money.</p>
                                            </div>
                                            <div class="col-12 col-lg-6 col-xxl-4">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <div class="rating position-relative d-table">
                                                        <div class="position-absolute stars" style={{ width: "85%" }}>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                        </div>
                                                        <div class="stars">
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                        </div>
                                                    </div>
                                                    <div class="text-muted small">14th September 2020 by Frankie</div>
                                                </div>
                                                <p class="fw-bold mb-2">Great little T</p>
                                                <p class="fs-7">Wore this to my local music festival - went down well.</p>
                                            </div>
                                            <div class="col-12 col-lg-6 col-xxl-4">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <div class="rating position-relative d-table">
                                                        <div class="position-absolute stars" style={{ width: "70%" }}>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                        </div>
                                                        <div class="stars">
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                        </div>
                                                    </div>
                                                    <div class="text-muted small">20th September 2020 by Kevin</div>
                                                </div>
                                                <p class="fw-bold mb-2">Great for the BBQ</p>
                                                <p class="fs-7">Bought this on the off chance it would work well with my skinny jeans, was a great decision. Would recommend.</p>
                                            </div>
                                            <div class="col-12 col-lg-6 col-xxl-4">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <div class="rating position-relative d-table">
                                                        <div class="position-absolute stars" style={{ width: "20%" }}>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                            <i class="ri-star-fill text-dark mr-1"></i>
                                                        </div>
                                                        <div class="stars">
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                            <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                                        </div>
                                                    </div>
                                                    <div class="text-muted small">20th September 2020 by Holly</div>
                                                </div>
                                                <p class="fw-bold mb-2">Nothing special but it&#x27;s okay</p>
                                                <p class="fs-7">It&#x27;s a t-shirt. What can I say, it does the job.</p>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column f-w-44 mx-auto my-5 text-center">
                                            <small class="text-muted">Showing 6 of 105 reviews</small>
                                            <div class="progress f-h-1 mt-3">
                                                <div class="progress-bar bg-dark" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <Link to="/" class="btn btn-outline-dark btn-sm mt-5 align-self-center py-3 px-4 border-2">Load More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </section >
            <Footer />
        </div>
    )
}
