import * as React from 'react';
import { Container, Row, Col, Pagination, Spinner, Alert } from 'react-bootstrap';
import { useDebounce } from 'react-use';
import * as AiIcons from 'react-icons/ai';

import Gap from "../../component/Gap"
import UsersComp from "../../component/usersComp"
import { getRamdomUser } from "../../utils/userApis"
import "../../assets/css/App.css"
import { useLocalStorage } from "../../utils/uselocalStorage"

const Employes: React.FC = () => {
    const [val, setVal] = React.useState('');
    const [error, setError] = React.useState(false)
    const [state, setState] = React.useState(0)
    const [newUsers, setNewUsers] = useLocalStorage("@users");
    const [loading, setLoading] = React.useState<boolean>(true)

    const getFirstUsers = React.useCallback(async (page: number, result: number) => {
        try {
            if (!newUsers) {
                const users = await getRamdomUser(page, result);
                setNewUsers(users)
            }
            setLoading(false);
        } catch (error) {
            setError(true)
        }

    }, [newUsers, setNewUsers])

    React.useEffect(() => {
        newUsers && getFirstUsers(1, 4)
    }, [getFirstUsers, newUsers])


    const getUsers = async (page: number, result: number) => {
        try {
            setLoading(true);
            const users = await getRamdomUser(page, result);
            setError(false)
            setNewUsers(users)
            setLoading(false);
        } catch (error) {
            setError(true)
        }

    }

    useDebounce(
        () => {
            async function searchByName(val: string) {
                let newUser = newUsers.filter((element: any) => {
                    return element.name.first.toLowerCase() == val.toLowerCase()
                })
                setLoading(prev => !prev);
                setTimeout(() => {
                    setLoading(prev => !prev);
                    setNewUsers(newUser)
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
        setState(prev => prev + 1); getUsers(state, 4)
    }
    const handleBackPage = () => {
        setState(prev => prev - 1); getUsers(state, 4)
    }



    return (
        <div className="main-panel">
            <Container>
                <Row>
                    <Col xs={10} >
                        <div className="heading">
                            <div className="heading-title">

                                <Col><h5>Personel List</h5><h6>List of Personal</h6></Col>
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
                        <Row className="wraper-cards">
                            {newUsers?.map((element: any, index: number) =>
                                <UsersComp dataUser={element} key={index} />
                            )}


                        </Row>
                        <Gap height={"12px"} />
                        <Row className="justify-content-center">
                            <Pagination>
                                <Pagination.First disabled={state === 0} onClick={() => handleBackPage()} />
                                <Pagination.Item active={state >= 1}>{"Prev Page"}</Pagination.Item>
                                <Gap width={"10px"} />
                                <Pagination.Item active={state <= 2}>{"Next page"}</Pagination.Item>
                                <Pagination.Last disabled={state === 3} onClick={() => handleNextPage()} />
                            </Pagination>

                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Employes