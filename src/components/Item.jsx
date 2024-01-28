import React,{useContext} from 'react'
import {AppContext} from '../context/AppContextProvider'
import { useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
const Item = () => {
      const {alldata,fetchData,particularData,loggedinstatus} = useContext(AppContext);
      console.log("data in item.jsx",particularData);
      const navigate=useNavigate();
      const {id,title,price,description,category,rating,image}=particularData;
async function buyHandler(){
      // const response=await fetch('http://localhost:3001/auth/buy');
      // const data=await response.json();
if(loggedinstatus){
navigate('/buypage');
}
else {
navigate('/login');
}
}
  return (
    <div className='Item'>
      
    <div className='Itemdeccription'>
      
      <br></br>
      <div className='Itemdetails'>
      <button className='backbtn' onClick={()=>{
            fetchData(false);
            navigate(-1)
      }}> Back</button>
      <div className='itemtitle'>{title}</div>
      <div className='price'>Price: $ {price}</div>
      <div className='decription'>{description}</div>
            
      </div>
      <div className='Itemimage'>
            <img src={image} className='itemimage'></img>
      </div>
      
</div>
<div className='buyitem'>
<button onClick={buyHandler}><FaShoppingBag></FaShoppingBag>
      Buy </button>
</div>
    </div>
  )
}

export default Item
