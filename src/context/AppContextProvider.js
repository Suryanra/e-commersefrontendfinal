import React ,{useState,createContext}from 'react'
export const AppContext=createContext();



const AppContextProvider = ({children}) => {
const [alldata,setData]=useState([]);
const [particularData,setParticularData]=useState([]);
const [categoryData,setCategoryData]=useState([]);
const [noitemadded,setItemAdded]=useState(0);
const [username,setUsername]=useState("Login");
const [loggedinstatus,setLoginstatus]=useState(false);
const [cartItem,setCartItem]=useState([]);
const [loading,setLoading]=useState(false);

let base_url='https://fakestoreapi.com/products';





async function fetchData(id,category){
  setLoading(true)
  console.log("me called with id",id);
  console.log("me called with category",category);
  if(id)
  base_url+=`/${id}`;
if(category)
base_url+=`/category/${category}`

const resp=await fetch(base_url);
const allcollection =await resp.json();
if(id){setParticularData(allcollection);}
else if(category) {setCategoryData(allcollection)}
 else {setData(allcollection);
}
setLoading(false)
}

const value={alldata,
setData,
setItemAdded,
noitemadded,
fetchData,
particularData,
setCategoryData,
categoryData,
username,
setUsername,
loggedinstatus,
setLoginstatus,
cartItem,
setCartItem,
loading

}
  return (<AppContext.Provider value={value} >
      {children}
  </AppContext.Provider>
  )
}

export default AppContextProvider
