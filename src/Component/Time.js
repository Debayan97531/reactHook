import React from 'react';

let greeting="";
let currDate2 = new Date(2021,5,6,10);
currDate2 = currDate2.getHours();
const cssStyle = {};
if(currDate2>=1 && currDate2<12)
{
  greeting="Good morning...";
  cssStyle.color="green";
}
else if(currDate2>=12 && currDate2<19)
{
  greeting="Good afternoon";
  cssStyle.color="orange";
}
else
{
  greeting="Good night";
  cssStyle.color="black";
}


const Time = () => {
    return (
        <div>
            <h3> hello sir ,<span style={cssStyle}>{greeting}</span></h3>
        </div>
    )
}

export default Time;
