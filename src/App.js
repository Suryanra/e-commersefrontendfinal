import logo from './logo.svg';
import './App.css';
import {useContext, useEffect} from 'react'
import {AppContext} from './context/AppContextProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router'
import HomePage from './components/HomePage'
import Home from './pages/Home'
import Item from './components/Item'
import Category from './components/Category'
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import BuyItem from './components/BuyItem'
import Myaccount from './components/Myaccount'
import CartItem from './components/CartItem'

function App() {
const {alldata,setData,fetchData}=useContext(AppContext);

useEffect(()=>{
  fetchData();
},[]);
console.log(alldata);
return (
  <div className="App">
    
<Header></Header>
{/* <Content></Content> */}




<Routes>
        <Route path="/" element={<HomePage></HomePage>}>
          <Route index element={<Home></Home>} />
          <Route path="/item" element={<Item></Item>} />
          <Route path="/myaccount" element={<Myaccount></Myaccount>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/buypage" element={<BuyItem></BuyItem>} />
          <Route path="/cartitem" element={<CartItem></CartItem>} />
          <Route path="*" element={<div>no page</div>} />
        </Route>
</Routes>

<Footer></Footer>
  </div>
);
}

export default App;
