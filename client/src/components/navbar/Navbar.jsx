import React, { useState} from 'react'
import {RiMenu3LIne, RiCloseLin, RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [toggleMenu, setToggleMenu]= useState(false);
  return (
    <div className='fithusiast__navbar'>
      <div className='fithusiast__navbar-links'>
        <div className='fithusiast__navbar-links_logo'>
        <img src={logo} alt="logo" />
        </div>

      </div>
      <div className='fithusiast__navbar-sign'>
        <Link to='/login'><p>Sign in</p></Link>
        <Link to='/signup'><button type='button'>Sign up</button></Link>
      </div>

      <div className='fithusiast__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='fithusiast__navbar-menu_container scale-up-center'>
            <div className='fithusiast__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>

          </div>
        )}
      </div>
    
    </div>
  )
}

export default Navbar