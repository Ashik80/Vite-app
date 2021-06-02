import React from "react"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div>
           This is the about page
           <br />
           <br />
           <Link to="/">Go back to home</Link> 
        </div>
    )
}

export default About
