import React from 'react'
import {Blog, Features, Footer, Header, Possibility} from './containers'
import {Navbar, UserNav} from './components'
import {Login, Signup, Article, VetInfo, Homepage, Write} from './pages'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"



const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='gradient__bg'>
          <Routes>
            <Route exact path='/' element={<><Navbar /><Header /></>}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/homepage' element={<><UserNav /><Homepage/></>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/articles' element={<><UserNav/><Article /></>}/>
            <Route path='/vetinfo' element={<><UserNav/><VetInfo /></>}/>
            <Route path='/write' element={<><UserNav/><Write /></>}/>

          </Routes>
            
        </div>
      </div>
    </Router>
  )
}

export default App