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
    const [userid, setuserid] = useState(null)
    const [frontcover, setfrontcover] = useState(null)
    const [backcover, setbackcover] = useState(null)
    const [isdone, setisdone] = useState(false)
    const navigate = useNavigate()

    const fileuploadfront = async (e) => {

        const formdata = new FormData()
        // formdata.append("name" , formik.values.bookname)
        formdata.append("file", e.target.files[0])
        formdata.append("name",formik.values.bookname)
        await axios.post("http://localhost:9999/uploadfrontcover", formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authToken': authtoken,
                'userId': userid
            }
        }).then(res => {
            setfrontcover(res.data)
        })
    }

    const fileuploadback = async (e) => {
        const formdata = new FormData()
        formdata.append("file", e.target.files[0])
        formdata.append("name",formik.values.bookname)
        await axios.post("http://localhost:9999/uploadbackcover", formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authToken': authtoken,
                'userId': userid
            }
        }).then(res => {
            setbackcover(res.data)
            setisdone(true)
        })
    }
    const formik = useFormik({
        initialValues: {
            bookname: "",
            author: "",
            isbn: "",
            genre: "",
            price: "",
            frontcover: frontcover,
            backcover : backcover
        },
        onSubmit: (values, { resetForm }) => {
            // console.log("This is submut");
            // const imgdata = {
            //     name: values.bookname,
            //     frontcover: values.frontcover,
            //     backcover: values.backcover
            // }


            // var formData = new FormData()
            // formData.append("name",values.bookname)
            // formData.append("frontcover",values.frontcover)
            // formData.append("backcover",values.backcover)
            // axios.post("http://localhost:9999/upload", formdata, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //         'authToken': authtoken,
            //         'userid': userid
            //     }
            // }).then((res) => {
            //     console.log(res);
            // if (res.status === 200) {
            //     const img = res.data
            //     values.frontcover = img
            //     values.backcover = img
                formik.values.frontcover = frontcover
                formik.values.backcover  = backcover
                const json = JSON.stringify(values, null, 2)
                axios.post("http://localhost:9999/addbook", json, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    if (res.status === 200) {
                        props.viewToast("success", `${res.data.bookname} book added...`)
                        console.log(res);
                        document.getElementById("frontcover").value = ''
                        document.getElementById("backcover").value = ''
                        resetForm({ values: '' })
                        setisdone(false)
                        // setTimeout(() => {
                        //     navigate("")
                        // }, 1000);
                    } else {
                        props.viewToast("error", "Server might be down")
                    }
                })
            // } else {
            //     props.viewToast("Error", "Images not uploaded")
            // }
            // })
        }
    })
    useEffect(() => {
        if (sessionStorage.getItem("userdata") == null) {
            console.log("not signed in")
            props.viewToast("info", "Please Sign in")
            navigate("/login")
        } else {
            setauthtoken(JSON.parse(sessionStorage.getItem("userdata")).authtoken)
            setuserid(JSON.parse(sessionStorage.getItem("userdata")).userid)
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
                                        onChange={(e) => fileuploadfront(e)}
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
                                        onChange={(e) => fileuploadback(e)}
                                        InputLabelProps={{ shrink: true }}
                                        disabled={frontcover == null ? true : false}
                                    />
                                </Grid>
                            </Grid>
                            <Button variant="outlined" type="submit" color="success" disabled={isdone ? false : true} sx={{ m: 2, width: "50%" }} >
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
