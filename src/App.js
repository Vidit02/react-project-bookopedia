import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { AllCss } from './components/AllCss';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Category } from './pages/Category';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { CheckoutShipping } from './pages/CheckoutShipping';
import { CheckoutPayment } from './pages/CheckoutPayment';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Profile } from './pages/dashboard/Profile';
import { DashHome } from './pages/dashboard/DashHome';
import { YourOrders } from './pages/YourOrders';
import { OrderDetails } from './pages/OrderDetails';
import { TrackYourOrder } from './pages/TrackYourOrder';
import { MyAccount } from './pages/MyAccount';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { useState } from 'react';
import { Sell } from './pages/Sell';
import { Form } from './pages/Form';
import { Toaster } from './components/Toaster';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [settoast, setsettoast] = useState(null)
  const [msg, setmsg] = useState(null)
  const viewToast = (data ,msg) => {
    setsettoast(data)
    setmsg(msg)
  }
  return (
    <div className="App">
        <Toaster mode={settoast} msg={msg}></Toaster>
        <Routes>
          <Route path='/index' element={<HomePage/>}></Route>
          <Route path='/category' element={<Category/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/checkoutshipping' element={<CheckoutShipping/>}></Route>
          <Route path='/checkoutpayment' element={<CheckoutPayment/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/dashhome' element={<DashHome/>}></Route>
          <Route path='/yourorder' element={<YourOrders/>}></Route>
          <Route path='/orderdetails' element={<OrderDetails/>}></Route>
          <Route path='/trackorder' element={<TrackYourOrder/>}></Route>
          <Route path='/myaccount' element={<MyAccount/>}></Route>
          <Route path='/signup' element={<Signup viewToast={viewToast}/>}></Route>
          <Route path='/sell' element={<Sell/>}></Route>
          <Route path='/see' element={<Form/>}></Route>
          <Route path='/login' element={<Login viewToast={viewToast}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
