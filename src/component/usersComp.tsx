import React from 'react'
import { Card, Button, Col, Image, Row, Spinner } from "react-bootstrap"

import { ResultUser } from "../users/userTypes"

interface UsersResultProps {
    result: []
}

const UsersComp = ({ dataUser }: any) => {
    if (dataUser == null) return (
        <Spinner animation="border" variant="primary" />
    )
    return (
        <Card style={{ width: '12rem', margin: "1rem" }}>
            <Row className="justify-content-md-center mt-2" >
                <Col xs={6} >
                    <Image src={dataUser.picture.medium} roundedCircle />
                </Col>
            </Row>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default UsersComp
