// import {Link,Route,Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';

export function Section() {
    return (
        <>
            <Navbar_admin />

            <Container >
                <hr />
                <h5>Add Section</h5>
                <hr />
                <br />

                <Row style={{ display: 'flex' }}>


                    <Col sm={2}>
                        <Sidebar />
                    </Col>



                    <Col sm={10}>

                        <Form className='common_csss' >
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formBasicblock">
                                    <Form.Label>Section Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicbdist">
                                    <Form.Label>Division</Form.Label>
                                    <Form.Select aria-label="Default select example" >
                                        {/* <option>Open this select menu</option> */}
                                        <option>Choose...</option>
                                        <option value="1">Low Tension</option>
                                        <option value="2">High Tension</option>

                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicbdist">
                                    <Form.Label>Sub Division</Form.Label>
                                    <Form.Select aria-label="Default select example" >
                                        {/* <option>Open this select menu</option> */}
                                        <option>Choose...</option>
                                        <option value="1">Low Tension</option>
                                        <option value="2">High Tension</option>

                                    </Form.Select>
                                </Form.Group>
                              
                            </Row>
                            <Button variant="primary" className="m-1" size="sm">
                                Save and add another
                            </Button>

                            <Button variant="primary" className="m-1" size="sm">
                                Save and exit
                            </Button>

                        </Form>

























                    </Col>
                </Row>
            </Container>
          
        </>
    )
}