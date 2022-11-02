//import logo from './logo.svg';
/*import './App.css';
import UseEffect from './UseEffect';
import UseReducer from './UseReducer';
import UseState from './UseState';
import UseState2 from './UseState2';
import UseRef from './UseRef';
import UseLayoutEffect from './UseLayoutEffect';*/
//import Covid from './Component/Covid';
/*import React,{useState} from 'react';
import Amazon from "./Component/Amazon";
import Cart from './Component/Cart';
import Navbar from "./Component/Navbar";*/

import List from "./Component/List";
import Time from "./Component/Time";
import {add,sub,mult,div} from './Component/Calc';


function App() {
  /*const [show,setShow] =useState(true);

  const [cart,setCart] = useState([]);

  const handleClick = (item) =>{
         // console.log(item);
         /*cart.push(item);
         console.log(cart);
         //setCart([...cart,item]);
         if (cart.indexOf(item) !== -1) return;
            setCart([...cart, item]);
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };*/

  return (
   
    <div>
    {/*
    <UseState/>
    <UseState2/>
    <UseReducer/>
    <UseEffect/>
    <UseRef/>
  <UseLayoutEffect/> 

      <Navbar setShow={setShow} size={cart.length}/>
      {
          show ? ( <Amazon handleClick={handleClick}/> ) 
          :(  
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} 
          /> )  
      }   
      <Covid/>*/}
      <List/>
      <Time/>

      <ul>
      <li>sum of two no is {add(40,4)}</li>
      <li>sub if two is {sub(30,3)}</li>
      <li>div of two is {div(10,3)}</li>
      <li>mult of two is {mult(30,1)}</li>
    </ul>
    </div> 

    

  );
}

export default App;
