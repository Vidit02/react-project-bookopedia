import React from 'react'
import { Avatar, Box } from '@mui/material'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavigationBar } from '../components/NavigationBar'

export const Signup = () => {
    return (
        <div>
            <div>
                <AllCss />
                <NavigationBar />
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                </Box>
                <Footer />
            </div>

        </div>
    )
}
