import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

const Contact = props => {
    return (
        // Contact page
        <div className="contact">
            <h1>Feel free to contact me!</h1>
            <div className="icons">
                <a href="https://www.linkedin.com/in/davidschawel/">
                    <FontAwesomeIcon className='font-awesome' icon={faLinkedin} size = '3x'/>
                    <p>LinkedIn</p>
                </a>
            </div>
            <div className="icons">
                <a href="https://github.com/dschawel">
                    <FontAwesomeIcon className='font-awesome' icon={faGithub} size = '3x'/>
                    <p>GitHub</p>
                </a>
            </div>
            <div className="icons">
                <a href="mailto:david.schawel@gmail.com">
                    <FontAwesomeIcon className='font-awesome' icon={faEnvelope} size = '3x'/>
                    <p>Email</p>
                </a>
            </div>
            <div className="icons">
                <a href="/David_Schawel_Resume.pdf" target="_blank">
                    <FontAwesomeIcon className='font-awesome' icon={faFile} size = '3x'/>
                    <p>Resume</p>
                </a>
            </div>
        </div>
    )
}

export default Contact