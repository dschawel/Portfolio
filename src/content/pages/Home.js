import React from 'react'

const Home = props => {
    return (
        <div className='about'>
            <h1>David Schawel</h1>
            <h3>Full Stack Web Developer</h3>
            <img alt="pic" src="https://i.imgur.com/GYya0LJ.jpg" class="img-thumbnail"></img>
            <hr />
            <p>I am a recent graduate from General Assembly's software engineering bootcamp.  My confidence with CSS and Javascript allow me to create well designed and functioning solutions to problems.  I am able to creatively solve any design problem that is given to me with my proficiency in CSS.   Having a perfectionist mentality inspires me to do great work.  If I can’t get something to work, I use my problem solving skills to find a solution.  I am able to take a set of given criteria and provide a solution that is well thought out and designed.</p>
            <hr />
            <div className='skills-container'>
                <div><i className="devicon-html5-plain-wordmark colored"></i></div>
                <div><i className="devicon-css3-plain-wordmark colored"></i></div>
                <div><i className="devicon-javascript-plain colored"></i></div>
                <div><i className="devicon-nodejs-plain colored"></i></div>
                <div><i className="devicon-react-original-wordmark colored"></i></div>
                <div><i className="devicon-python-plain-wordmark colored"></i></div>
                <div><i className="devicon-postgresql-plain-wordmark colored"></i></div>
                <div><i className="devicon-mongodb-plain-wordmark colored"></i></div>
                <div><i className="devicon-express-original colored"></i></div>
                <div><i className="devicon-sequelize-plain colored"></i></div>
                <div><i className="devicon-sass-original colored"></i></div>
                <div><i className="devicon-bootstrap-plain-wordmark colored"></i></div>
            </div>
        </div>
    )
}

export default Home