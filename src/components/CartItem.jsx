import React,{useEffect,useContext} from 'react'
import Card from '../components/Card'
import {AppContext} from '../context/AppContextProvider'

const CartItem = () => {
      let {setItemAdded,noitemadded,fetchData,cartItem}=useContext(AppContext);
  return (
    <div className='CartItem'>
      {!noitemadded &&
      <div><b>No Item Added In Cart </b></div>
      }
      {noitemadded &&
      cartItem.map((data)=>{
            return <Card key={data.id} data={data} datafrom='cartItem'> </Card>
           })
      }
    </div>
  )
}

export default CartItem
