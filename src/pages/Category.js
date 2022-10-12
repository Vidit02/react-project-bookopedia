import { Box, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader, PuffLoader, ScaleLoader } from 'react-spinners'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import { NavigationBar } from '../components/NavigationBar'

export const Category = (props) => {
    const [products, setproducts] = useState()
    const [isloading, setisloading] = useState(true)
    const [numOfPro, setNumOfPro] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            axios.get("http://localhost:9999/products").then((res => {
                setproducts(res.data)
                setisloading(false)
                setNumOfPro(res.data.length)
            }))
        }
        fetchData()
    }, [])
    console.log("Res data", products);

    // props.seedata()
    return (
        <div>
            <AllCss />
            <NavigationBar />
            {
                isloading ? <Box>
                    <ClipLoader
                        height={40}
                        loading
                        width={5}
                    />
                    <Typography component="h1" variant='h6' sx={{ marginTop: "1rem" }}>Loading...</Typography>
                    <Typography component="h1" variant='h6'>Please Wait</Typography>
                </Box> : <section className="mt-0 " style={{ textAlign: "left" }}>
                    {/* Page Content Goes Here */}
                    {/* Category Top Banner */}
                    {/* <div
                        className="py-10 bg-img-cover bg-overlay-dark position-relative overflow-hidden bg-pos-center-center rounded-0"
                        style={{
                            backgroundImage: "url(./assets/images/banners/banner-category-top.jpg)"
                        }}
                    >
                        <div
                            className="container-fluid position-relative z-index-20"
                        // data-aos="fade-right"
                        // data-aos-delay={300}
                        >
                            <h1 className="fw-bold display-6 mb-4 text-white">Latest Arrivals</h1>
                            <div className="col-12 col-md-6">
                                <p className="text-white mb-0 fs-5">
                                    When it's time to head out and get your Kicks on, have a look at our
                                    latest arrivals. Whether you're into Nike, Adidas, Dunks or New
                                    Balance, we really have something for everyone!
                                </p>
                            </div>
                        </div>
                    </div> */}
                    {/* Category Top Banner */}
                    <div className="container-fluid"
                    //  data-aos="fade-in"
                    >
                        {/* Category Toolbar*/}
                        <div className="d-flex justify-content-between items-center pt-5 pb-4 flex-column flex-lg-row">
                            <div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/index">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/index">Sneakers</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            New Releases
                                        </li>
                                    </ol>
                                </nav>{" "}
                                <h1 className="fw-bold fs-3 mb-2">New Releases</h1>
                                <p className="m-0 text-muted small">Showing {numOfPro} products</p>
                            </div>
                            <div className="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">
                                {/* Filter Trigger*/}
                                <button
                                    className="btn bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto "
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasFilters"
                                    aria-controls="offcanvasFilters"
                                >
                                    <i className="ri-equalizer-line me-2" /> Filters
                                </button>
                                {/* / Filter Trigger*/}
                                {/* Sort Options*/}
                                <select className="form-select form-select-sm border-0 bg-light p-3 pe-5 lh-1 fs-7">
                                    <option selected="">Sort By</option>
                                    <option value={1}>Hi Low</option>
                                    <option value={2}>Low Hi</option>
                                    <option value={3}>Name</option>
                                </select>
                                {/* / Sort Options*/}
                            </div>
                        </div>{" "}
                        {/* /Category Toolbar*/}
                        {/* Products*/}
                        <div className="row g-4">
                            {
                                products.map((book) => (
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        {/* Card Product*/}
                                        <div className="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                            <div className="card-img position-relative">
                                                <div className="card-badges">
                                                    <span className="badge badge-card">
                                                        <span className="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1" />{" "}
                                                        Sale
                                                    </span>
                                                </div>
                                                <span className="position-absolute top-0 end-0 p-2 z-index-20 text-muted">
                                                    <i className="ri-heart-line" />
                                                </span>
                                                <picture className="position-relative overflow-hidden d-block bg-light">
                                                    <img
                                                        className="w-100 img-fluid position-relative z-index-10"
                                                        title=""
                                                        src={`data:image/png;base64,${book.frontcover}`}
                                                        alt=""
                                                    />
                                                </picture>
                                                {/* <div className="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                                    <button className="btn btn-quick-add">
                                                        <i className="ri-add-line me-2" /> Quick Add
                                                    </button>
                                                </div> */}
                                            </div>
                                            <div className="card-body px-0">
                                                <Link
                                                    className="text-decoration-none link-cover"
                                                    to="/category/12"
                                                    style={{ fontSize: "20px" }}
                                                >
                                                    {book.bookname}
                                                </Link>
                                                <small className="text-muted d-block" style={{ fontSize: "15px" }}>Author : {book.author}</small>
                                                <p className="mt-2 mb-0 small">
                                                    <span className="text-danger" style={{ fontSize: "18px" }}>Rs.{book.price}</span>
                                                </p>
                                            </div>
                                        </div>
                                        {/*/ Card Product*/}

                                    </div>
                                ))
                            }
                        </div>
                        {/* / Products*/}
                        {/* Pagination*/}
                        <div className="d-flex flex-column f-w-44 mx-auto my-5 text-center">
                            <small className="text-muted">Showing {numOfPro} products</small>
                            <div className="progress f-h-1 mt-3">
                                <div
                                    className="progress-bar bg-dark"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            <Link
                                to="/category"
                                className="btn btn-outline-dark btn-sm mt-5 align-self-center py-3 px-4 border-2"
                            >
                                Load More
                            </Link>
                        </div>{" "}
                        {/* / Pagination*/}
                    </div>
                    {/* /Page Content */}
                </section>
            }



            {/* <section class="mt-0">
                <div class="py-10 bg-img-cover bg-overlay-dark position-relative overflow-hidden bg-pos-center-center rounded-0"
                    style={{ backgroundImage: "url(./assets/images/banners/banner-category-top.jpg)" }} >
                    <div class="container-fluid position-relative z-index-20" style={{ textAlign: "left" }}>
                        <h1 class="fw-bold display-6 mb-4 text-white">Latest Arrivals</h1>
                        <div class="col-12 col-md-6">
                            <p class="text-white mb-0 fs-5">
                                When it's time to head out and get your Kicks on, have a look at our latest arrivals. Whether you're into Nike, Adidas, Dunks or New Balance, we really have something for everyone!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="d-flex justify-content-between items-center pt-5 pb-4 flex-column flex-lg-row">
                        <div>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item"><Link to="/">Sneakers</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">New Releases</li>
                                </ol>
                            </nav>        <h1 class="fw-bold fs-3 mb-2" style={{ textAlign: "left" }}>New Releases (121)</h1>
                            <p class="m-0 text-muted small" style={{ textAlign: "left" }}>Showing 1 - 9 of 121</p>
                        </div>
                        <div class="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">

                            <button class="btn bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilters" aria-controls="offcanvasFilters">
                                <i class="ri-equalizer-line me-2"></i> Filters
                            </button>

                            <select class="form-select form-select-sm border-0 bg-light p-3 pe-5 lh-1 fs-7">
                                <option selected>Sort By</option>
                                <option value="1">Hi Low</option>
                                <option value="2">Low Hi</option>
                                <option value="3">Name</option>
                            </select>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                <div class="card-img position-relative">
                                    <div class="card-badges">
                                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span> Sale</span>
                                    </div>
                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="./assets/images/products/product-1.jpg" alt="" />
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
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                <div class="card-img position-relative">
                                    <div class="card-badges">
                                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-success rounded-circle d-block me-1"></span> New In</span>
                                    </div>
                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="./assets/images/products/product-2.jpg" alt="" />
                                    </picture>
                                    <div class="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                        <button class="btn btn-quick-add"><i class="ri-add-line me-2"></i> Quick Add</button>
                                    </div>
                                </div>
                                <div class="card-body px-0">
                                    <Link class="text-decoration-none link-cover" to="/product">Nike ZoomX Vaporfly</Link>
                                    <small class="text-muted d-block">2 colours, 4 sizes</small>
                                    <p class="mt-2 mb-0 small">$275.45</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                <div class="card-img position-relative">
                                    <div class="card-badges">
                                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-secondary rounded-circle d-block me-1"></span> Sold Out</span>
                                    </div>
                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="./assets/images/products/product-3.jpg" alt="" />
                                    </picture>
                                </div>
                                <div class="card-body px-0">
                                    <Link class="text-decoration-none link-cover" to="/product">Nike Blazer Mid &#x27;77</Link>
                                    <small class="text-muted d-block">5 colours, 6 sizes</small>
                                    <p class="mt-2 mb-0 small text-muted">Sold Out</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                <div class="card-img position-relative">
                                    <div class="card-badges">
                                    </div>
                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="./assets/images/products/product-4.jpg" alt="" />
                                    </picture>
                                    <div class="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                        <button class="btn btn-quick-add"><i class="ri-add-line me-2"></i> Quick Add</button>
                                    </div>
                                </div>
                                <div class="card-body px-0">
                                    <Link class="text-decoration-none link-cover" to="/product">Nike Air Force 1</Link>
                                    <small class="text-muted d-block">6 colours, 9 sizes</small>
                                    <p class="mt-2 mb-0 small">$425.85</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                <div class="card-img position-relative">
                                    <div class="card-badges">
                                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span> Sale</span>
                                    </div>
                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="./assets/images/products/product-5.jpg" alt="" />
                                    </picture>
                                    <div class="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                        <button class="btn btn-quick-add"><i class="ri-add-line me-2"></i> Quick Add</button>
                                    </div>
                                </div>
                                <div class="card-body px-0">
                                    <Link class="text-decoration-none link-cover" to="/product">Nike Air Max 90</Link>
                                    <small class="text-muted d-block">4 colours, 10 sizes</small>
                                    <p class="mt-2 mb-0 small"><s class="text-muted">$196.99</s> <span class="text-danger">$98.66</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                <div class="card-img position-relative">
                                    <div class="card-badges">
                                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span> Sale</span>
                                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-success rounded-circle d-block me-1"></span> New In</span>
                                    </div>
                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="./assets/images/products/product-6.jpg" alt="" />
                                    </picture>
                                    <div class="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                        <button class="btn btn-quick-add"><i class="ri-add-line me-2"></i> Quick Add</button>
                                    </div>
                                </div>
                                <div class="card-body px-0">
                                    <Link class="text-decoration-none link-cover" to="/product">Nike Glide FlyEase</Link>
                                    <small class="text-muted d-block">1 colour</small>
                                    <p class="mt-2 mb-0 small"><s class="text-muted">$329.99</s> <span class="text-danger">$198.66</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                <div class="card-img position-relative">
                                    <div class="card-badges">
                                    </div>
                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="./assets/images/products/product-7.jpg" alt="" />
                                    </picture>
                                    <div class="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                        <button class="btn btn-quick-add"><i class="ri-add-line me-2"></i> Quick Add</button>
                                    </div>
                                </div>
                                <div class="card-body px-0">
                                    <Link class="text-decoration-none link-cover" to="/product">Nike Zoom Freak</Link>
                                    <small class="text-muted d-block">2 colours, 2 sizes</small>
                                    <p class="mt-2 mb-0 small">$444.99</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                <div class="card-img position-relative">
                                    <div class="card-badges">
                                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-success rounded-circle d-block me-1"></span> New In</span>
                                    </div>
                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="./assets/images/products/product-8.jpg" alt="" />
                                    </picture>
                                    <div class="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                        <button class="btn btn-quick-add"><i class="ri-add-line me-2"></i> Quick Add</button>
                                    </div>
                                </div>
                                <div class="card-body px-0">
                                    <Link class="text-decoration-none link-cover" to="/product">Nike Air Pegasus</Link>
                                    <small class="text-muted d-block">3 colours, 10 sizes</small>
                                    <p class="mt-2 mb-0 small">$178.99</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                <div class="card-img position-relative">
                                    <div class="card-badges">
                                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-success rounded-circle d-block me-1"></span> New In</span>
                                    </div>
                                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                                    <picture class="position-relative overflow-hidden d-block bg-light">
                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="./assets/images/products/product-1.jpg" alt="" />
                                    </picture>
                                    <div class="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                        <button class="btn btn-quick-add"><i class="ri-add-line me-2"></i> Quick Add</button>
                                    </div>
                                </div>
                                <div class="card-body px-0">
                                    <Link class="text-decoration-none link-cover" to="/product">Nike Air Jordans</Link>
                                    <small class="text-muted d-block">3 colours, 10 sizes</small>
                                    <p class="mt-2 mb-0 small">$154.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column f-w-44 mx-auto my-5 text-center">
                        <small class="text-muted">Showing 9 of 121 products</small>
                        <div class="progress f-h-1 mt-3">
                            <div class="progress-bar bg-dark" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <Link to="/" class="btn btn-outline-dark btn-sm mt-5 align-self-center py-3 px-4 border-2">Load More</Link>
                    </div>
                </div>
            </section> */}
            <Footer />
        </div>
    )
}
