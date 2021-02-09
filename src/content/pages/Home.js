import React from 'react'

const Home = props => {
    return (
        // Home page
        <div className='about'>
            <h1>David Schawel</h1>
            <h3>Full Stack Software Engineer</h3>
            <div className="bio">
                <img alt="me" src="https://i.imgur.com/GYya0LJ.jpg" style={{ borderRadius: "40%" }} class="img-thumbnail"></img>
                <p>I’m a creative-minded and solution driven full stack software engineer who has a passion for building well
                designed and intuitive programs.  My confidence with JavaScript frameworks, such as React, paired with
                CSS and SASS allow me to create well designed and functioning solutions to problems. </p>
            </div>
            <hr />
            <div className='skills-container'>
                <div className="skill"><i className="devicon-html5-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-css3-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-javascript-plain colored"></i></div>
                <div className="skill"><i className="devicon-nodejs-plain colored"></i></div>
                <div className="skill"><i className="devicon-react-original-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-python-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-postgresql-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-mongodb-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-express-original colored"></i></div>
                <div className="skill"><i className="devicon-sequelize-plain colored"></i></div>
                <div className="skill"><i className="devicon-sass-original colored"></i></div>
                <div className="skill"><i className="devicon-bootstrap-plain-wordmark colored"></i></div>
            </div>
        </div>
    )
}

export default Home