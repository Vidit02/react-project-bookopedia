import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AllCss } from '../components/AllCss'
import { Footer } from '../components/Footer'
import { NavigationBar } from '../components/NavigationBar'

export const Logout = () => {
  sessionStorage.clear();
  const navigate = useNavigate()
  setTimeout(() => {
    console.log("in")
    navigate("/")
  }, 2000);
  return ( 
    <div>
      <AllCss />
      <NavigationBar />
      <Footer />
    </div>
  )
}
