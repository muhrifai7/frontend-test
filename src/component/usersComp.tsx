import React from 'react'
import { Card, Button, Col, Image, Row, Spinner } from "react-bootstrap"
import moment from 'moment'

import "../assets/css/App.css"

import { ResultUser } from "../utils/userTypes"

interface UsersResultProps {
    result: []
}

const UsersComp = ({ dataUser }: any) => {
    if (dataUser == null) return (
        <Spinner animation="border" variant="primary" />
    )

    return (
        <Card style={{ maxWidth: '12rem', margin: "1rem", paddingLeft: "1rem", paddingRight: '1rem' }}>
            <p>Personel Id : <span>123456</span></p>
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
                <p>{moment(dataUser.dob.date).format('MM-DD-YYYY')}</p>
                <p className="thick">Email</p>
                <p>{dataUser.email}</p>
            </Card.Body>
        </Card>
    )
}

export default UsersComp
