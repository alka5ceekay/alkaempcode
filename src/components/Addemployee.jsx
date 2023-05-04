import { Stack,TextField, Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';

const Addemployee = () => {
  const {register,handleSubmit}=useForm();
    const getVal=(val)=>{
      console.log(val);
      alert("Form submitted");
      axios.post('https://reqres.in/api/users',val).then((res)=>{
        alert(`the data is posted with id'${res.data.id}`)
      })
    }
  return (
    <div>
      <Stack
      component="form"
      sx={{
        width: '25ch',
        marginLeft:'50%',
        marginTop:'15%',
      }}
       spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        name='empname'
        {...register('empname')}
        id="filled-hidden-label-small"
        defaultValue="Employee Name"
        variant="outlined"
      
      />
      <TextField
        hiddenLabel
        name='emplocation'
        {...register('emplocation')}
        id="filled-hidden-label-normal"
        defaultValue="Employee location"
        variant="filled"
      />
      <TextField
        hiddenLabel
        name='empdesignation'
        {...register('empdesignation')}
        id="filled-hidden-label-small"
        defaultValue="Employee designation"
        variant="outlined"
        />
        <Button onClick={handleSubmit(getVal)}varient='contained'>Submit</Button>
      
    </Stack>
      

      
    </div>
  )
}

export default Addemployee
