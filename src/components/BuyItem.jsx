import React,{useContext,useEffect,useState} from 'react'
import {AppContext} from '../context/AppContextProvider'
import { useNavigate,NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import toast from 'react-hot-toast';
const BuyItem = () => {
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
const {alldata,fetchData,particularData,loggedinstatus} = useContext(AppContext);
const navigate=useNavigate();
const {id,title,price,description,category,rating,image}=particularData;
async function fetchInformationAboutUSer(){
      const response=await fetch('https://e-commersebackend12.onrender.com/auth/userinformation',{
            credentials:'include'
      });
      const data=await response.json();
      console.log(data);
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

}

function changeHandler(e) {
      const { name, value, type, checked } = e.target;
      
      setFormData((prev) => {
        if (type === 'checkbox') return { ...prev, [name]: checked };
        return { ...prev, [name]: value };
      });
}

useEffect(()=>{
      fetchInformationAboutUSer();

},[]);

return (
      <div className='BuyItem'>
            <form >
        <div className='message'>message</div>
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
<div className='buyitem_Itemdetails'>
      <div><b>Item details</b></div>
      <div className='price'><b>Price: $</b>{price}</div>
      <div className='size'><b>SIZE</b>: 
            <label for='size'>S</label>
            <input type='radio' name='size' ></input>
            <label for='size'>M</label>
            <input type='radio' name='size' ></input>
            <label for='size'>L</label>
            <input type='radio' name='size' ></input>
            <label for='size'>XL</label>
            <input type='radio' name='size' ></input>
            <label for='size'>XXL</label>
            <input type='radio' name='size' ></input>
      </div>
      <div className='modeofpayment'>
            <div><b>Mode of Payment</b></div>
            <label for='size'>Online-Mode</label>
            <input type='radio' name='paymentmode' ></input>
            <label for='size'>Offline-Mode</label>
            <input type='radio' name='paymentmode' ></input>
            
      </div>
      
</div>


        <div className='submitbtndiv'>
          <button className='registerbtn' onClick={(e)=>{
            e.preventDefault();
            
            toast("let's see more product");
            toast.success("order is placed ");
            navigate('/');
          }}>
            Place An Order
          </button>
        </div>
      </form>
      </div>
)
}

export default BuyItem
