import React from 'react'
import { Link } from 'react-router-dom'
import { AllCss } from '../components/AllCss'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const steps = [
    {
        label: 'Order Details',
        description: ["Order-Id : 123901 ", "Payment Details : Cash on Delivery"]
    },
    {
        label: 'Shipping Status',
        description:
            ['An ad group contains one or more ads which target a shared set of keywords.'],
    },
    {
        label: 'Delivery Status',
        description: [`Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`],
    },
];
export const OrderDetails = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

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
                                            <Link className="nav-link-checkout" to="/cart">
                                                Your Orders
                                            </Link>
                                        </li>
                                        <li className="me-4">
                                            <Link className="nav-link-checkout active" to="/checkout">
                                                Order Details
                                            </Link>
                                        </li><li className="me-4">
                                            <Link
                                                className="nav-link-checkout "
                                                to="/checkoutshipping"
                                            >
                                                Track Your Order
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="nav-link-checkout nav-link-last "
                                                to="/checkoutpayment"
                                            >
                                                Returns & Replacement
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>{" "}
                                <div className="mt-5">
                                    <h3 className="fs-5 fw-bolder mb-0 border-bottom pb-4">
                                        Ordered Items
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
                                                        Nike Air VaporMax 2021
                                                        <i className="ri-close-line ms-3" />
                                                    </h6>
                                                    <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                        Size: 9 / Qty: 1
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
                                                        <i className="ri-close-line ms-3" />
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
                                            <Button variant="" startIcon={<ArrowBackIosIcon />} href="/yourorder">
                                                Back to Your Orders
                                            </Button>
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 bg-light p-5 pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
                            <div className="py-4 border-bottom">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="m-0 fw-bold fs-5">Grand Total</p>
                                        <span className="text-muted small">Inc $45.89 sales tax</span>
                                    </div>
                                    <p className="m-0 fs-5 fw-bold">$422.99</p>
                                </div>
                            </div>
                            <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5 mt-4 ml-3">
                                <Box sx={{ maxWidth: 400 }}>
                                    <Stepper activeStep={activeStep} orientation="vertical">
                                        {steps.map((step, index) => (
                                            <Step key={step.label}>
                                                <StepLabel
                                                    optional={
                                                        index === 2 ? (
                                                            <Typography variant="caption">Last step</Typography>
                                                        ) : null
                                                    }
                                                >
                                                    {step.label}
                                                </StepLabel>
                                                <StepContent>
                                                    {/* <Typography>{step.description}</Typography> */}
                                                    {
                                                        step.description.map((e) => {
                                                            return (
                                                                <Typography>{e} </Typography>
                                                            )
                                                        })
                                                    }

                                                    {/* <Box sx={{ mb: 2 }}> */}
                                                    {/* <div>
                                                            <Button
                                                                variant="contained"
                                                                onClick={handleNext}
                                                                sx={{ mt: 1, mr: 1 }}
                                                            >
                                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                            </Button>
                                                            <Button
                                                                disabled={index === 0}
                                                                onClick={handleBack}
                                                                sx={{ mt: 1, mr: 1 }}
                                                            >
                                                                Back
                                                            </Button>
                                                        </div> */}
                                                    {/* </Box> */}
                                                </StepContent>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Box>
                            </div>
                            <div className="p-5 py-lg-0 pe-lg-0 ps-lg-5 mt-2">
                                <Link
                                    to="/trackorder"
                                    className="btn btn-dark w-100 text-center mt-5"
                                    role="button"
                                >
                                    Track Your Order
                                </Link>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
