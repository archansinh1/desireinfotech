import React, { Component, useReducer } from "react";

class ReduCls extends Component
{
    constructor()
    {
        super();
        this.a = 10;
        this.b = 6;

        this.c = this.a + this.b;

    }


render()
{
    return(
        <>
            <h1>Answer : {this.c}</h1>

        </>
    )
}
}

export default ReduCls;