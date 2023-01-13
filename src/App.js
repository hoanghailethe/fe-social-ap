import React, { Component } from 'react'
import './App.css'
// import {BrowserRouter as Route, Router, Routes} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/DashBoard'


//components
import NavBar from './components/Navbar'

export class App extends Component {
  render() {
    return (
      <div className='App'>
          <BrowserRouter>
            <NavBar />
            <div className='container'>
              <Routes>
                <Route  path='/' element={<Home />}/>
                <Route  path='/login' element={<Login />}/>
                <Route  path='/signup' element={<Signup />}/>
                <Route  path='/dashboard' element={ <Dashboard />}/>
              </Routes>
            </div>
          </BrowserRouter>
      </div>
    )
  }
}

export default App