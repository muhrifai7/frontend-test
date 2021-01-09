import * as React from 'react';
import { Container, Row, Col, Card, Button, Pagination, Spinner, Form, FormControl } from 'react-bootstrap';

import { User } from '../../users/userTypes'
import Navbars from "../../component/navbars/navbar"
import UsersComp from "../../component/usersComp"
import { getRamdomUser } from "../../users/userApis"
import Gap from "../../component/Gap"
import "../../component/navbars/Navbar.css"

const Employes = () => {
    const [users, setUsers] = React.useState<any>([]);
    const [loading, setLoading] = React.useState<boolean>(false)
    React.useEffect(() => {
        setLoading(prev => !prev);
        async function serachRandomUser(page: Number, result: Number) {
            const users = await getRamdomUser(page, result);
            setLoading(prev => !prev);
            setUsers(users)
        }
        users && serachRandomUser(1, 4);
    }, [])

    const Loading = () => (
        <Row className="justify-content-center">
            <Spinner animation="border" variant="primary" />
        </Row>
    )

    return (
        <div className="main-panel">
            <Container>
                <Row>

                    <Col xs={10} >
                        <Row className="justify-content-space-between">
                            <Col><h2>Personel List</h2><h5>List of Personal</h5></Col>
                            <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Col>
                        </Row>
                        {loading && <Loading />}
                        <Row className="justify-content-space-around">
                            {users.map((element: any, index: Number) =>
                                <UsersComp dataUser={element} key={index} />
                            )}


                        </Row>
                        <Row className="justify-content-center">
                            <Pagination>
                                <Pagination.Prev />
                                <p>Prev Page</p>
                                <Gap width={10} />
                                <p>Prev Page</p>
                                <Pagination.Next />
                            </Pagination>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Employes