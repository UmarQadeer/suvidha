import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './css/new_conn.css'

export function New_conn() {
    return (
        <>

            <Container className="dd">
                <hr />
                <h3>NEW CONNECTION</h3>
                <hr />
                <br />

                <Form>

                    {/* first part starts************************************************ */}

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>1) Connection Type</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">Domestic</option>
                                <option value="2">Industrail</option>
                                <option value="3">Agriculture</option>
                                <option value="3">Commercial</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>2) Connection Details</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">Low Tension</option>
                                <option value="2">High Tension</option>

                            </Form.Select>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>3) Tarrif </Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">Low Tension</option>
                                <option value="2">High Tension</option>

                            </Form.Select>
                        </Form.Group>


                        <Form.Group as={Col}>
                            <Form.Label>4) Phase</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">1</option>
                                <option value="2">3</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>5) Load</Form.Label>
                        {/* <Form.Select aria-label="Default select example" size="sm"> */}
                        <Form.Control type="text" placeholder="Enter Required Load " size="sm" />
                    </Form.Group>
                    </Row>
                    <br />

                    {/* second part starts****************************************************** */}

                    <br />   <br />    <hr />
                    <h3>LOCATION OF PERMISES WHERE SUPPLY IS REQUIRED</h3>
                    <hr />
                    <br />

                    <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>1) District</Form.Label>
                        <Form.Select aria-label="Default select example" size="sm">
                            {/* <option>Open this select menu</option> */}
                            <option value="1">1</option>
                            <option value="2">3</option>

                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                        <Form.Label>2) Block</Form.Label>
                        <Form.Select aria-label="Default select example" size="sm">
                            {/* <option>Open this select menu</option> */}
                            <option value="1">1</option>
                            <option value="2">3</option>

                        </Form.Select>
                    </Form.Group>
                    </Row>

                    <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>3) Panchayat</Form.Label>
                        <Form.Select aria-label="Default select example" size="sm">
                            {/* <option>Open this select menu</option> */}
                            <option value="1">1</option>
                            <option value="2">3</option>

                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                        <Form.Label>4) Village/Ward</Form.Label>
                        <Form.Select aria-label="Default select example" size="sm">
                            {/* <option>Open this select menu</option> */}
                            <option value="1">1</option>
                            <option value="2">3</option>

                        </Form.Select>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>5) Division</Form.Label>
                        <Form.Select aria-label="Default select example" size="sm">
                            {/* <option>Open this select menu</option> */}
                            <option value="1">1</option>
                            <option value="2">3</option>

                        </Form.Select>
                    </Form.Group>                    
                    <Form.Group  as={Col}>
                        <Form.Label>6) Sub Division</Form.Label>
                        <Form.Select aria-label="Default select example" size="sm">
                            {/* <option>Open this select menu</option> */}
                            <option value="1">1</option>
                            <option value="2">3</option>
                        </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group  as={Col}>
                        <Form.Label>7) Section</Form.Label>
                        <Form.Select aria-label="Default select example" size="sm">
                            {/* <option>Open this select menu</option> */}
                            <option value="1">1</option>
                            <option value="2">3</option>

                        </Form.Select>
                    </Form.Group>
                    </Row>
                    {/* third part starts*********************************************** */}

                    <br />   <br />    <hr />
                    <h3>APPLICANTS DETAILS</h3>
                    <hr />
                    <br />



                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridF_name">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridL_Name">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridgen">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" placeholder="Gender" />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridL_Name">
                            <Form.Label>Photo of Applicant</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridtel">
                            <Form.Label>Mobile No.</Form.Label>
                            <Form.Control type="tel" placeholder="Enter Mobile Number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter E-mail address" />
                        </Form.Group>
                    </Row>



                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>



                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPin">
                            <Form.Label>PIN code</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formGridDoc">
                            <Form.Label>Document Type</Form.Label>
                            <Form.Control placeholder="Identity Proof" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGriddoc_front">
                            <Form.Label>Upload Front Page</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGriddoc_back">
                            <Form.Label>Upload Back Page</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formGridAdd">
                            <Form.Label>Address Type</Form.Label>
                            <Form.Control placeholder="Address Proof" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridadd_front">
                            <Form.Label>Upload Front Page</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridadd_back">
                            <Form.Label>Upload Back Page</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>




                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="By checking this box, every details provided by you is correct, any fault can put you in trouble and you are agreeing to our terms of service" />
                    </Form.Group>



                    <div className="d-grid gap-2">
                        <Button variant="success" type="submit">
                            SUBMIT
                        </Button>
                    </div>
                </Form>










            </Container>



        </>
    )
}