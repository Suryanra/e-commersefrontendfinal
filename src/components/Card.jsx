import React, { useEffect, useState,useContext } from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaCartShopping } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { useNavigate } from "react-router-dom";
import {AppContext} from '../context/AppContextProvider'
// import {  toast } from 'react-toastify';
import CartItem from './CartItem';
import toast from 'react-hot-toast';

const Card = (props) => {
let {setItemAdded,noitemadded,fetchData,setCartItem,cartItem}=useContext(AppContext);
const [cartbtnmessage,setCartMessage]=useState('Add To Cart')
const [info,setInfo]=useState('...');
const [amtpfdataless,setAmountofdata]=useState(true);
const [cartAdded,setCartadded]=useState(false)
const datafrom=props.datafrom; 
useEffect(() => {
      
      setCartMessage(datafrom === 'cartItem' ? 'Remove From Cart' : 'Add To Cart');
    }, [datafrom]);


const navigate = useNavigate();
function likeHandler(e){
      e.stopPropagation();
      setLikestate(!likestate);
}
function searchParticularHandle(){
      console.log("called");
      fetchData(id);
      navigate('/item');

}
function cartHandle(e){
      e.stopPropagation();
      if(datafrom=='cartItem') {
            setCartItem(cartItem.filter((a)=>a.id!==props.data.id));
            setItemAdded(noitemadded-1);
            return;} 
      setItemAdded(noitemadded+1);
{!cartAdded ? setItemAdded(noitemadded+1):setItemAdded(noitemadded-1);}
{!cartAdded ? toast.success("Item Added To Your Card ❤"):toast(" ❌ Item removed from Your Cart")}
{!cartAdded ? setCartMessage("Item Is In Your Card"):setCartMessage("Add To Cart")}
{!cartAdded ? setCartItem([props.data,...cartItem]):setCartItem(cartItem.filter((a)=>a.id!==props.data.id))};
      
// console.log("cart item collection ",cartItem);
      setCartadded(!cartAdded);
}

// useEffect(()=>{
//       console.log( "Cart item collection",cartItem);
// },[cartItem])
      const [likestate,setLikestate]=useState(false)
      
      // console.log("in card",props.data);
      const {id,title,price,description,category,rating,image}=props.data;


      // amtpfdataless?setInfo(description.substring(0,100)):setInfo(description.substring(0,100));


  return (
    <div className='Card'  onClick={searchParticularHandle}>
      <div className='title'>{title}{id}</div>
      <div className='image'>
            <img className="imagetag" src={image}></img>
            <div className='likecontainer' onClick={likeHandler}>
                  {!likestate? <FcLikePlaceholder></FcLikePlaceholder>:<FcLike className='likedanimation'></FcLike>}
            </div>
            <div className='cartcontainer' onClick={cartHandle}>
            {!cartAdded? <FaCartPlus></FaCartPlus>: <FaCartShopping></FaCartShopping>}
                  
            </div>

      </div>
      <div className='price'>
            <div className='pricediv'>Price: ${price}</div>
            <div className='ratingdiv'>{rating.rate}</div>
      </div>
      
      <div className='decription'>
            {description.substring(0,100)}....
      </div>
      
      <div className='enddiv'>
      <div className='category'>#{category}</div>
      <ReactStars
            classNames="stars"
            count={5}
            size={24}
            value={rating.rate}
            activeColor="#ffd700"/>
      </div>

      <div className='addtocartdivbtn'>
      <button className='addtocart' onClick={cartHandle}>{cartbtnmessage}</button>
      </div>

     
    </div>
  )
}

export default Card
