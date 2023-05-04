import { ClassNames } from '@emotion/react';
import './Home.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Home = () => {
  var [value, setValue]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((response)=>{
      console.log(response.data.users);
      setValue(value=response.data.users)
     })
     },[])
    
      return (
     <div>
     <Table className='tb'>
      <TableHead>
        <TableRow>
          <TableCell>
            First Name
          </TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {value.map((data, ind)=>{
          return <TableRow>
            <TableCell>{data.firstName}</TableCell>
            <TableCell>{data.lastName}</TableCell>
            <TableCell>{data.age}</TableCell>
          </TableRow>
        })}

      </TableBody>
    </Table>
    </div >
  )
}

export default Home