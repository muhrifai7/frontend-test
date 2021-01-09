import * as React from 'react';
import { Container, Row, Col, Card, Button, Pagination, Spinner, Form, FormControl } from 'react-bootstrap';
import { useDebounce } from 'react-use';

import { User } from '../../users/userTypes'
import Navbars from "../../component/navbars/navbar"
import UsersComp from "../../component/usersComp"
import { getRamdomUser } from "../../users/userApis"
import Gap from "../../component/Gap"
import "../../assets/css/App.css"

const Employes = () => {
    const [val, setVal] = React.useState('');

    const [state, setState] = React.useState(0)
    const [users, setUsers] = React.useState<any>([]);
    const [loading, setLoading] = React.useState<boolean>(false)
    React.useEffect(() => {
        users && getUsers(1, 4);
    }, [])

    const getUsers = async (page: number, result: number) => {
        setLoading(prev => !prev);
        const users = await getRamdomUser(page, result);
        setLoading(prev => !prev);
        setUsers(users)
    }

    useDebounce(
        () => {
            async function searchByName(val: string) {
                let newUser = users.filter((element: any) => {
                    return element.name.first.toLowerCase() == val.toLowerCase()
                })
                setLoading(prev => !prev);
                setTimeout(() => {
                    setLoading(prev => !prev);
                    setUsers(newUser)
                }, 1000);
            }
            val && searchByName(val);
        },
        2000,
        [val]
    );



    const Loading = () => (
        <Row className="justify-content-center">
            <Spinner animation="border" variant="primary" />
        </Row>
    )

    const handleNextPage = () => {
        setState(prev => prev + 1); getUsers(2, 4)
        console.log(state, 'val')
    }
    const handleBackPage = () => {
        setState(prev => prev - 1); getUsers(1, 4)
        console.log(state, 'val')
    }

    return (
        <div className="main-panel">
            <Container>
                <Row>

                    <Col xs={10} >
                        <Row className="justify-content-space-between">
                            <Col><h2>Personel List</h2><h5>List of Personal</h5></Col>
                            <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Form inline>
                                    <FormControl type="text" placeholder="Find Personel" className="mr-sm-2" onChange={({ currentTarget }) => {
                                        setVal(currentTarget.value);
                                    }} />
                                    <Button variant="outline-success">Add Personel</Button>
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
                                <Pagination.First disabled={state === 0} onClick={() => handleBackPage()} />
                                <Pagination.Item active={state >= 1}>{"Prev Page"}</Pagination.Item>
                                <Pagination.Item active={state <= 1}>{"Next page"}</Pagination.Item>
                                <Pagination.Last disabled={state == 3} onClick={() => handleNextPage()} />
                            </Pagination>

                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Employes