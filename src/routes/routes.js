import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../pages/login/login'
import User from '../pages/user/user'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path='/user' element={<User/>} />
      <Route path={'/:notfound'} element={<ErrorPage/>}/>
    </Routes>
  )
}

export default MainRoutes