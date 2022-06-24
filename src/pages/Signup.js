import React from 'react'
import { Alert, alertTitleClasses, Avatar, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavigationBar } from '../components/NavigationBar'
import { Form, Formik, useFormik } from 'formik';

export const Signup = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            phonenum: "",
            emailid: "",
            password: "",
            address: "",
            pincode: ""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    console.log(formik.values);
    return (
        <div>
            <div>
                <AllCss />
                <NavigationBar />
                <Container component="main" maxWidth="xs" >
                    <Box sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        {/* <Box component="form" sx={{mt:3}}> */}
                        <Box sx={{ mt: 3 }}>

                            <form onSubmit={formik.handleSubmit} >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="username"
                                            label="User name"
                                            name="username"
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        />
                                    </Grid>
                            <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="phonenum"
                                            label="Phone number"
                                            name="phonenum"
                                            autoComplete="number"
                                            type="number"
                                        value={formik.values.phonenum}
                                        onChange={formik.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="emailid"
                                            autoComplete="email"
                                        value={formik.values.emailid}
                                        onChange={formik.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="address"
                                            label="Address"
                                            type="text"
                                            id="address"
                                            autoComplete="new-password"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="pincode"
                                            label="Pincode"
                                            name="pincode"
                                            autoComplete="pincode"
                                            type="number"
                                        value={formik.values.pincode}
                                        onChange={formik.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="Remember Me"
                                        />
                                    </Grid> 
                            </Grid>
                            <Button variant="contained" type="submit" onSubmit={formik.handleSubmit} color="primary" sx={{ m: 2, width: "50%" }} >
                                    Signup
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Container>
                <Footer />
            </div>

        </div >
    )
}
