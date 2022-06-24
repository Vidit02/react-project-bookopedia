import { Box, Container, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import { NavigationBar } from '../components/NavigationBar'
export const Form = () => {
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
      console.log(values);
    }
  })
  return (
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
            <form onSubmit={formik.handleSubmit}>
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
              </Grid>
              <input type="submit" value="submit"></input>
            </form>
          </Box>
      </Container>
      <Footer />
    </div>
  )
}
