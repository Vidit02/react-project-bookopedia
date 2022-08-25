import { SellOutlined } from '@mui/icons-material'
import { Box, Button, Container, FormControl, Grid, Input, InputLabel, TextField, Typography } from '@mui/material'
import { border, width } from '@mui/system'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import { NavigationBar } from '../components/NavigationBar'

export const Sell = (props) => {
    const [authtoken, setauthtoken] = useState(null)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            bookname: "",
            author: "",
            isbn: "",
            genre: "",
            price: "",
            frontcover: null,
            backcover: null
        },
        onSubmit: (values, { resetform }) => {
            const json = JSON.stringify(values,null,2)
            axios.post("http://localhost:9999/addbook",json,{
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).then((res) =>{
                if(res.status === 200) {
                    props.viewToast("success" , `${res.data.bookname} book added...`)
                    console.log(res);
                    resetform({values : ''})
                    // setTimeout(() => {
                    //     navigate("")
                    // }, 1000);
                } else {
                    props.viewToast("error","Server might be down")
                }
            })
        }
    })
    console.log(formik.values);
    useEffect(() => {
        if (sessionStorage.getItem("userdata") == null) {
            console.log("not signed in")
            props.viewToast("info", "Please Sign in")
            navigate("/login")
        } else {
            setauthtoken(JSON.parse(sessionStorage.getItem("userdata")).authtoken)
            console.log("authtokebn ", authtoken);
        }
    })

    return (
        <div>
            <AllCss />
            <NavigationBar />
            {/* <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: "100%",
                
            }}> */}
            {/* <h3>Sell Your Book <SellOutlined /> </h3>
                <FormControl sx={{ width: "25%"}}>
                    <TextField id="outlined" label="Book Name" variant="outlined" sx={{ width: "100%", m: 1 }} required/>
                    <TextField id="outlined" label="Book Author" variant="outlined" sx={{ width: "100%", m: 1 }} required />
                    <TextField id="outlined" label="Book ISBN" variant="outlined" sx={{ width: "100%", m: 1 }}  required/>
                    <TextField id="outlined" label="Book Genre" variant="outlined" sx={{ width: "100%", m: 1 }} required/>
                    <TextField id="outlined" label="Book Price" type="number" variant="outlined" sx={{ width: "100%", m: 1 }} required />
                    <TextField label="Front Cover" type="file" InputLabelProps={{ shrink: true }} sx={{ width: "100%", m: 1 }} required/>
                    <TextField label="Back Cover" type="file" InputLabelProps={{ shrink: true }} sx={{ width: "100%", m: 1 }} required/>
                    <Button variant="contained" color="success" sx={{ width: "100%", m: 1 }} disabled>
                        Click to Sell
                    </Button>
                </FormControl> */}
            {/* </Box> */}
            {/* <Container component="main" maxWidth="xs" >
                <Box sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography component="h1" variant="h5">
                        Sell Your Book <SellOutlined />
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Book Name"
                                    variant="outlined"
                                    autoComplete="email"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container> */}

            <Container component="main" maxWidth="xs" >
                <Box sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography component="h1" variant="h5">
                        Sell Your Book <SellOutlined />
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="bookname"
                                        id="bookname"
                                        label="Book Name"
                                        variant="outlined"
                                        type="text"
                                        value={formik.values.bookname}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="author"
                                        id="author"
                                        label="Book Author"
                                        variant="outlined"
                                        type="text"
                                        value={formik.values.author}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="isbn"
                                        id="isbn"
                                        label="Book ISBN"
                                        variant="outlined"
                                        type="text"
                                        value={formik.values.isbn}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="genre"
                                        id="genre"
                                        label="Book Genre"
                                        variant="outlined"
                                        type="text"
                                        value={formik.values.genre}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="price"
                                        id="price"
                                        label="Book Price"
                                        variant="outlined"
                                        type="number"
                                        value={formik.values.price}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="frontcover"
                                        id="frontcover"
                                        label="Front Cover"
                                        variant="outlined"
                                        type="file"
                                        value={formik.values.frontcover}
                                        onChange={formik.handleChange}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="backcover"
                                        id="backcover"
                                        label="Back Cover"
                                        variant="outlined"
                                        type="file"
                                        value={formik.values.backcover}
                                        onChange={formik.handleChange}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                            </Grid>
                            <Button variant="outlined" type="submit"  color="success" sx={{ m: 2, width: "50%" }} >
                                Sell
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}
