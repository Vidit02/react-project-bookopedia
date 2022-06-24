import { Dialog } from '@mui/material'
import React from 'react'
import { Login } from '../pages/Login'

export const ModelDialog = ({open,handleClose}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <Logwin handleClose={handleClose}/>
    </Dialog>
  )
}
