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
    // navigate('/')
  }

  
  return (
    <div>
       <div className="header">
        <div className="header_1">
          <a href="#" className="logo">
            <i className="book_title fas fa-book"></i>Bookly
          </a>

          <form action="" className="search_form">
            <input
              type="search"
              className="search_input"
              name=""
              placeholder="search here"
              disabled
            />
            <label className="search_title fas fa-search"></label>
          </form>

          <div className="icons">
            <div className="search_title fas fa search"></div>
            <a href="/book/favourite" className="shpping_cart fas fa-heart disabled" ></a>
            <a href="/cartcompo" className="fa-solid fa-book disabled"></a>
            <a href="/profile" className="user fas fa-user disabled"></a>
          </div>
        </div>
      </div>

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