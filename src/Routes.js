import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

const DogRoutes = ({data})=>{
    return (
        <Routes>
            <Route path="/dogs/:name" element={<DogDetails data={data}/>} />
            <Route exact path="/dogs" element={<DogList data={data}/>}/>           
            <Route path="*" element={<Navigate to="/dogs"/>} />
        </Routes>
    )
}

export default DogRoutes;