import React from 'react'

const About = props => {
    return (
        <div className='about'>
            <h1>About Me</h1>
            <h2>Full Stack Web Developer</h2>
            <p>I am a recent graduate from General Assembly's software engineering bootcamp.  My confidence with CSS and Javascript allow me to create well designed and functioning solutions to problems.  I am able to creatively solve any design problem that is given to me with my proficiency in CSS.   Having a perfectionist mentality inspires me to do great work.  If I can’t get something to work, I use my problem solving skills to find a solution.  I am able to take a set of given criteria and provide a solution that is well thought out and designed.</p>
            <div className='skills'>
                <h1><i class="devicon-html5-plain-wordmark colored"></i></h1>
                <h1><i class="devicon-css3-plain-wordmark colored"></i></h1>
                <h1><i class="devicon-javascript-plain colored"></i></h1>
                <h1><i class="devicon-nodejs-plain colored"></i></h1>
                <h1><i class="devicon-react-original-wordmark colored"></i></h1>
                <h1><i class="devicon-python-plain-wordmark colored"></i></h1>
                <h1><i class="devicon-postgresql-plain-wordmark colored"></i></h1>
                <h1><i class="devicon-mongodb-plain-wordmark colored"></i></h1>
                <h1><i class="devicon-express-original-wordmark colored"></i></h1>
            </div>
        </div>
    )
}

export default About