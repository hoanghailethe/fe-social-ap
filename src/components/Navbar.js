import React, { Component } from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export class Navbar extends Component {
  render() {
    return (
    
      <AppBar>
        <Toolbar>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Sign up</Button>
            <Button color="inherit">DashBoard</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar