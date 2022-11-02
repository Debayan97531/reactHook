import React,{useRef} from 'react';

function UseRef() {
    const inputRef = useRef(null);

    const onClick = () => {
        //console.log(inputRef.current.value);
        inputRef.current.value="";
    }

  return (
    <div>
        <h1>Pedro..</h1>
        <input name='text' placeholder='Ex...' ref={inputRef}/>
        <button onClick={onClick}>Change name</button>
    </div>
  )
}
export default UseRef;
