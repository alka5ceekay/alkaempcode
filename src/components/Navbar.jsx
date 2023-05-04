import { Box } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
            
          
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeAPP
          </Typography>
          <Button color="inherit" variant='outlined'>
            
         <Link to={'/'}>Home</Link>
         </Button>
          <Button color="inherit" variant='outlined'>
            <Link to={'/add'}>Add Employee</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
      
    </div>
  )
}

export default Navbar