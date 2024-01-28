import React ,{useState,useContext}from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {AppContext} from '../context/AppContextProvider'
import toast from 'react-hot-toast';
const Login = () => {
  const navigate=useNavigate();
      const [message,setMessage]=useState("Login to Your Account")
      const {setUsername,setLoginstatus}=useContext(AppContext);
      const [logindata, SetLogindata] = useState({
        emailAddress: '',
        password:''
      });
    
      function changeHandler(e) {
        const { name, value, type, checked } = e.target;
        
        SetLogindata((prev) => {
          if (type === 'checkbox') return { ...prev, [name]: checked };
          return { ...prev, [name]: value };
        });
      }
async function formSubmit(e) {
      e.preventDefault();
      
      try {
      const response = await fetch('https://e-commersebackend12.onrender.com/login', {
            method:'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials:'include',
            body: JSON.stringify(logindata),
      });
      const data = await response.json();
      const {message:messageFromBackend}=data
      const {firstname}=data;
      console.log(firstname);
      toast.success("you logged in");
      if(firstname) {
        navigate('/')
      }
      // else {
      //   navigate('/notlogedin')
      // }
      setUsername(firstname);
      setLoginstatus(true);
      
      console.log('Server Response:', messageFromBackend);
      setMessage(messageFromBackend)
      } catch (error) {
      console.error('Error submitting form:', error);
      }
      }
    
      return (
        <div className='SignUp'>
          <form >
            <div className='message'>{message}</div>
            <fieldset className='startingdata'>
              <label htmlFor='emailAddress'>Email Address</label>
              <br />
              <input
                name='emailAddress'
                type='text'
                value={logindata.emailAddress}
                onChange={changeHandler}
              />
              <br />
              <label htmlFor='password'>Create Password</label>
              <br />
              <input
                name='password'
                type='password'
                value={logindata.password}
                onChange={changeHandler}
              />
            </fieldset>
            <NavLink to='/signup'> Let's Create Account</NavLink>
            <div className='submitbtndiv'>
              <button className='registerbtn' onClick={formSubmit}>
                Login
              </button>
            </div>
          </form>
          {/* <button onClick={async ()=>{
            const respdata=await fetch('http://localhost:3001/get',{
                  credentials:'include'
            });
            const data=respdata.json();
            console.log(data);
          }}> fetch cookie </button> */}
            </div>
      );

      };

export default Login
