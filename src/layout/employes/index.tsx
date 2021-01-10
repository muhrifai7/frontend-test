import * as React from 'react';
import { Container, Row, Col, Card, Button, Pagination, Spinner, Alert, FormControl, Image } from 'react-bootstrap';
import { useDebounce } from 'react-use';
import * as AiIcons from 'react-icons/ai';

import { User } from '../../utils/userTypes'
import Navbars from "../../component/navbars/navbar"
import UsersComp from "../../component/usersComp"
import { getRamdomUser } from "../../utils/userApis"
import Gap from "../../component/Gap"
import "../../assets/css/App.css"

const Employes = () => {
    const [val, setVal] = React.useState('');
    const [error, setError] = React.useState(false)
    const [state, setState] = React.useState(0)
    const [users, setUsers] = React.useState([]);
    const [newUsers, setNewUsers] = React.useState();
    const [loading, setLoading] = React.useState<boolean>(false)

    React.useEffect(() => {
        users && getUsers(1, 4);
    }, [])



    const getUsers = async (page: number, result: number) => {
        try {
            setLoading(prev => !prev);
            const users = await getRamdomUser(page, result);
            setLoading(prev => !prev);
            setError(false)
            setUsers(users)
        } catch (error) {
            setError(true)
            console.log(error)
        }

    }

    function UsePersistedState() {
        // const data = JSON.parse(localStorage.getItem("@users") || '{}');
        const [test, setTest] = React.useState(
            'qqqqq'
        );

        const setPersist = (newItem: any) => {

            // localStorage.setItem("@users", newItem)
            setTest('nwItem')
        }

        return [test, setPersist];
    }

    const [a, v] = UsePersistedState()
    console.log(v, 'rrrr', a)

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
        1000,
        [val]
    );


    const Loading = () => (
        <Row className="justify-content-center">
            <div>
                <Spinner animation="border" variant="primary" />
                {error && <Alert variant="danger">
                    Something When Wrong
             </Alert>}

            </div>
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
                        <div className="heading">
                            <div className="heading-title">
                                <Col><h5>Personel List</h5><h6>List of Personal</h6></Col>
                                {/* <button onClick={() => setPersist('wwwww')}>pppppp</button> */}
                            </div>
                            <div className="heading-title">
                                <div className="wraperAction">
                                    <input type="text" placeholder="Find Personel" className="mr-sm-2" onChange={({ currentTarget }) => {
                                        setVal(currentTarget.value);
                                    }} />
                                </div>
                                <div className="wraperAction">
                                    <div className="add-button">
                                        <div>Add Personel</div>
                                        <div> <AiIcons.AiFillPlusCircle color="white" size={30} /></div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        {loading && <Loading />}
                        <Row>
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