import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './user.css'
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';

const User = () => {
  const fusers = useSelector(state => state.data)
  
  const [users, setUsers] = useState([])
  console.log(users);

  const getUsers = async () => {
    await setUsers([fusers.data])
  }

  useEffect(()=>{
    getUsers()
  })

  return (
    <div className='user'>
      <Helmet>
        <title>Пользователь</title>
      </Helmet>
      <h1>Пользователь: {users[0]? users[0].username : '...'}</h1>
      {users.map((item, idx) => {
          return(
            <motion.div
            key={idx} 
            className='card'
            whileHover={{ scale: [null, 1.05, 1.15] }}
            transition={{ duration: 0.3 }}
            >
            <h2>ID: {item? item.id : '...'}</h2>
            <h2>Полное имя: {item? item.fullName : '...'}</h2>
            <h2>Работа: {item? item.job : '...'}</h2>
            <h2>Город: {item? item.city : '...'}</h2>
            <h2>Пол: {item? item.sex : '...'}</h2>
            <h2>Язык программирования: {item? item.language : '...'}</h2>
            </motion.div>
          )
        }
        )}
        <a href='/login'className='a'>Авторизоваться</a>
    </div>
  )
}

export default User
