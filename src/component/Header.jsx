import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import { Appstate } from '../App';
const Header=()=> {
  const useAppstate = useContext(Appstate);
  return (
    <div className='text-3xl flex justify-between items-center text-red-500 
   font-bold p-3 border-b-2 border-gray-500 '>
  <Link to={'/'} ><span>Filmy<span className='text-white'>India</span> </span></Link>
  {useAppstate.login ?
   <Link to={'/addmovie'} ><h1 className='text-lg cursor-pointer flex items-center'>
    <Button><AddIcon className= 'mr-2' color='Secondary'/><span className='text-white'> Add New </span></Button>
   </h1></Link>
   :
   <Link to={'/login'} ><h1 className='text-lg bg-green-500 cursor-pointer flex items-center'>
    <Button><span className='text-white font-medium capitalize'> Login </span></Button>
   </h1></Link>
   }
   </div>
  )
}

export default Header 