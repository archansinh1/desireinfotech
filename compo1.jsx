import React from "react";


//Fat Arrow Function
const FAF = ()=> <>
<h4 style={{color:'blue'}}>Fat Arrow Fuction working mode..!!</h4>
</>


//Spread Operator
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = () => [...numbersOne, ...numbersTwo];

//Array Method (.map)
const myfn = () => {
    const ary = ['A','R','C','H','A','N','_',1,7,1,1]

    const res = ary.map((item) => <>{item}</>)
    
    return(
        <>
            <h1>Name : {res}</h1>
        </>
    )
}


//Props Method
const Pms = (props) =>
{    
    let a = props.a;
    let b = props.b;
    let c = props.c;
    if(a==b && b==c)
    {
        return <h3>Three value are same..!!</h3>
    }
    else
    {
        return <h3>Values are not same..!!</h3>
    }
}


//Props With Fat Arrow Function
const Series = (props) =>
{
    return (
        <>
        <img src="https://images.justwatch.com/poster/153922176/s718/season-1.%7Bformat%7D" alt="" height='300'/>
            <h1>College Romance</h1>
            <p>College Romance is all about #YaarPyaarAurBakloli.</p>
            <button><a href="https://tvfplay.com/show/college-romance/324">Click Here</a></button>
        </>
    )
}



export default FAF;
export {numbersCombined,myfn,Pms,Series};