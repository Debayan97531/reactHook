import React,{useLayoutEffect,useEffect, useRef} from 'react'

const UseLayoutEffect = () => {
    const inputRef =useRef(null);

    useLayoutEffect( () =>{
        //console.log("UseLayoutEffect");
        console.log(inputRef.current.value);
    }, []);//before

    useEffect( () =>{
        //console.log("UseEffect");
        inputRef.current.value="Hello";
    }, []);//after

  return (
    <div className='App'>
        <input ref={inputRef} value="Pedro" style={{ width: 400,height:100}}/>
    </div>
  )

}

export default UseLayoutEffect;



