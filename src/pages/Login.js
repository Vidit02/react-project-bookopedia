import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavigationBar } from '../components/NavigationBar'

export const Login = ({ handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password);
        handleClose();
    };
    return (
        <div>
            <Box sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        label="Email"
                        variant="filled"
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        sx={{m:4,width:"75%"}}
                    />
                    <br></br>
                    <TextField
                        label="Password"
                        variant="filled"
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        sx={{m:4,width:"75%"}}
                    />
                    
                    <Box sx={{alignItems:"center"}} >
                        <Button type="submit" variant="outlined" color="success" sx={{m:3}} onClick={handleClose}>
                            Signup
                        </Button>
                        <Button type="submit" variant="outlined" color="primary" sx={{m:3}} href="/signup">
                            Create
                        </Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}
