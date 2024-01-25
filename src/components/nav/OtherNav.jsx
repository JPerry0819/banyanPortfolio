import React from 'react'
import '../../assets/css/nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as solidEnvelope } from '@fortawesome/free-solid-svg-icons';


const OtherNav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/" className="home"> <svg class="home-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2L0 9l1 1 1 1v9a3 3 0 0 0 3 3h5v-8h4v8h5a3 3 0 0 0 3-3v-9l1-1 1-1-12-7zm2 15h-4v-6h4v6z" />
                        </svg>Home</a>
                    </li>
                    <li>
                        <a href="/about" className="about">   <svg class="question-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13h2v6h-2zm0 8h2v2h-2z" />
                        </svg>About</a>
                    </li>

                    <li>
                        <a href="/projects" className="projects">  <svg class="hammer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2l-2 5h4l-2-5zm0 15h2v2h-2zm0-5h2v4h-2zm0-8h2v4h-2z" />
                        </svg>Projects</a>
                    </li>

                    <li>
                        <a href="/skills" className="skills"> <svg class="brain-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-8h3v-1h-3zm-2 0h1.5V7h-3v2.5H7v1h2.5zm0 3.5H9v-1.5H7v3h2.5V15zm1 0v-2h3v-1.5H10V12H7v3.5h2.5zm6-4.5v1.5h2.5V15H17v-1.5H15v-1h3V12h-3v-1.5h3z" />
                        </svg>Skills</a>
                    </li>
                    <li>
                        <a href="/contact" className="contact">    <svg class="envelope-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM3 5h9l-4.5 4.5L3 5zm0 6.5L8.5 11H3v.5zm0 7h18V8l-7.5 7.5-2.5-2.5L3 20z" />
                        </svg>Contact</a>
                    </li>

                </ul>
            </nav>

<nav className="rightSide">
     {/* GitHub */}
     <a href="https://github.com/JPerry0819" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      {/* LinkedIn */}
      <a href="www.linkedin.com/in/jessica-bruner-39a27529a" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      {/* Stack Overflow */}
      <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>

      {/* Envelope (Email) */}
      <a href="mailto:jessicaperry0819@gmail.com">
        <FontAwesomeIcon icon={solidEnvelope} />
      </a>
</nav>



        </div>
    )
}

export default OtherNav
