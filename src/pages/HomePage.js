import React from 'react'
import Transform3d from 'react-css-transform/dist/cjs/Transform3d'
import { Link } from 'react-router-dom';
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer';
import { NavigationBar } from '../components/NavigationBar';

export const HomePage = (props) => {
    const translateSlider = {
        x: 0,
        y: 0,
        z: 0
    };
    const paginationPhoto = {
        bottom: "10px",
        left: 0,
        width: "100%"
    }
    // props.seedata()
    // props.viewToast("success","this")
    // props.seedata()
    return (
        <div>
            <AllCss />
            <NavigationBar />
            <section class="mt-0 overflow-hidden ">
                <section class="vh-75 vh-lg-60 container-fluid rounded overflow-hidden">
                    <div class="swiper-container overflow-hidden rounded h-100 bg-light" data-swiper data-options='{
              "spaceBetween": 0,
              "slidesPerView": 1,
              "effect": "fade",
              "speed": 1000,
              "loop": true,
              "parallax": true,
              "observer": true,
              "observeParents": true,
              "lazy": {
                "loadPrevNext": true
                },
                "autoplay": {
                  "delay": 5000,
                  "disableOnInteraction": false
              },
              "pagination": {
                "el": ".swiper-pagination",
                "clickable": true
                }
              }'>
                        <div class="swiper-wrapper" style={{ transitionDuration: "1000ms" }}>
                            {/* Slider */}
                            <div class="swiper-slide position-relative h-100 w-100">
                                <div class="w-100 h-100 overflow-hidden position-absolute z-index-1 top-0 start-0 end-0 bottom-0" style={{ transitionDuration: "1000ms" }}>
                                    <Transform3d translate={translateSlider}>
                                        <div class="w-100 h-100 bg-img-cover bg-pos-center-center overflow-hidden" data-swiper-parallax="-100"
                                            style={{ backgroundImage: "url(./assets/images/banners/booksbanner.jpeg)", transitionDuration: "1000ms" }}>
                                        </div>
                                    </Transform3d>
                                </div>
                                <div
                                    class="container position-relative z-index-10 d-flex h-100 align-items-start flex-column justify-content-center" style={{ transitionDuration: "1000ms" }}>
                                    <p class="title-small text-white opacity-75 mb-0" data-swiper-parallax="-100">Everything You Need</p>
                                    <h2 class="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white" data-swiper-parallax="100">
                                        <span class="text-light">Summer</span> Essentials</h2>
                                    <div data-swiper-parallax-y="-25">
                                        <Link to="/category" class="btn btn-psuedo text-white" role="button">Shop New Arrivals</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Slider  */}
                            <div class="swiper-slide position-relative h-100 w-100" style={{ transitionDuration: "1000ms" }}>
                                <div class="w-100 h-100 overflow-hidden position-absolute z-index-1 top-0 start-0 end-0 bottom-0" style={{ transitionDuration: "1000ms" }}>
                                    <Transform3d translate={translateSlider}>
                                        <div class="w-100 h-100 bg-img-cover bg-pos-center-center overflow-hidden" data-swiper-parallax="-100"
                                            style={{ backgroundImage: "url(./assets/images/banners/banner-2.jpg)", transitionDuration: "1000ms" }}>
                                        </div>
                                    </Transform3d>
                                </div>
                                <div
                                    class="container position-relative z-index-10 d-flex h-100 align-items-start flex-column justify-content-center" style={{ transitionDuration: "1000ms" }}>
                                    <p class="title-small text-white opacity-75 mb-0" data-swiper-parallax="-100">Spring Collection</p>
                                    <h2 class="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white" data-swiper-parallax="100">
                                        Adidas <span class="text-outline-light">SS21</span></h2>
                                    <div data-swiper-parallax-y="-25">
                                        <Link to="/category" class="btn btn-psuedo text-white" role="button">Shop Latest Adidas</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Slider */}
                            <div class="swiper-slide position-relative h-100 w-100">
                                <div class="w-100 h-100 overflow-hidden position-absolute z-index-1 top-0 start-0 end-0 bottom-0">
                                    <Transform3d translate={translateSlider}>
                                        <div class="w-100 h-100 bg-img-cover bg-pos-center-center overflow-hidden" data-swiper-parallax="-100"
                                            style={{ backgroundImage: "url(./assets/images/banners/banner-4.jpg)" }}>
                                        </div>
                                    </Transform3d>
                                </div>
                                <div
                                    class="container position-relative z-index-10 d-flex h-100 align-items-start flex-column justify-content-center">
                                    <p class="title-small text-white opacity-75 mb-0" data-swiper-parallax="-100">Just Do it</p>
                                    <h2 class="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white" data-swiper-parallax="100">
                                        Nike <span class="text-outline-light">SS21</span></h2>
                                    <div data-swiper-parallax-y="-25">
                                        <Link to="/category" class="btn btn-psuedo text-white" role="button">Shop Latest Nike</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Slider */}
                            <div class="swiper-slide position-relative h-100 w-100">
                                <div class="w-100 h-100 overflow-hidden position-absolute z-index-1 top-0 start-0 end-0 bottom-0">
                                    <Transform3d translate={translateSlider}>
                                        <div class="w-100 h-100 bg-img-cover bg-pos-center-center overflow-hidden" data-swiper-parallax="-100"
                                            style={{ backgroundImage: "url(./assets/images/banners/banner-3.jpg)" }}>
                                        </div>
                                    </Transform3d>
                                </div>
                                <div
                                    class="container position-relative z-index-10 d-flex h-100 align-items-start flex-column justify-content-center">
                                    <p class="title-small text-white opacity-75 mb-0" data-swiper-parallax="-100">Look Good Feel Good</p>
                                    <h2 class="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white" data-swiper-parallax="100">
                                        <span class="text-outline-light">Sustainable</span> Fashion</h2>
                                    <div data-swiper-parallax-y="-25">
                                        <Link to="/category" class="btn btn-psuedo text-white" role="button">Why We Are Different</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-bullet-light" style={{ bottom: "10px", left: "0", width: "100%" }}>
                            <span class="swiper-pagination-bullet"></span>
                            <span class="swiper-pagination-bullet"></span>
                            <span class="swiper-pagination-bullet"></span>
                            <span class="swiper-pagination-bullet"></span>
                        </div>
                    </div>
                </section>
                <div class="brand-section container-fluid">
                    <div class="bg-overlay-sides-white-to-transparent bg-white py-5 py-md-7">
                        <section class="marquee marquee-hover-pause">
                            <div class="marquee-body">
                                <div class="marquee-section animation-marquee-50">
                                    <div class="mx-3 mx-lg-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/Berkley.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-3 mx-lg-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/Jaico.jpeg" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-3 mx-lg-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/Harpercol.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-3 mx-lg-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/Hyperion.jpeg" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-3 mx-lg-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/WalkerBook.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-3 mx-lg-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/PenguinPubl.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/TorBook.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                </div>
                                <div class="marquee-section animation-marquee-50">
                                    <div class="mx-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/Berkley.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/Jaico.jpeg" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/Harpercol.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/Hyperion.jpeg" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/WalkerBook.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/PenguinPubl.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div class="mx-5 f-w-24">
                                        <Link class="d-block" to="/category">
                                            <picture>
                                                <img class="img-fluid d-table mx-auto" src="./assets/images/logos/TorBook.png" alt="" />
                                            </picture>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="position-relative row my-lg-7 pt-5 pt-lg-0 g-8">
                        <div class="bg-text bottom-0 start-0 end-0">
                            <h2 class="bg-text-title opacity-10"><span class="text-outline-dark">Old</span>Skool</h2>
                        </div>
                        <div class="col-12 col-md-6 position-relative z-index-20 mb-7 mb-lg-0">
                            <p class="text-muted title-small">Welcome</p>
                            <h3 class="display-3 fw-bold mb-5"><span class="text-outline-dark">OldSkool</span> - streetwear & footwear specialists</h3>
                            <p class="lead">We are OldSkool, a leading supplier of global streetwear brands, including names such as <Link to="/category">Stussy</Link>, <Link to="/category">Carhartt</Link>, <Link to="/category">Gramicci</Link>, <Link to="/category">Afends</Link> and many more.</p>
                            <p class="lead">With worldwide shipping and unbeatable prices - now's a great time to pick out something from our range.</p>
                            <Link to="/category" class="btn btn-psuedo" role="button">Shop New Arrivals</Link>
                        </div>
                        <div class="col-12 col-md-6 position-relative z-index-20 pe-0" >
                            <picture class="w-50 d-block position-relative z-index-10 border border-white border-4 shadow-lg">
                                <img class="img-fluid" src="./assets/images/banners/banner-5.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                            <picture class="w-60 d-block me-8 mt-n10 shadow-lg border border-white border-4 position-relative z-index-20 ms-auto">
                                <img class="img-fluid" src="./assets/images/banners/banner-6.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                            <picture class="w-50 d-block me-8 mt-n7 shadow-lg border border-white border-4 position-absolute top-0 end-0 z-index-0 ">
                                <img class="img-fluid" src="./assets/images/banners/banner-7.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                        </div>
                    </div>
                    <div class="m-0">
                        <div class="swiper-container overflow-hidden overflow-lg-visible"
                            data-swiper
                        >
                            <div class="swiper-wrapper">
                                <div class="swiper-slide align-self-stretch bg-transparent h-auto" style={{ width: "260.25px", marginRight: "65px" }}>
                                    <div class="me-xl-n4 me-xxl-n5">
                                        <picture class="d-block mb-4 img-clip-shape-one" style={{ transform: "skewX(10deg)" }}>
                                            <img class="w-100" title="" src="./assets/images/categories/ThrillerCover.jpeg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                        </picture>
                                        <p class="title-small mb-2 text-muted">Must Haves</p>
                                        <h4 class="lead fw-bold">Thriller Novels</h4>
                                        <Link to="/category" class="btn btn-psuedo align-self-start">Shop Now</Link>
                                    </div>
                                </div>
                                <div class="swiper-slide align-self-stretch bg-transparent h-auto" style={{ width: "260.25px", marginRight: "65px" }}>
                                    <div class="me-xl-n4 me-xxl-n5">
                                        <picture class="d-block mb-4 img-clip-shape-one" style={{ transform: "skewX(10deg)" }}>
                                            <img class="w-100" title="" src="./assets/images/categories/Comedy.png" alt="HTML Bootstrap Template by Pixel Rocket" />
                                        </picture>
                                        <p class="title-small mb-2 text-muted">Curated Selection</p>
                                        <h4 class="lead fw-bold">Comedy Books</h4>
                                        <Link to="/category" class="btn btn-psuedo align-self-start">Shop Now</Link>
                                    </div>
                                </div>
                                <div class="swiper-slide align-self-stretch bg-transparent h-auto" style={{ width: "260.25px", marginRight: "65px" }}>
                                    <div class="me-xl-n4 me-xxl-n5">
                                        <picture class="d-block mb-4 img-clip-shape-one" style={{ transform: "skewX(10deg)" }}>
                                            <img class="w-100" title="" src="./assets/images/categories/StudyBooks.jpeg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                        </picture>
                                        <p class="title-small mb-2 text-muted">Streetwear Basics</p>
                                        <h4 class="lead fw-bold">Study Related Books</h4>
                                        <Link to="/category" class="btn btn-psuedo align-self-start">Shop Now</Link>
                                    </div>
                                </div>
                                <div class="swiper-slide align-self-stretch bg-transparent h-auto" style={{ width: "260.25px", marginRight: "65px" }}>
                                    <div class="me-xl-n4 me-xxl-n5">
                                        <picture class="d-block mb-4 img-clip-shape-one" style={{ transform: "skewX(10deg)" }}>
                                            <img class="w-100" title="" src="./assets/images/categories/BookGeneral.jpeg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                        </picture>
                                        <p class="title-small mb-2 text-muted">Waterproof &amp; Lightweight</p>
                                        <h4 class="lead fw-bold">Romantic Novels</h4>
                                        <Link to="/category" class="btn btn-psuedo align-self-start">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="position-relative row my-lg-7 pt-5 pt-lg-0 g-8">
                        <div class="bg-text bottom-0 start-0 end-0">
                            <h2 class="bg-text-title opacity-10"><span class="text-outline-dark">Old</span>Skool</h2>
                        </div>
                        <div class="col-12 col-md-6 position-relative z-index-20 mb-7 mb-lg-0">
                            <p class="text-muted title-small">Welcome</p>
                            <h3 class="display-3 fw-bold mb-5"><span class="text-outline-dark">OldSkool</span> - streetwear & footwear specialists</h3>
                            <p class="lead">We are OldSkool, a leading supplier of global streetwear brands, including names such as <Link to="/category">Stussy</Link>, <Link to="/category">Carhartt</Link>, <Link to="/category">Gramicci</Link>, <Link to="/category">Afends</Link> and many more.</p>
                            <p class="lead">With worldwide shipping and unbeatable prices - now's a great time to pick out something from our range.</p>
                            <Link to="/category" class="btn btn-psuedo" role="button">Shop New Arrivals</Link>
                        </div>
                        <div class="col-12 col-md-6 position-relative z-index-20 pe-0" >
                            <picture class="w-50 d-block position-relative z-index-10 border border-white border-4 shadow-lg">
                                <img class="img-fluid" src="./assets/images/banners/banner-5.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                            <picture class="w-60 d-block me-8 mt-n10 shadow-lg border border-white border-4 position-relative z-index-20 ms-auto">
                                <img class="img-fluid" src="./assets/images/banners/banner-6.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                            <picture class="w-50 d-block me-8 mt-n7 shadow-lg border border-white border-4 position-absolute top-0 end-0 z-index-0 ">
                                <img class="img-fluid" src="./assets/images/banners/banner-7.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                        </div>
                    </div>
                    <div class="pt-7 mb-5 mb-lg-10">
                        <div class="row g-4">
                            <div class="col-12 col-xl-6 position-relative">
                                <picture class="position-relative z-index-10">
                                    <img class="w-100 rounded" src="./assets/images/banners/banner-sale.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                </picture>
                                <div class="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center z-index-20">
                                    <div class="py-6 px-5 px-lg-10 text-center w-100">
                                        <h2 class="display-1 mb-3 fw-bold text-white"><span class="text-outline-light">Flash</span> Sale</h2>
                                        <p class="fs-5 fw-light text-white d-none d-md-block">Our yearly flash sale is now on! Grab yourself a bargain from the world's leading streetwear brands.</p>
                                        <Link to="/category" class="btn btn-psuedo text-white" role="button">Shop All Sale Items</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-6">
                                <div class="row g-4 justify-content-end">
                                    <div class="col-12 col-md-6 d-flex">
                                        <div class="card position-relative overflow-hidden">
                                            <picture class="position-relative z-index-10 d-block bg-light">
                                                <img class="w-100 rounded" src="./assets/images/banners/banner-8.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                            </picture>
                                            <div class="card-overlay">
                                                <p class="lead fw-bolder mb-2">The Jordan Delta 2</p>
                                                <Link to="/category" class="btn btn-psuedo text-white py-2" role="button">Shop Kicks</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 d-flex">
                                        <div class="card position-relative overflow-hidden">
                                            <picture class="position-relative z-index-10 d-block bg-light">
                                                <img class="w-100 rounded" src="./assets/images/banners/banner-9.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                            </picture>
                                            <div class="card-overlay">
                                                <p class="lead fw-bolder mb-2">Latest Mens Shirts</p>
                                                <Link to="/category" class="btn btn-psuedo text-white py-2" role="button">Shop New</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 d-flex">
                                        <div class="card position-relative overflow-hidden">
                                            <picture class="position-relative z-index-10 d-block bg-light">
                                                <img class="w-100 rounded" src="./assets/images/banners/banner-10.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                            </picture>
                                            <div class="card-overlay">
                                                <p class="lead fw-bolder mb-2">KiiKii Osake Tees</p>
                                                <Link to="/category" class="btn btn-psuedo text-white py-2" role="button">Shop T-Shirts</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 d-flex">
                                        <div class="card position-relative overflow-hidden">
                                            <picture class="position-relative z-index-10 d-block bg-light">
                                                <img class="w-100 rounded" src="./assets/images/banners/banner-11.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                            </picture>
                                            <div class="card-overlay">
                                                <p class="lead fw-bolder mb-2">Multibuy Womens Shirts</p>
                                                <Link to="/category" class="btn btn-psuedo text-white py-2" role="button">Shop Sale Items</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="title-small text-muted text-center mb-3 mt-5"><i class="ri-instagram-line align-bottom"></i>
                            #OLDSKOOL
                        </h3>
                        <div class="overflow-hidden">
                            <div class="swiper-container swiper-overflow-visible"
                                data-swiper
                                data-options='{
                    "spaceBetween": 20,
                    "loop": true,
                    "autoplay": {
                      "delay": 5000,
                      "disableOnInteraction": false
                    },
                    "breakpoints": {
                      "400": {
                        "slidesPerView": 2
                      },
                      "600": {
                        "slidesPerView": 3
                      },       
                      "999": {
                        "slidesPerView": 5
                      },
                      "1024": {
                        "slidesPerView": 6
                      }
                    }
                  }'>
                                <div class="swiper-wrapper mb-5">
                                    <div class="swiper-slide flex-column" style={{ width: "200px", marginRight: "20px" }}>
                                        <picture>
                                            <img
                                                class="rounded shadow-sm img-fluid"
                                                data-zoomable
                                                src="https://images.unsplash.com/photo-1586396874197-b8fc676a5187?ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib&#x3D;rb-1.2.1&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                                                title=""
                                                alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide flex-column" style={{ width: "200px", marginRight: "20px" }}>
                                        <picture>
                                            <img
                                                class="rounded shadow-sm img-fluid"
                                                data-zoomable
                                                src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib&#x3D;rb-1.2.1&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                                                title=""
                                                alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide flex-column" style={{ width: "200px", marginRight: "20px" }}>
                                        <picture>
                                            <img
                                                class="rounded shadow-sm img-fluid"
                                                data-zoomable
                                                src="https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib&#x3D;rb-1.2.1&amp;ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                                                title=""
                                                alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide flex-column" style={{ width: "200px", marginRight: "20px" }}>
                                        <picture>
                                            <img
                                                class="rounded shadow-sm img-fluid"
                                                data-zoomable
                                                src="https://images.unsplash.com/photo-1566677914817-56426959ae9c?ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib&#x3D;rb-1.2.1&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                                                title=""
                                                alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide flex-column" style={{ width: "200px", marginRight: "20px" }}>
                                        <picture>
                                            <img
                                                class="rounded shadow-sm img-fluid"
                                                data-zoomable
                                                src="https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?ixlib&#x3D;rb-1.2.1&amp;ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                                                title=""
                                                alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide flex-column" style={{ width: "200px", marginRight: "20px" }}>
                                        <picture>
                                            <img
                                                class="rounded shadow-sm img-fluid"
                                                data-zoomable
                                                src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib&#x3D;rb-1.2.1&amp;ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                                                title=""
                                                alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide flex-column" style={{ width: "200px", marginRight: "20px" }}>
                                        <picture>
                                            <img
                                                class="rounded shadow-sm img-fluid"
                                                data-zoomable
                                                src="https://images.unsplash.com/photo-1520048480367-7a6a4b6efb2a?ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib&#x3D;rb-1.2.1&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                                                title=""
                                                alt="" />
                                        </picture>
                                    </div>
                                    <div class="swiper-slide flex-column" style={{ width: "200px", marginRight: "20px" }}>
                                        <picture>
                                            <img
                                                class="rounded shadow-sm img-fluid"
                                                data-zoomable
                                                src="https://images.unsplash.com/photo-1550246140-29f40b909e5a?ixlib&#x3D;rb-1.2.1&amp;ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                                                title=""
                                                alt="" />
                                        </picture>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
