import React from 'react'
import Header from '../components/Header';
import {Link } from "react-router-dom"

function Error() {
  return (
    <div>
        <Header title={"Sorry! The page you are looking for does not exist 🙁 "}/> 
        <div>
        <Link to="/"><button>GO TO HOMEPAGE</button></Link>   
        </div>
    </div>
  )
}

export default Error;