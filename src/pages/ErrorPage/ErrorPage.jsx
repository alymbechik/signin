import React from 'react'
import './style.css'
import { Helmet } from 'react-helmet'

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
        <div className='errorpage'>
           <h1 className='errorstatus'>404</h1>
            <h1>Страница не найдена</h1> 
            <a href="/login">Авторизоваться</a>
           
        </div>
    </div>
  )
}

export default ErrorPage