import React from "react";
import { useState } from "react";

//useState
const Chill = () =>
{
  const [name,setname] = useState ('Arjun');

  const demo = () =>
  {
    setname('Archansinh')
  }

    return(
        <>
            <h3>Show Name : {name}</h3>
            <button onClick={demo}>ClickHere</button>
        </>
  )
}

//Task
const Inc = () =>
{
  const [num,setnum] = useState (0);

  const add = () =>
  {
    setnum(num + 2)
  }

    return(
        <>
            <h3>Show Name : {num}</h3>
            <button onClick={add}>ClickHere</button>
        </>
  )
}

//Task 2
const Watch = () =>
{
  const [num,setnum] = useState (new Date().toLocaleDateString());

  const add = () =>
  {
    setnum(new Date().toLocaleDateString())
  }

    return(
        <>
            <h3>Show Name : {num}</h3>
            {/* <button onClick={add}>ClickHere</button> */}
        </>
  )
}

//SetInterval (Mini Project)
const Mini = () =>
{
  const [unset,set] = useState(new Date().toLocaleTimeString());

  const csk = () =>
  {
    set(new Date().toLocaleTimeString())
  }

  setInterval(csk,1000)

    return(
        <>
            <h3>Show Time : {unset}</h3>
        </>
  )
}

export default Chill;
export {Inc,Watch,Mini};