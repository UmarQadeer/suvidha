// import {Link,Route,Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
export function Section_d() {
    return (
        <>
            <Navbar_admin />

            <Container >
                <hr />
                <h3>Section Details</h3>
                <hr />
                <br />

                <Row style={{ display: 'flex' }}>


                    <Col sm={2}>
                        <Sidebar />
                    </Col>



                    <Col sm={10}>

                        <Form className='common_csss' >
                            <Row className="mb-3">
                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                    <Nav.Link style={{ float: 'right' }} as={NavLink} to="/admin/section">    Add Section   </Nav.Link>
                                </Button>
                                <Table bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Serial No.</th>

                                            <th>District Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>

                                            <td>Patna</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>2</td>

                                            <td>Gaya</td>

                                            <td>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ✏️
                                                </Button>
                                                <Button style={{ "background": "none", "border": "none" }} variant="light" className="m-1" size="sm">
                                                    ❌
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>


                                </Table>

                            </Row>




                        </Form>

























                    </Col>
                </Row>
            </Container>

        </>
    )
}