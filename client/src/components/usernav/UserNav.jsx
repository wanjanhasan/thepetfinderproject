import React, { useState} from 'react'
import {RiMenu3LIne, RiCloseLin, RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './userNav.css'
import { Link } from 'react-router-dom'

const Menu= () => (
    <>
    <Link to='/homepage'><p><a href='#home'>Homepage</a></p></Link>
    <Link to='/articles'><p><a href='#articles'>Article</a></p></Link>
    <Link to='/write'><p><a href='#write'>Donate Your Pet</a></p></Link>
    <Link to='/vetinfo'><p><a href='#vetinfo'>Find A Vet</a></p></Link>
    
    
    </>
    
  
  )

const UserNav = () => {
  return (
    <div className='fithusiast__usernav'>
      <div className='fithusiast__usernav-links'>
        <div className='fithusiast__usernav-links_logo'>
        <img src={logo} alt="logo" />
        </div>

      </div>
      <div className='fithusiast__fithusiast__usernav-menu'>
        <Menu />
      </div>
      <div className='fithusiast__usernav-sign'>
        <Link to='/'><button type='button'>Logout</button></Link>
      </div>
      
    
    </div>
  )
}

export default UserNav