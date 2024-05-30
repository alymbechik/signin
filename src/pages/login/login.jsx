import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../utils/API/API";
import { useNavigate } from 'react-router-dom';
import { showError } from '../../utils/alert/alert';
import { setData } from '../../redux/slices/dataSlice';
import { useDispatch } from 'react-redux';
import './login.css';
import { Checkbox, FormControlLabel } from '@mui/material';
import { motion } from "framer-motion";
import CircularIndeterminate from '../../components/Loading/loading';

const Login = () => {
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(false)

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.post('/login', data);
      dispatch(setData(response.data.user));
      navigate('/user');
    } catch (e) {
      if (e?.response?.status === 401) {
        showError('Введите верный логин или пароль!')
      } else if(e?.response?.status === 403){
        showError('Нет доступа к получению данных')
      } else if(e?.response?.status === 400){
        showError('В запросе есть ошибка')
      }else{
        showError('Ошибка запроса', 'Повторите попытку позже')
      }
    }finally{
      setIsLoading(false)
    }
  };

  return (
    isLoading?
    <CircularIndeterminate/>
      :
    
    <div className='login'>
      <div className='info'>
        <h1 className='title'>Sign in</h1>
        <p>Sign in and start managing your candidates!</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <input 
          {...register('username', {
            required: 'Имя не может быть пустым',
            minLength: {
              value: 4,
              message: 'Минимум 4 символа'
            },
            maxLength: {
              value: 15,
              message: 'Максимум 15 символов'
            }
          })} 
          placeholder='Login' 
          type='text'
          className='input'
        />
        {errors?.username && (<div className='error-message'>{errors.username.message}</div>)}
        <input 
          {...register('password', {
            required: 'Пароль не может быть пустым',
            minLength: {
              value: 4,
              message: 'Минимум 4 символа'
            },
            maxLength: {
              value: 15,
              message: 'Максимум 15 символов'
            }
          })}
          placeholder='Password' 
          type='password'
          className='input'
        />
        {errors?.password && (<div className='error-message'>{errors.password.message}</div>)}
        </div>
        <div className="boxes">
          <FormControlLabel control={<Checkbox className='checkbox'/>} label="Remember me"/>
          <a href="">Forgot password?</a>
        </div>
        <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.98 }} 
        className='btn'
        >
        Login
        </motion.button>
      </form>
    </div>
  );
};

export default Login;
