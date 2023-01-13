import React, { Component } from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
    
      <AppBar>
        <Toolbar>
            <Button color="inherit" LinkComponent={Link} to="/login" >Login</Button>
            <Button color="inherit" LinkComponent={Link} to="/" >Home</Button>
            <Button color="inherit" LinkComponent={Link} to="/signup" >Sign up</Button>
            <Button color="inherit" LinkComponent={Link} to="/DashBoard">DashBoard</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar