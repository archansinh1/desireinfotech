import React, { useEffect, useState } from "react";

//API : Application Programming Interface
const Api = () =>
{
    const [data,setdata] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users').then( (res)=>{
            res.json().then( (Result)=>{
                setdata(Result)
            })
        })      
    })
    
    return(
        <>
        <h1>Hello API</h1>
        <table border='5'>
            <tr>
                <th>NAME</th>
                <th>username</th>
                <th>Email</th>
            </tr>
            {
                data.map( (item) =>
                {
                    return(
                    <>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr>
                    </>
                    )
                })
            }
        </table>
        </>
    )
}

export default Api;