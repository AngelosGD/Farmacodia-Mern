import React from 'react'
import {HomeFarmacodia, NotFound,AboutPage, BlogPage, LoginPage, SignupPage} from './pages/index.js'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeFarmacodia/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/About' element={<AboutPage/>} />
        <Route path='/Blog' element={<BlogPage/>} />
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/Signup' element={<SignupPage/>} />
      </Routes>
    </div>
  )
}

export default App


