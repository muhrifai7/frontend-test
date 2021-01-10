import * as React from 'react';
import { Container, Row, Col, Pagination, Spinner, Alert } from 'react-bootstrap';
import { useDebounce } from 'react-use';
import * as AiIcons from 'react-icons/ai';
import UsersComp from "../../component/usersComp"
import { getRamdomUser } from "../../utils/userApis"
import "../../assets/css/App.css"
import { useLocalStorage } from "../../utils/uselocalStorage"

const Employes: React.FC = () => {
    const [val, setVal] = React.useState('');
    const [error, setError] = React.useState(false)
    const [state, setState] = React.useState(0)
    const [users, setUsers] = React.useState([]);
    const [newUsers, setNewUsers] = useLocalStorage("@users");
    const [loading, setLoading] = React.useState<boolean>(false)

    const getFirstUsers = React.useCallback(async (page: number, result: number) => {
        try {
            setLoading(prev => !prev);
            if (!newUsers) {
                const users = await getRamdomUser(page, result);
                setNewUsers(users)
            }
            setLoading(prev => !prev);
            setError(false)
        } catch (error) {
            setError(true)
            console.log(error)
        }

    }, [newUsers, setNewUsers])

    React.useEffect(() => {
        users && getFirstUsers(1, 4)
    }, [getFirstUsers, users])


    const getUsers = async (page: number, result: number) => {
        try {
            setLoading(prev => !prev);
            const users = await getRamdomUser(page, result);
            setLoading(prev => !prev);
            setError(false)
            setNewUsers(users)
            setUsers(users)
        } catch (error) {
            setError(true)
            console.log(error)
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
        2000,
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
                        <Row>
                            {newUsers.map((element: any, index: number) =>
                                <UsersComp dataUser={element} key={index} />
                            )}


                        </Row>
                        <Row className="justify-content-center">
                            <Pagination>
                                <Pagination.First disabled={state === 0} onClick={() => handleBackPage()} />
                                <Pagination.Item active={state >= 1}>{"Prev Page"}</Pagination.Item>
                                <Pagination.Item active={state <= 1}>{"Next page"}</Pagination.Item>
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