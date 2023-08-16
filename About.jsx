import React from "react";
import { useNavigate } from "react-router";


const About = () =>
{ 
    const history = useNavigate();

    return(
        <>
         
          <h1>welcome about page</h1>
          <button onClick={ () => history('/gallary')}>back to gallary</button>
        
        
        </>
    )
}

export default About;