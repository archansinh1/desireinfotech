// PAGE 2
// import { useReducer } from "react";

const red = 5;

const calc = (state = red,action) =>
{
    switch(action.type)
    {
        case "INC" : return state +1;
        case "DIC" : return state -1;
        case "MUL" : return state *2;
        case "DIV" : return state /2;

        default : return state;
    }
}

export default calc;