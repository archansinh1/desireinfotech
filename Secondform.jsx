import React from "react";
import { useState } from "react";

const Secondform = () =>
{
    const [name,setname] = useState({
        fname : "",
        lname : "",
        email : "",
        phone : "",
    });

    const [btn,setbtn] = useState();

    const input = (evt) =>
    {
        const value = evt.target.value;
        const name = evt.target.name;

        setname( (pval) =>
        {
            if(name == "fname")
            {
                return{
                    fname : value,
                    lname : pval.lname,
                    email : pval.email,
                    phone : pval.phone
                }
            }

            if(name == "lname")
            {
                return{
                    fname : pval.fname,
                    lname : value,
                    email : pval.email,
                    phone : pval.phone
                }
            }

            if(name == "email")
            {
                return{
                    fname : pval.fname,
                    lname : pval.lname,
                    email : value,
                    phone : pval.phone
                }
            }

            if(name == "phone")
            {
                return{
                    fname : pval.fname,
                    lname : pval.lname,
                    email : pval.email,
                    phone : value
                }
            }
        })
    }

    const onsubmit = (abc) =>
    {
        abc.preventDefault();
        setbtn(name.fname+""+name.lname+""+name.email+""+name.phone)
    }

    return(
        <>
            <h1>{btn}</h1>

            <form action="" onSubmit={onsubmit}>
                <input type="text" name="fname"  onChange={input} placeholder="First Name"/><br/><br/>
                <input type="text" name="lname"  onChange={input} placeholder="Last Name"/><br/><br/>
                <input type="text" name="email"  onChange={input} placeholder="Email"/><br/><br/>
                <input type="text" name="phone"  onChange={input} placeholder="Phone Number"/><br/><br/>
                {/* <input type="" name="" value="" placeholder="Password"/><br/>
                <input type="" name="" value="" placeholder="Confirm Password"/><br/> */}
                <input type="submit"/>
            </form>
        </>
    )

}

export default Secondform;