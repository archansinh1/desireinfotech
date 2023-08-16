import { useEffect, useState } from "react";

const Hook = () =>
{
    const [num,setnum] = useState(0)
    const [num2,setnum2] = useState(2)


    useEffect( () =>{
        
    },[num])


    return(
        <>    
            <h1>hello {num}  {num2 }</h1>
            <button onClick={ () => setnum(num+1)}>click me</button> &nbsp;&nbsp; 
            <button onClick={ () => setnum2(num2+2)}>click me</button>  
        </>
    )
} 


const Tendate = () =>
{
  const [count,setcount] = useState(new Date().toLocaleTimeString());
  const [num,setnum] = useState(1)

  useEffect( () =>{
    const csk = () =>
    {
        setcount(new Date().toLocaleTimeString())
        setnum(num+1)

    }
    setInterval(csk,1000)
    })

    return(
        <>
            <h3>Show Time : {count}</h3>
            <h3>Count : {num}</h3>

        </>
    
  )
}


const Baroda = () =>
{
  const [up,setup] = useState(1);
  const [mul,setmul] = useState(up)

  const mi = () =>
    {
        setup(up+1)
    }

    useEffect( () =>{
    
        setmul(up*2)
    },[up])

    return(
        <>
            <h3>Increment : {up}</h3>
            <h3>Multi : {mul}</h3>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={mi}>+</button>
        </>
    
  )
}

export default Hook;
export {Tendate,Baroda};