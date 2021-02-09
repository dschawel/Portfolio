import React from 'react'
import { Card, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';


const Projects = (props) => {
    return (
        // Projects page
        <div className='projects'>
            <h1>Projects</h1>
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle><h2><strong>University Beyond Bars</strong></h2></CardTitle>
                        <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/s3UicNU.png" alt="University Beyond Bars" />
                        <CardText className="card-text">I worked on a fully remote five person team that collaboratively worked together to create a content management system for a local non-profit that tracks student data and financial aid processes for incarcerated individuals looking to receive a college-level education.  This is a MERN stack application that utilizes GraphQL and is deployed to AWS using Amplify and Cognito.</CardText>
                        <Button a href="https://github.com/dschawel/aws-practice-5" target="_blank">GitHub Link For University Beyond Bars</Button>
                        <br />
                        <Button a href="https://master.dyw4qtw2tl3sy.amplifyapp.com/#/" className="live-link" target="_blank">Live Link</Button>
                    </Card>
                </Col>
                <br />
                <Col sm="6">
                    <Card body>
                        <CardTitle><h2><strong>We-Watch</strong></h2></CardTitle>
                        <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/8P8Nmjf.png" alt="We-Watch" />
                        <CardText className="card-text">This app allows the user to add shows to their queue and then search for and add their friends so they can view their queue.  It was built using MongoDB, Express, React and Node.  Sign-in/sign-up functionality that incorporates BCrypt to hash passwords.  Built for desktop.</CardText>
                        <Button a href="https://github.com/dschawel/we-watch-client" target="_blank">GitHub Link For We-Watch</Button>
                        <br />
                        <Button a href="https://we-watch2.herokuapp.com/" className="live-link" target="_blank">Live Link</Button>
                    </Card>
                </Col>
                <br />
                <Row />
                <br />
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle><h2><strong>Meat-Up</strong></h2></CardTitle>
                            <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/NODQN8E.jpg" alt="Meat-Up" />
                            <CardText className="card-text">Worked collaboratively as part of a team of three developers and a UX designer for the General Assembly hackathon to create a meet-up app centered around exotic meats.  Built with React.</CardText>
                            <Button a href="https://github.com/dschawel/meat-up" target="_blank">GitHub Link For Meat-Up</Button>
                            <br />
                            <Button a href="https://meat-up.netlify.com/" className="live-link" target="_blank">Live Link</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle><h2><strong>PetRex</strong></h2></CardTitle>
                            <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/P8meqRv.png" alt="PetRex" />
                            <CardText className="card-text">PetRex is an app designed so pet owners can store their pets health records digitally.  It was built using MongoDB, Express, React and Node.  Incorporates JWT tokens to protect routes.</CardText>
                            <Button a href="https://github.com/dschawel/vet-app-client" target="_blank">GitHub Link For PetRex</Button>
                            <br />
                            <Button a href="https://petrex1.herokuapp.com/" className="live-link" target="_blank">Live Link</Button>
                        </Card>
                    </Col>
                    <br />
                </Row>
                <br />
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle><h2><strong>Digital Scrabook</strong></h2></CardTitle>
                            <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/n1rGVdY.png" alt="Digital Scrapbook" />
                            <CardText className="card-text">Store all of your memories along with pictures and where they happened with the Digital Scrapbook app.  Digital Scrapbook implemented PostgreSQL, Express and Node.  Developed sign-in/sign-up functionality with hashed passwords.</CardText>
                            <Button a href="https://github.com/dschawel/Digital-Scrapbook" target="_blank">GitHub Link For Digital Scrapbook</Button>
                            <br />
                            <Button a href="https://digital-scrapbook.herokuapp.com/" className="live-link" target="_blank">Live Link</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle><h2><strong>Mastermind</strong></h2></CardTitle>
                            <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/92WymWW.png?1" alt="Card image cap" />
                            <CardText className="card-text">Mastermind is a classic boardgame where one player sets a code and the other player tries to guess that code. Mastermind was built with HTML5, CSS3 & Javascript.</CardText>
                            <Button a href="https://github.com/dschawel/Mastermind" target="_blank">GitHub Link For Mastermind</Button>
                            <br />
                            <Button a href="https://dschawel.github.io/Mastermind/" className="live-link" target="_blank">Live Link</Button>
                        </Card>
                    </Col>
                    <br />
                </Row>
                <br />
            </Row>
        </div>
    )
}

export default Projects