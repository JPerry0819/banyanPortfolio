import React from 'react'
import "../../assets/css/about.css"
import Aboutsphere from './Aboutsphere'
import me from "../../assets/images/me3.png"
import OtherNav from '../nav/OtherNav'
const About = () => {
  return (
<div className='aboutContainer'>
    <OtherNav />
<p className='aboutMeBlurb'>I am a highly skilled professional with expertise in both 
frontend and backend web development. My proficiency extends to project management, where I
excel in overseeing and coordinating tasks effectively. As a leader, I bring a collaborative
approach to design, fostering teamwork and innovation. My problem-solving skills are 
complemented by a creative mindset, allowing me to devise inventive solutions. Adaptability 
is a cornerstone of my work ethic, enabling me to thrive in dynamic and evolving environments.

</p>
<Aboutsphere />
<img src={me} alt="" className="me" />
</div>
  )
}

export default About
