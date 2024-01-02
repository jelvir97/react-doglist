import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {v4}  from "uuid"

const DogDetails = ({data})=>{
    const {name} = useParams()
    let dog;
    for(let d of data.dogs){
        if(d.src === name){
            dog = d;
        }
    }
    if(!dog) return <Navigate to="/dogs"/>


    return (
        <div className="DogDetails">
            <h3>Name: {dog.name}</h3>
            <h3>Age: {dog.age}</h3>
            <h3>Facts:</h3>
            <div className="DogDetails">
                {dog.facts.map((f)=> <li key={v4()}>{f}</li>)}
            </div>
            <Link to="/dogs">Go Back</Link>

        </div>
    )
}

export default DogDetails;