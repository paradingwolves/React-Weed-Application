import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import '../styles/Footer.css';



function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Instagram /> 
        <Twitter /> 
        <Facebook /> 
        <LinkedIn /> 
      </div>
      <p> &copy; 2023 justinszaza.ca</p>
      <p> Header Image Logo Credit: <a href='https://pngtree.com/so/king'>king png from pngtree.com/</a></p>
    </div>
  )
}

export default Footer
