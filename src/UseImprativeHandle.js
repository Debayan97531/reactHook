import React,{ useRef} from 'react';


const UseImperativeHandle = () => {

    const buttonRef= useRef(null);
    
  return (
    <div>
        <button 
            onClick={ () =>{
                    buttonRef.current.alterToggle();
            }}  >
                Button from Parent
        </button>
        <button ref={buttonRef}/>
    </div>
  )
}

export default UseImperativeHandle;
