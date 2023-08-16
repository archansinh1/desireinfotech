import React from "react";


//React.js Module
function signup()
{
    return(
        <>
            <h3><u><b>Signup Need's Field</b></u></h3>
            <h4>First Name</h4>
            <h4>Middle Name</h4>
            <h4>Last Name</h4>
            <h4>Phone No</h4>
            <h4>Email</h4>
            <h4>Address</h4>
            <h4>Password</h4>
            <h4>Confirm Password</h4>
        </>
    )
}

function login()
{
    return(
        <>
            <h3><u><b>Login Need's Field</b></u></h3>
            <h4>Phone No / Email</h4>
            <h4>Password</h4>
        </>
    )
}

export default signup;
export{login};