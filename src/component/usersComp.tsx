import React from 'react'
import { Card, Button, Col, Image, Row, Spinner } from "react-bootstrap"
import "../assets/css/App.css"

import { ResultUser } from "../users/userTypes"

interface UsersResultProps {
    result: []
}

const UsersComp = ({ dataUser }: any) => {
    if (dataUser == null) return (
        <Spinner animation="border" variant="primary" />
    )

    return (
        <Card style={{ width: '12rem', margin: "1.3rem", paddingLeft: "1rem", paddingRight: '1rem' }}>
            <p>Personel Id : 123456</p>
            <hr className="solid"></hr>
            <Row className="justify-content-center mt-1 mb-1" >
                <Image src={dataUser.picture.medium} roundedCircle />
            </Row>
            <Card.Body>
                <p className="thick">Name</p>
                <p>{dataUser.name.first}</p>
                <p className="thick">Telephone</p>
                <p>{dataUser.phone}</p>
                <p className="thick">Birthday</p>
                <p>{dataUser.dob.date}</p>
                <p className="thick">Email</p>
                <p>{dataUser.email}</p>
            </Card.Body>
        </Card>
    )
}

export default UsersComp
