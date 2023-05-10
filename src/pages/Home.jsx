import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/marijuana.avif";
import Menu from './Menu';

import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage:  `url(${BannerImage})`}}>
      <div className='headerContainer' >
        <h1>Justin's Za Za</h1>
        <p>THIS ZA WILL SEND YOU TO SPACE</p>
        <Link to="/menu">
        <button>
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
