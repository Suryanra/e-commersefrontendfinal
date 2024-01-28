import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const [message,setMessage]=useState("Create Account")
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    termconditions: false,
    country: 'India',
    streetAddress: '',
    pincode: '',
    password:''
  });

  function changeHandler(e) {
    const { name, value, type, checked } = e.target;
    
    setFormData((prev) => {
      if (type === 'checkbox') return { ...prev, [name]: checked };
      return { ...prev, [name]: value };
    });
  }

  async function formSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch('https://e-commersebackend12.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      // Handle the response as needed
      const {message:messageFromBackend}=data
      console.log('Server Response:', messageFromBackend);
      setMessage(messageFromBackend)
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className='SignUp'>
      <form method='POST'>
        <div className='message'>{message}</div>
        <fieldset className='startingdata'>
          <label htmlFor='firstName'>First Name: </label>
          <br />
          <input
            name='firstName'
            type='text'
            value={formData.firstName}
            onChange={changeHandler}
          />
          <br />
          <label htmlFor='lastName'>Last Name</label>
          <br />
          <input
            name='lastName'
            type='text'
            value={formData.lastName}
            onChange={changeHandler}
          />
          <br />
          <label htmlFor='emailAddress'>Email Address</label>
          <br />
          <input
            name='emailAddress'
            type='text'
            value={formData.emailAddress}
            onChange={changeHandler}
          />
          <br />
          <label htmlFor='password'>Create Password</label>
          <br />
          <input
            name='password'
            type='password'
            value={formData.password}
            onChange={changeHandler}
          />
          <br />
          <label htmlFor='streetAddress'>Street Address</label>
          <br />
          <input
            name='streetAddress'
            type='text'
            value={formData.streetAddress}
            onChange={changeHandler}
          />
          <br />
          <label htmlFor='pincode'>Pincode</label>
          <br />
          <input
            name='pincode'
            type='text'
            value={formData.pincode}
            onChange={changeHandler}
          />
          <br />
        </fieldset>

        <select
          className='option'
          name='country'
          value={formData.country}
          onChange={changeHandler}
        >
          <option value='India'>India</option>
          <option value='Pakistan'>Pakistan</option>
          <option value='Israle'>Israle</option>
        </select>

        <br />
        <br />

        <input
          className='termcond termconditions'
          type='checkbox'
          name='termconditions'
          checked={formData.termconditions}
          onChange={changeHandler}
        />
        <label htmlFor='termconditions'>Accept terms and conditions</label>
        <br />
        <NavLink to='/login'> already have Account</NavLink>

        <div className='submitbtndiv'>
          <button className='registerbtn' onClick={formSubmit}>
            Register
          </button>
        </div>
      </form>
{/* <button onClick={async ()=>{
        const res=await fetch('http://localhost:3001',{
          credentials:'include'
        });
        const data=await res.json();
        console.log(data);
      }}>See Cookies</button> */}
    </div>
  );
};

export default SignUp;
