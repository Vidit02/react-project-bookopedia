import { SellOutlined } from '@mui/icons-material'
import { Box, Button, Container, FormControl, Grid, Input, InputLabel, TextField, Typography } from '@mui/material'
import { border, width } from '@mui/system'
import React from 'react'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import { NavigationBar } from '../components/NavigationBar'

export const Sell = () => {
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
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="bookname"
                                    label="Book Name"
                                    variant="outlined"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="bookauthor"
                                    label="Book Author"
                                    variant="outlined"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="bookisbn"
                                    label="Book ISBN"
                                    variant="outlined"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="bookgenre"
                                    label="Book Genre"
                                    variant="outlined"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="bookauthor"
                                    label="Book Price"
                                    variant="outlined"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="frontcover"
                                    label="Front Cover"
                                    variant="outlined"
                                    type="file"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="frontcover"
                                    label="Back Cover"
                                    variant="outlined"
                                    type="file"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                        </Grid>
                        <Button variant="outlined" color="success" sx={{ m: 2, width: "50%" }} >
                            Sell Book
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}
