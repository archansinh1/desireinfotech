import React from "react";

//Props With Array Function
const Movie = (props) =>
{
    return (
        <>
        <img src={props.img} alt="" height='300'/>
            <h1>{props.name}</h1>
            <p>{props.p}</p>
            <button><a href={props.link}>Click Here</a></button>
            <br></br>
        </>
    )
}

export default Movie;