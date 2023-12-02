import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { registrataion } from './redux/slice/registerslice'
export default function Register() {

  const dispatch = useDispatch()
  const {register_data} = useSelector(state=>state.register)




  const [registerstate,set_register] = useState({})



  const register_input = (event)=>{
    const {name,value} = event.target
    set_register({...registerstate,[name]:value})
  }

  const register_submit=(event)=>{
    event.preventDefault()
    dispatch(registrataion(registerstate))
  }

  
  return (
    <div>
       <div className='register-form-container'>
        <form action='' className='register_form'>
            <h3 className='register_title'>Sign in</h3>
            <span >Full Name</span>
            <input type='text' name='FullName' className='box' placeholder='Enter your Full Name' onChange={register_input}/>
            <span >Email</span>
            <input type='email' name='Email' className='box' placeholder='Enter your Email' onChange={register_input}/>
            <span >username</span>
            <input type='text' name='username' className='box' placeholder='Enter your Username' onChange={register_input}/>
            <span>Password</span>
            <input type='password' name='password' className='box' placeholder='Enter your password' onChange={register_input}/>

            <div className='checkbox'>
                <input type='checkbox' name=''/>
                <label className='register_label'>remember me</label>
            </div>

            <input type='submit' value={'signin'} className='register_btn' onClick={register_submit}/>
            <p>forget password?<a href='#'>Click here</a></p>
            <p>Dont't have an account?<a href='#'>Click here</a></p>
        </form>
      </div>
    </div>
  )
}
