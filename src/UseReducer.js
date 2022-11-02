import React,{useReducer} from 'react'

const reducer = (state,action) =>{
    switch(action.type) {
        case "INCREMENT":
            return { count: state.count+1,
                     showText:state.showText
                    }
        case "toggle":
            return{
                    count: state.count,
                    showText: !state.showText
                  }
        default :
            return   state;
    }
}


const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer,
         {count:0, showText:true})

  return (
    <div>
      <h2>{state.count}</h2>
      <button 
      onClick={ () =>{
       /* setCount(count+1);
        setShowText(!showText);*/
        dispatch({ type:"INCREMENT"});
        dispatch({ type: "toggle"});
      }}>
        Click here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  )
}

export default UseReducer
