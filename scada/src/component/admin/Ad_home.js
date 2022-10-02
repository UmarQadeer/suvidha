// import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
// import { Blocks } from './Blocks';

export function Ad_home() {
    return (
        <>
            <Container>
                <hr />
                <h3> Welcome Umar to Admin Panel</h3>
                <hr />
                <br />
                <Row>
                    <Col sm={2}>

                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Authentication & Authorization</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>Groups     <span style={{ float: 'right' }}>➕   </span> </td>
                                </tr>
                            </tbody>
                        </Table>







                        {/* table 2******************************************** */}

                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Consumer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td>Blocks  <span style={{ float: 'right' }}>➕   </span> </td> */}
                                    <Nav.Link as={NavLink} to="/ad_home/blocks">Blocks <span style={{ float: 'right' }}>➕   </span></Nav.Link>
                                </tr>
                                <tr>
                                    <td>Connection type <span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                                <tr>
                                    <td>District<span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                                <tr>
                                    <td>Division<span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                                <tr>
                                    <td>Panchayat<span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                                <tr>
                                    <td>Sections<span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                                <tr>
                                    <td>Sub divions<span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                                <tr>
                                    <td>Temp Applicants<span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                                <tr>
                                    <td>Tension type<span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                                <tr>
                                    <td>Users<span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                                <tr>
                                    <td>Villages<span style={{ float: 'right' }}>➕   </span></td>

                                </tr>
                            </tbody>
                        </Table>
                    </Col>



                    <Col sm={10}>

{/* {{Blocks}} */}



                    </Col>

                </Row>
            </Container>










        </>
    )
}