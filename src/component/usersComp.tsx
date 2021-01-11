import React from 'react'
import { Card, Image, Row, Spinner } from "react-bootstrap"
import moment from 'moment'
import * as AiIcons from 'react-icons/ai';
// nodejs library to set properties for components

// My components
import "../assets/css/App.css"

const UsersComp = ({ dataUser }: any) => {
    if (dataUser == null) return (
        <div>
            <Spinner animation="border" variant="primary" />
            <p>User Not Found</p>
        </div>
    )

    return (
        <Card className="custom-card">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5px " }}>
                <p>Personel Id : <span>123456</span></p>
                <AiIcons.AiFillSetting color="#b2bec3" /></div>

            <hr className="solid"></hr>
            <div className="custom-card-body">
                <Row className="wraperIcon" >
                    <Image src={dataUser?.picture?.medium} roundedCircle />
                </Row>
                <Card.Body>
                    <div>
                        <p className="thick">Name</p>
                        <p>{dataUser?.name?.first}</p>
                        <p className="thick">Telephone</p>
                        <p>{dataUser?.phone}</p>
                    </div>
                    <div className="custom-card-content">
                        <p className="thick">Birthday</p>
                        <p>{moment(dataUser?.dob?.date).format('MM-DD-YYYY')}</p>
                        <p className="thick">Email</p>
                        <p>{dataUser?.email}</p>
                    </div>
                </Card.Body>
            </div>
        </Card>
    )
}

export default UsersComp
