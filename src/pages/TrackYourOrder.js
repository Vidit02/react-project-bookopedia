import React, { useState } from 'react'
import { AllCss } from '../components/AllCss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/material';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),

}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <DoneAllIcon />,
        2: <LocalShippingIcon />,
        3: <DeliveryDiningIcon />,
        4: <CheckCircleIcon />
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = ['Order Placed Successfully', 'In-Transit', 'Out for Delivery', 'Delivered'];


export const TrackYourOrder = () => {
    const [activestep, setactivestep] = useState(3)
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
                                            <Link className="nav-link-checkout" to="/yourorder">
                                                Your Orders
                                            </Link>
                                        </li>
                                        <li className="me-4">
                                            <Link className="nav-link-checkout" to="/order">
                                                Order Details
                                            </Link>
                                        </li><li className="me-4">
                                            <Link
                                                className="nav-link-checkout active"
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
                                        Track Your Order
                                    </h3>
                                    <div className='mt-5'>
                                        <Stack sx={{ width: '100%' }} spacing={4}>
                                            <Stepper alternativeLabel activeStep={activestep} connector={<ColorlibConnector />}>
                                                {steps.map((label) => (
                                                    <Step key={label}>
                                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                                    </Step>
                                                ))}
                                            </Stepper>
                                        </Stack>
                                    </div>
                                    <div className="table-responsive mt-5">
                                        <div className="row mx-0 py-4 g-0 border-bottom">
                                            {/* <div className="col-2 position-relative"> */}
                                            {/* <span className="checkout-item-qty">3</span> */}
                                            {/* <picture className="d-block border">
                                                    <img
                                                        className="img-fluid"
                                                        src="./assets/images/products/product-cart-1.jpg"
                                                        alt="HTML Bootstrap Template by Pixel Rocket"
                                                    />
                                                </picture> */}
                                            {/* </div> */}
                                            {
                                                activestep == 1 ? <div className="col-9 offset-1">
                                                    <div>
                                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                            Package has left at a DHL Factory
                                                        </h6>
                                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                            At 6th June 6:39 PM, Ahmedabad , GUJ IN
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="justify-content-between d-flex align-items-start mb-2 mt-3">
                                                            Package has arrived at a DHL Factory
                                                        </h6>
                                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                            At 7th June 10:00 AM, Ahmedabad, GUJ IN
                                                        </span>
                                                    </div>
                                                </div> : null
                                            }
                                            {
                                                activestep == 2 ? <div className="col-9 offset-1">
                                                    <div>
                                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                            Package has arrived at a DHL Factory
                                                        </h6>
                                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                            At 7th June 10:00 AM, Ahmedabad , GUJ IN
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="justify-content-between d-flex align-items-start mb-2 mt-3">
                                                            Out for Delivery
                                                        </h6>
                                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                            At 7th June 1:00 PM <br></br>
                                                            <span > Contact: +919898900000</span> <br></br>
                                                            <span >OTP: 1981</span>
                                                        </span>
                                                    </div>
                                                </div> : null
                                            }
                                            {
                                                activestep == 3 ? <div className="col-9 offset-1">
                                                    <div>
                                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                            Order has been Delivered
                                                        </h6>
                                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                            Recieved By : Vidit Gandhi
                                                        </span>
                                                    </div>
                                                </div> : null
                                            }
                                        </div>{" "}
                                    </div>
                                    <div className='mt-4'>
                                        <Stack direction="row" spacing={2}>
                                            <Button variant="" startIcon={<ArrowBackIosIcon />} href="/orderdetails">
                                                Back to Order Details
                                            </Button>
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 bg-light pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
                            <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5">
                                <div className="pb-3">
                                    {/* Cart Item*/}
                                    <div className="row mx-0 py-4 g-0 border-bottom">
                                        <div className="col-9">
                                            <div>
                                                <h5 className="justify-content-between d-flex align-items-start mb-2 fw-bold">
                                                    Shipping Details
                                                </h5>
                                                <h6 className="justify-content-between d-flex align-items-start mb-2 fw-bold">
                                                    Vidit Gandhi
                                                </h6>
                                                <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                    A-1/12, QuesBuddy Building, <br />
                                                    Nr. Lawyer's Tower, <br />
                                                    Navrangpura, New Ranip, <br />
                                                    Ahmedabad - 380998 <br />
                                                    Mob No.: +919828828882
                                                </span>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* / Cart Item*/}
                                    {/* Cart Item*/}
                                    <div className="row mx-0 py-4 g-0 border-bottom">
                                        <div className="col-9">
                                            <div>
                                                <h5 className="justify-content-between d-flex align-items-start mb-2 fw-bold">
                                                    Billing Details
                                                </h5>
                                                <h6 className="justify-content-between d-flex align-items-start mb-2 fw-bold">
                                                    Nimish Gandhi
                                                </h6>
                                                <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                                                    A-1/12, QuesBuddy Building, <br />
                                                    Nr. Lawyer's Tower, <br />
                                                    Navrangpura, New Ranip, <br />
                                                    Ahmedabad - 380998 <br />
                                                    Mob No.: +919828828882
                                                </span>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* / Cart Item*/}
                                </div>
                                <div className="py-4 border-bottom">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="m-0 fw-bold fs-5">Grand Total</p>
                                            <span className="text-muted small">Inc $45.89 sales tax</span>
                                        </div>
                                        <p className="m-0 fs-5 fw-bold">$422.99</p>
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
