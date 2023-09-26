import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='about'>
        <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <h1>
          Let's <span>Connect</span> .{" "}
        </h1>
      <p>I'm always open to new opportunities and collaborations. If you have a project in mind or would like to discuss how I can contribute to your team, feel free to contact me!</p>
       <div className="contactCard">
        <h5>Let's stay connected! You can find me on:</h5>
        <ul>
          <li>LinkedIn: Daniel Uzodinma</li>
          <li>Github: DannyUzo</li>
          <li>Email: uzodinmadaniel42@gmail.com</li>
          <li>Phone number: 08079329196</li>
        </ul>
       </div>
      </div>
    </div>
  )
}

export default About