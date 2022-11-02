import React,{useState} from 'react'

const UseState2 = () => {
    const [inputValue,setInputValue] = useState("Pedrrk");

    let onChange = (event) => {
        const newValue = event.target.value;
        //inputValue = newValue;
        setInputValue(newValue);
    }

  return (
    <div>
      <input placeholder="enter something...." onChange={onChange}/>
      {inputValue}
    </div>
  )
}

export default UseState2;
