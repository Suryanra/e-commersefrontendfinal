import React,{useContext,useEffect,useState} from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import {AppContext} from '../context/AppContextProvider'
import { NavLink } from "react-router-dom";


const Header = () => {

  const {noitemadded,username,setUsername,setLoginstatus,loggedinstatus}=useContext(AppContext);
  console.log("login status ",loggedinstatus);


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


async function fetchInformationAboutUSer() {
  try {
    const response = await fetch('https://e-commersebackend12.onrender.com/auth/userinformation', {
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // else{
    //   setLoginstatus(true);
    // }
    const data = await response.json();
    console.log("backend msg ",data.message);
    if(data.message !== 'false'){
      console.log("im runned 1221")
      setLoginstatus(true);
    }
    else{
      console.log("im runned 2112")
    }
    setFormData(prevFormData => ({
      ...prevFormData,
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: data.emailAddress,
      termconditions: data.termconditions,
      country: data.country,
      streetAddress: data.streetAddress,
      pincode: data.pincode
    }));
setUsername(data.firstName);
  } 
  catch (error) {
    console.error('Error fetching user information:', error);
  }
}


useEffect(()=>{
  fetchInformationAboutUSer();
},[])



  return (
      <div className='Header'>

<div className='firstdiv'>
      <div className='profile'>
          <div className='profileimage'><img src='./image/user.jpeg'></img></div>
          <div className='profilename'>{username}</div>
      </div>
      <div className='headername'><b>E-Commerce</b></div>
</div>

            
<div className='firstdiv'>
            <NavLink to='/'><div className='headername'>Home <div></div> </div></NavLink>
            <NavLink to='/buypage'><div className='headername'>Shop <div></div> </div></NavLink>
            <NavLink to='/myaccount'><div className='headername'>
              {
                !loggedinstatus ? "Login" :  "My Account"
              }
              
              
              <div></div> </div></NavLink>
            {/* <NavLink to='/cartitem'><div className='headername'>About <div></div> </div></NavLink> */}
<NavLink to='/cartitem'>
<div className='cart'>
            <FaCartArrowDown className='cart-icon'></FaCartArrowDown>
            <div className='cart-selected'>{noitemadded}</div>
</div>
</NavLink>



</div>
    </div>
  )
}

export default Header
