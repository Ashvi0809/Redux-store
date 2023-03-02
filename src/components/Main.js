import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Provider } from 'react-redux'
import Cart from './Cart'
import Home from './Home'
import Navbar from './Navbar'
import store from '../Store/store'
const Main = () => {
  return (
    <div>
    <Provider store={store}>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element= {<Home/>}> </Route>
            <Route path='/cart' element= {<Cart/>}> </Route>
        </Routes>
        </BrowserRouter>
    </Provider>
    </div>
  )
}

export default Main