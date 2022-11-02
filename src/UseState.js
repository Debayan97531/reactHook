import React,{useState} from 'react';

 const UseState = () => {
    //let counter = 0;
    const [counter,setCounter] = useState(10);
    
   /* const increment = () => {
        //counter=counter+1;
        //console.log(counter);
        setCounter(counter+2);
    }*/
  return (
    <div>
        <p>count value:{counter}</p>
        <button onClick={ () =>{
          setCounter(counter+4)
        }}>click me</button>
    </div>
  )
}

/*const UseState = () =>{
  const [count,setCount] =useState(10);

  return(
    <div>
    <p>You clicked button for {count} times..</p>
      <button onClick={ () =>{
          setCount(count+1)
      }}>
      Click me
      </button>
    </div>
    );
}*/


export default UseState;