import { SellOutlined } from '@mui/icons-material'
import { Box, Button, FormControl, Input, InputLabel, TextField } from '@mui/material'
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
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: "100%",
                
            }}>
                <h3>Sell Your Book <SellOutlined /> </h3>
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
                </FormControl>
            </Box>
            <Footer />
        </div>
    )
}
