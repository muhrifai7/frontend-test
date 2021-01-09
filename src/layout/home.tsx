import * as React from 'react';
import ReactDOM from "react-dom";
import { useDebounce } from 'react-use';
import { Container, Row, Col, Card, Button, Pagination, Spinner, Form, FormControl } from 'react-bootstrap';

import { User } from '../users/userTypes';
import Navbars from "../component/navbars/navbar"
import UsersComp from "../component/usersComp"
import { getRamdomUser } from "../users/userApis"
import Gap from "../component/Gap"

const Home = () => {
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
        <Spinner animation="border" variant="primary" />
    )

    return (
        <>
            <Container>
                <Row>

                    <Col xs={10} >
                        <Row className="justify-content-space-between">
                            <Col><h2>Personel List</h2><h5>List of Personal</h5></Col>
                            <Col>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            {loading && <Loading />}
                            {users.map((element: any, index: Number) =>
                                <UsersComp dataUser={element} key={index} />
                            )}

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
        </>
    )
}

export default Home