import React from "react";
import { useState } from "react";


const Dataget = () =>
{
  const [fname,setfname] = useState ("");
  const [btn,setbtn] = useState ("");

  const [lname,setlname] = useState ("");
  const [btnn,setbtnn] = useState ("");


  const input = (event) =>
  {
    // console.log(event.target.value)
    setfname(event.target.value)
  }
  const input1 = (event) =>
  {
    // console.log(event.target.value)
    setlname(event.target.value)
  }
  const onSubmit = () =>
  {
    setbtn(fname)
    setbtnn(lname)
  }
    return(
        <div align='center'>
            <h1>HEY, {btn+" "+btnn} </h1>
            <input type="text" name="" onChange={input} placeholder="Enter First Name" />
            <br/><br/>
            <input type="text" name="" onChange={input1} placeholder="Enter Last Name" />
            <br/><br/>
            <input type="submit" onClick={onSubmit}/>

            <hr/>

            <table style={{border:'2px groove black'}}>
              <tr style={{border:'2px groove black'}}>
                <th style={{border:'2px groove black'}}>
                  First Name
                </th>
                <th>
                  Last Name
                </th>
              </tr>
              <tr style={{border:'2px groove black'}}>
                <td style={{border:'2px groove black'}}>
                  <h3 style={{color:'red'}}>{btn}</h3>
                </td>
                <td>
                  <h3 style={{color:'red'}}>{btnn}</h3>
                </td>
              </tr>
            </table>
        </div>
    )
}


export default Dataget;