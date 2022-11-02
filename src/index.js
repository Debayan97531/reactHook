
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import reportWebVitals from './reportWebVitals';
const fname="vinod thapa";
const lname="thapa";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/300/300";
const img3="https://picsum.photos/400/300";
const links="https://www.youtube.com";

const heading2 ={
  color:"#333",
  textTransform:"capitalize",//kebab case
  textAlign:"center"
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    
    <App/>


    <h3>{fname} {lname}</h3> {/*{} -> only for expression*/}
    <h4 contentEditable="true">{fname + " " + lname}</h4>

    <h4> My name is {`${fname} ${lname}`}</h4>
    <h5 contentEditable="true">{lname}</h5>
    <h2 style={heading2}>Current date is ={currDate}</h2>
    <h2>Current time is ={currTime}</h2>
    <div className='img-div'>
      <img src={img1} alt='randomImages'/>
      <img src={img2} alt='randomImages'/>
      <a href={links} target='_blank'>
        <img src={img3} alt='randomImages'/>
      </a>
    </div>

   

    

  </React.Fragment>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
