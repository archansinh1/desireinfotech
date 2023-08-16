import React from "react";
import { useState } from "react";

const Thirdform = () =>
{
    const [name,setname] = useState({
        fname : "",
        lname : "",
    });

    const [btn,setbtn] = useState();

    
    const input = (evt) =>
    {
        const value = evt.target.value;
        const name = evt.target.name;

        setname( (pval) =>
        {
            return{
                ...pval,
                [name]:value,
            }
        })

    }

    const onsubmit = (abc) =>
    {
        abc.preventDefault();
        setbtn(name.fname+""+name.lname)
    }

    return(
        <>
            <h1>{btn}</h1>

            <form action="" onSubmit={onsubmit}>
                <input type="text" name="fname"  onChange={input} placeholder="First Name"/><br/><br/>
                <input type="text" name="lname"  onChange={input} placeholder="Last Name"/><br/><br/>
                
                <input type="submit"/>
            </form>
        </>
    )

}

export default Thirdform;