import React, { useReducer } from "react";

const data = 5;

const reducer = (state,action) =>
{
    if(action.type == "Inc")
    {
        return state + 1;
    }
    if(action.type == "Dic")
    {
        return state - 1;
    }
}

const Redu = () =>

{
    const [state,dispatch] = useReducer(reducer,data);

    return(
        <>
        <h1>Hello Reducer User.,{state}</h1>

        <button onClick={ () => dispatch({type:'Inc'})}>Increment</button>
        <button onClick={ () => dispatch({type:'Dic'})}>Dicrement</button>

        </>
    )
}


export default Redu;