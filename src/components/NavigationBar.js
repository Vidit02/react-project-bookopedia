import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { AllCss } from './AllCss'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { fontSize } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { ModelDialog } from './ModelDialog';

export const NavigationBar = () => {
    const [open, setopen] = useState(false)

    const handleOpen = () =>{
        setopen(true)
    }

    const handleClose = () =>{
        setopen(false)
    }
    return (
        <div>
            <AllCss />
            <nav class="navbar navbar-expand-lg navbar-light bg-white flex-column border-0  ">
                <div class="container-fluid">
                    <div class="w-100">
                        <div class="d-flex justify-content-between align-items-center flex-wrap">
                            <Link class="navbar-brand fw-bold fs-3 m-0 p-0 flex-shrink-0 order-0" to="/">
                                <div class="d-flex align-items-center">
                                    <svg class="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fill-rule="evenodd" /></svg>
                                </div>
                            </Link>

                            <ul class="list-unstyled mb-0 d-flex align-items-center order-1 order-lg-2 nav-sidelinks">

                                <li class="d-lg-none">
                                    <span class="nav-link text-body d-flex align-items-center cursor-pointer" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                        aria-label="Toggle navigation"><i class="ri-menu-line ri-lg me-1"></i> Menu</span>
                                </li>

                                <li class="d-none d-sm-block">
                                    <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: "25rem", border: "none" }} />
                                </li>

                                {/* <li class="ms-1 d-none d-lg-inline-block">
                                    <Link class="nav-link text-body" to='/checkout'>
                                        Account
                                    </Link>
                                </li> */}
                                {/* <li class="ms-4 d-inline-block position-relative dropdown-cart">
                                    <Badge badgeContent={4} color="primary">
                                        <ShoppingCart color="action" />
                                    </Badge>
                                </li>
                                <li class="nav-item dropdown" style={{ marginLeft: "1rem" }}>
                                    <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <PersonOutlinedIcon fontSize='large' />
                                        Chandrash
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li><Link class="dropdown-item" to="/myaccount">Your Account</Link></li>
                                        <li><Link class="dropdown-item" to="/yourorder">Your Orders</Link></li>
                                        <li><Link class="dropdown-item" to="/category">Sign Out</Link></li>
                                    </ul>
                                </li> */}
                                <li class="ms-4 d-inline-block position-relative">
                                    <Button variant='outlined' href='/signup'  sx={{height:"2.8rem"}} >
                                        Create Account
                                    </Button>
                                </li>
                                <li class="ms-4 d-inline-block position-relative">
                                    <Button variant='outlined' color='success' onClick={handleOpen} sx={{height:"2.8rem"}}>
                                        Log in
                                    </Button>
                                    <ModelDialog open={open} handleClose={handleClose}/>
                                </li>

                            </ul>

                            <div class="flex-shrink-0 collapse navbar-collapse navbar-collapse-light w-auto flex-grow-1 order-2 order-lg-1"
                                id="navbarNavDropdown">

                                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li class="nav-item dropdown dropdown position-static">
                                        <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Authors
                                        </Link>
                                        <div class="dropdown-menu dropdown-megamenu">
                                            <div class="container-fluid">
                                                <div class="row g-0 g-lg-3">
                                                    <div class="col col-lg-8 py-lg-5">
                                                        <div class="row py-3 py-lg-0 flex-wrap gx-4 gy-6">
                                                            <div class="col">
                                                                <h6 class="dropdown-heading">Thriller</h6>
                                                                <ul class="list-unstyled">
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">J.K. Rowling</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Agatha Christie</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Sir Arthur Conan Doyle</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Louise Penny</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Ann Cleeves</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">David Baldacci</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Gillian Flynn</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Stephen King</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item dropdown-link-all" to="/category">View All</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="col">
                                                                <h6 class="dropdown-heading">Comedy</h6>
                                                                <ul class="list-unstyled">
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Jeff Kinney</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Douglas Adams</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Joseph Heller</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Terry Pratchett</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">William Goldman</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Jerome K Jerome</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Jane Austen</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Ken Kesey</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item dropdown-link-all" to="/cateogry">View All</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="d-none d-xxl-block col">
                                                                <h6 class="dropdown-heading">Horror</h6>
                                                                <ul class="list-unstyled">
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Joey Comeau</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Grady Hendrix</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Koji Suzuki</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Paul Tremblay</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Clive Barker</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Victor LaValle</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Tom Piccirilli</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Dan Simmons</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item dropdown-link-all" to="/category">View All</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="col">
                                                                <h6 class="dropdown-heading">Science Fiction</h6>
                                                                <ul class="list-unstyled">
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Christopher St. John</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Sascha Stronach</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">J.D. Edwin </Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Frank Herbert</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Orson Scott Card</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Ernest Cline</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">Ray Bradbury</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item" to="/category">George Orwell</Link></li>
                                                                    <li class="dropdown-list-item"><Link class="dropdown-item dropdown-link-all" to="/category">View All</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 d-none d-lg-block">
                                                        <div class="vw-50 border-start h-100 position-absolute"></div>
                                                        <div class="py-lg-5 position-relative z-index-10 px-lg-4">
                                                            <div class="row g-4">
                                                                <div class="col-12 col-md-6">
                                                                    <div class="card justify-content-center d-flex align-items-center bg-transparent">
                                                                        <picture class="w-100 d-block mb-2 mx-auto">
                                                                            <img class="w-100 rounded" title="" src="./assets/images/logos/TorBook.png" alt="HTML Bootstrap Template by Pixel Rocket" />
                                                                        </picture>
                                                                        <Link class="fw-bolder link-cover" to="/category">Tor Books</Link>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="card justify-content-center d-flex align-items-center bg-transparent">
                                                                        <picture class="w-100 d-block mb-2 mx-auto">
                                                                            <img class="w-100 rounded" title="" src="./assets/images/logos/Harpercol.png" alt="HTML Bootstrap Template by Pixel Rocket" />
                                                                        </picture>
                                                                        <Link class="fw-bolder link-cover" to="/category">Harper Collins</Link>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <Link to="/category" class="btn btn-link p-0 fw-bolder text-link-border mt-5 text-dark mx-auto d-table">Visit All Publishers</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Books
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" to="/category">Engineering</Link></li>
                                            <li><Link class="dropdown-item" to="/category">Medical</Link></li>
                                            <li><Link class="dropdown-item" to="/category">Programming</Link></li>
                                            <li><Link class="dropdown-item" to="/category">Commerce</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Novels
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" to="/category">Thriller</Link></li>
                                            <li><Link class="dropdown-item" to="/category">Comedy</Link></li>
                                            <li><Link class="dropdown-item" to="/category">Romantic</Link></li>
                                            <li><Link class="dropdown-item" to="/category">Mystery</Link></li>
                                            <li><Link class="dropdown-item" to="/category">Horror</Link></li>
                                            <li><Link class="dropdown-item" to="/category">Fantasy</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/category" role="button">
                                            Sell
                                        </Link>
                                    </li>
                                    {/* <li class="nav-item">
                                        <Link class="nav-link" to="/category" role="button">
                                            Auction
                                        </Link>
                                    </li> */}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
