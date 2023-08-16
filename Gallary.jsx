import React from "react";
import { useNavigate } from "react-router";


const Gallary = () =>
{
    const history = useNavigate(); 

    return(
        <>
         
          <h1>welcome Gallary page</h1>
          <button onClick={ () => history('/')}>back to default page</button>
        
        </>
    )
}

export default Gallary;