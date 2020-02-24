import React from 'react'
import { Card, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';


const Projects = (props) => {
    return (
    <div className='projects'>
        <h1>Projects</h1>
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle><strong>Mastermind</strong></CardTitle>
                    <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/92WymWW.png?1" alt="Card image cap" />
                    <CardText>Recreated the classic boardgame Mastermind using HTML5, CSS & Javascript.</CardText>
                    <Button a href="https://github.com/dschawel/Mastermind">Visit Mastermind</Button>
                    <br />
                    <Button a href="https://dschawel.github.io/Mastermind/">Live Link</Button>
                </Card>
            </Col>
            <br />
            <Col sm="6">
                <Card body>
                    <CardTitle><strong>Digital Scrabook</strong></CardTitle>
                    <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/FJx9E5y.png" alt="Card image cap" />
                    <CardText>Created a digital scrapbook using Node, Express Javascript, PostgreSQL and Sequelize.</CardText>
                    <Button a href="https://github.com/dschawel/Digital-Scrapbook">Visit Digital Scrapbook</Button>
                    <br />
                    <Button a href="https://digital-scrapbook.herokuapp.com/">Live Link</Button>
                </Card>
            </Col>
            <br />
        </Row>
            <br />
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle><strong>PetRex</strong></CardTitle>
                    <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/P8meqRv.png" alt="Card image cap" />
                    <CardText>Created an app to store all of your pets medical records using MongoDB, Express, React and Node.</CardText>
                    <Button a href="https://github.com/dschawel/vet-app-client">Visit PetRex</Button>
                    <br />
                    <Button a href="https://pet-rex.herokuapp.com/">Live Link</Button>
                </Card>
            </Col>
            <br />
            <Col sm="6">
                <Card body>
                    <CardTitle><strong>Meat-Up</strong></CardTitle>
                    <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/NODQN8E.jpg" alt="Card image cap" />
                    <CardText>Created a medieval meet-up app using React for General Assembly's hackathon.</CardText>
                    <Button a href="https://github.com/dschawel/meat-up">Visit Meat-Up</Button>
                    <br />
                    <Button a href="https://github.com/dschawel/meat-up">Live Link</Button>
                </Card>
            </Col>
            <br />
        </Row>
        <br />
        <Row>
            <Col sm="6">
            <Card body>
                <CardTitle><strong>We-Watch</strong></CardTitle>
                <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/8P8Nmjf.png" alt="Card image cap" />
                <CardText>Created a MERN-stack app designed so you can see what your friends are watching.</CardText>
                <Button a href="https://github.com/dschawel/we-watch-client">Visit We-Watch</Button>
                <br />
                <Button a href="https://we-watch2.herokuapp.com/">Live Link</Button>
                </Card>
            </Col>
        </Row>
        <br />
    </div>
    )
}

export default Projects