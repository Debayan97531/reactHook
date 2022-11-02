import React,{useEffect,useState} from 'react';
import axios from 'axios';

function UseEffect() {
    const [data, setData] =useState("");
    const [count, setCount] = useState(20);

    useEffect( () => {
        //console.log("hello world");
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then( (response) =>{
                //console.log(response.data);
                setData(response.data[0].email);
                //setData(response.data);
                console.log("API was called");//called twice:page render and api call
            });
    }, [count] );
    return (
        <div>
            Hello world. 
            <h2>{data}</h2>
            <h3>{count}</h3>
            <button onClick={ () =>{
                    setCount(count+3)
            }}
            >
                Click me
            </button>
        </div>
  )
  
  /*const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    console.log(`you clicked it for ${count} times...`)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );*/

}
export default UseEffect;
