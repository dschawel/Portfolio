import React from 'react'
import { Card, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';


const Projects = (props) => {
    return (
    <div className='projects'>
        <h1>Projects</h1>
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle><h2><strong>PetRex</strong></h2></CardTitle>
                    <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/P8meqRv.png" alt="Card image cap" />
                    <CardText>PetRex is an app designed so pet owners can store their pets health records digitally.  It was built using MongoDB, Express, React and Node.</CardText>
                    <Button a href="https://github.com/dschawel/vet-app-client" target="_blank">GitHub Link For PetRex</Button>
                    <br />
                    <Button a href="https://pet-rex.herokuapp.com/" target="_blank">Live Link</Button>
                </Card>
            </Col>
            <br />
            <Col sm="6">
                <Card body>
                    <CardTitle><h2><strong>Digital Scrabook</strong></h2></CardTitle>
                    <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/FJx9E5y.png" alt="Card image cap" />
                    <CardText>Store all of your memories along with pictures and where they happened with the Digital Scrapbook app.  Digital Scrapbook implemented PostgreSQL, Express and Node.</CardText>
                    <Button a href="https://github.com/dschawel/Digital-Scrapbook" target="_blank">GitHub Link For Digital Scrapbook</Button>
                    <br />
                    <Button a href="https://digital-scrapbook.herokuapp.com/" target="_blank">Live Link</Button>
                </Card>
            </Col>
        </Row>
        <br />
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle><h2><strong>Meat-Up</strong></h2></CardTitle>
                    <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/NODQN8E.jpg" alt="Card image cap" />
                    <CardText>Worked collaboratively as part of a team of three developers and a UX designer for the General Assembly hackathon to create a meet-up app centered around exotic meats.  </CardText>
                    <Button a href="https://github.com/dschawel/meat-up" target="_blank">GitHub Link For Meat-Up</Button>
                    <br />
                    <Button a href="https://meat-up.netlify.com/" target="_blank">Live Link</Button>
                </Card>
            </Col>
            <br />
            <Col sm="6">
            <Card body>
                <CardTitle><h2><strong>We-Watch</strong></h2></CardTitle>
                <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/8P8Nmjf.png" alt="Card image cap" />
                <CardText>This app allows the user to add shows to their queue and then search for and add their friends so they can view their queue.  It was built using MongoDB, Express, React and Node.</CardText>
                <Button a href="https://github.com/dschawel/we-watch-client" target="_blank">GitHub Link For We-Watch</Button>
                <br />
                <Button a href="https://we-watch2.herokuapp.com/" target="_blank">Live Link</Button>
                </Card>
            </Col>
        </Row>
        <br />
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle><h2><strong>Mastermind</strong></h2></CardTitle>
                    <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/92WymWW.png?1" alt="Card image cap" />
                    <CardText>I recreated the classic code-breaking boardgame Mastermind using HTML5, CSS3 & Javascript.</CardText>
                    <Button a href="https://github.com/dschawel/Mastermind" target="_blank">GitHub Link For Mastermind</Button>
                    <br />
                    <Button a href="https://dschawel.github.io/Mastermind/" target="_blank">Live Link</Button>
                </Card>
            </Col>
            <br />
        </Row>
        <br />
    </div>
    )
}

export default Projects