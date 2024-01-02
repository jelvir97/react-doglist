import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({dogs})=>{
    return (
        <nav>
            {dogs.map((dog)=> <NavLink to={"/dogs/"+dog.src}>{dog.name}</NavLink>)}
        </nav>
    )
}

export default Nav;