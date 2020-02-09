import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const Projects = (props) => {
    return (
    <div className='projects'>
        <Row>
            <Col sm="6">
                <Card body>
                <CardTitle><strong>Mastermind</strong></CardTitle>
                <CardText>Recreated the classic boardgame Mastermind using HTML5, CSS & Javascript.</CardText>
                <Button>Visit Mastermind</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle><strong>Digital Scrabook</strong></CardTitle>
                <CardText>Created a digital scrapbook using Node, Express Javascript, PostgreSQL and Sequelize.</CardText>
                <Button>Visit Digital Scrapbook</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle><strong>PetRex</strong></CardTitle>
                <CardText>Created an app to store all of your pets medical records using MongoDB, Express, React and Node.</CardText>
                <Button>Visit PetRex</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle><strong>Project 4 Placeholder</strong></CardTitle>
                <CardText>Placeholder</CardText>
                <Button>Placeholder</Button>
                </Card>
            </Col>
        </Row>
    </div>
    )
}

export default Projects