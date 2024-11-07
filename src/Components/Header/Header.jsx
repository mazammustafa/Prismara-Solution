import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../../assets/header-logo.png'
import { BtnPrimary } from '../Buttons/Button'
import './header.css'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header-wrapper">
            <div className="logo"><img src={Logo} alt="" /></div>
            <div className="navigation">
              <Navbar />
              <BtnPrimary btnText={'Contact us'}/>

            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header 
