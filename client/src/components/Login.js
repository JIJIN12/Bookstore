import React, { useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { postLogin } from './redux/slice/loginslice'
import { useNavigate } from 'react-router-dom'
export default function Login() {

  const dispatch = useDispatch()
const navigate = useNavigate()
  //login_data - state in redux             login - name of slice
  const {Login_data} = useSelector(state=>state.login)
  const [loginstate,set_loginstate] = useState({})
  console.log(loginstate);

  const login_input = (event)=>{
    const {name,value} = event.target
    set_loginstate({...loginstate,[name]:value})
  }

  const submit = (event)=>{
    event.preventDefault()

    dispatch(postLogin(loginstate))
    navigate('/')
  }

  
  return (
    <div>
      <div className='login-form-container'>
        <form action='' className='login_form'>
            <h3 className='login_title'>Sign in</h3>
            <span >username</span>
            <input type='email' name='username' className='box' placeholder='Enter your Email' onChange={login_input}/>
            <span>Password</span>
            <input type='password' name='password' className='box' placeholder='Enter your password' onChange={login_input}/>

            <div className='checkbox'>
                <input type='checkbox' name=''/>
                <label className='login_label'>remember me</label>
            </div>

            <input type='submit' value={'signin'} className='btn' onClick={submit}/>
            <p>forget password?<a href='#'>Click here</a></p>
            <p>Dont't have an account?<a href='/register'>Click here</a></p>
        </form>
      </div>
    </div>
  )
}