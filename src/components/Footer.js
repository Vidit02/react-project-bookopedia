import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
        <footer class="border-top py-5 mt-4  ">
        <div class="container-fluid">
            <div class="d-flex justify-content-between align-items-center flex-column flex-lg-row">
                <div>
                    <ul class="list-unstyled">
                        <li class="d-inline-block me-1"><Link class="text-decoration-none text-dark-hover transition-all"
                                to="/"><i class="ri-instagram-fill"></i></Link></li>
                        <li class="d-inline-block me-1"><Link class="text-decoration-none text-dark-hover transition-all"
                                to="/"><i class="ri-facebook-fill"></i></Link></li>
                        <li class="d-inline-block me-1"><Link class="text-decoration-none text-dark-hover transition-all"
                                to="/"><i class="ri-twitter-fill"></i></Link></li>
                        <li class="d-inline-block me-1"><Link class="text-decoration-none text-dark-hover transition-all"
                                to="/"><i class="ri-snapchat-fill"></i></Link></li>
                    </ul>
                </div>
                <div class="d-flex align-items-center justify-content-end flex-column flex-lg-row">
                    <p class="small m-0 text-center text-lg-start">&copy; 2021 OldSkool All Rights Reserved. Template by <a
                            href="https://www.pixelrocket.store">Pixel Rocket</a></p>
                    <ul class="list-unstyled mb-0 ms-lg-4 mt-3 mt-lg-0 d-flex justify-content-end align-items-center">
                        <li class="bg-light p-2 d-flex align-items-center justify-content-center me-2">
                            <i class="pi pi-sm pi-paypal"></i></li>
                        <li class="bg-light p-2 d-flex align-items-center justify-content-center me-2">
                            <i class="pi pi-sm pi-mastercard"></i></li>
                        <li class="bg-light p-2 d-flex align-items-center justify-content-center me-2">
                            <i class="pi pi-sm pi-american-express"></i></li>
                        <li class="bg-light p-2 d-flex align-items-center justify-content-center"><i
                                class="pi pi-sm pi-visa"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
