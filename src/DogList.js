import React from "react";
import {Link} from "react-router-dom"
import {v4}  from "uuid"

const DogList = ({data})=>{
    const dogs = data.dogs
    return (
        <div className="DogList">
            <h2>Pick a dog! Any dog!</h2>
            <div className="DogList-Container">
                {dogs.map( (dog)=> {
                    return <li key={v4()}><Link to={"/dogs/"+dog.src}> {dog.name} </Link></li>
                }
                )}
            </div>
        </div>

    )
}

export default DogList;