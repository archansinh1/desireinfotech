// PAGE 5
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { inc,dic,mul,div } from "./action/index";


const Design = () =>
{
    const myState = useSelector((state) => state.calc);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>CALC : {myState}</h1>

            <button onClick={ () => dispatch(inc())}>INC</button>
            <button onClick={ () => dispatch(dic())}>DIC</button>
            <button onClick={ () => dispatch(mul())}>MUL</button>
            <button onClick={ () => dispatch(div())}>DIV</button>
        </div>
    )
}

export default Design;