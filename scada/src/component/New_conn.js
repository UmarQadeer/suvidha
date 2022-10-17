import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_r } from '../component/Navbar';
import './css/new_conn.css'




export function New_conn() {

    return (
        <>
            <Navbar_r />
            <Container>
                <br />
                <br />
                <br />
                <Form className='common_css'>
                    <hr />
                    <h5>NEW CONNECTION</h5>
                    <hr />
                    <br />
                    {/* first part starts************************************************ */}

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Connection Type</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">Domestic</option>
                                <option value="2">Industrail</option>
                                <option value="3">Agriculture</option>
                                <option value="3">Commercial</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Connection Details</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                
                                <option value="1">Low Tension</option>
                                <option value="2">High Tension</option>

                            </Form.Select>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Tarrif </Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">Low Tension</option>
                                <option value="2">High Tension</option>

                            </Form.Select>
                        </Form.Group>


                        <Form.Group as={Col}>
                            <Form.Label>Phase</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">1</option>
                                <option value="2">3</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Load</Form.Label>
                            {/* <Form.Select aria-label="Default select example" size="sm"> */}
                            <Form.Control type="text" placeholder="" size="sm" />
                        </Form.Group>
                    </Row>
                    <br />

                    {/* second part starts****************************************************** */}

                    <br />   <br />    <hr />
                    <h5>LOCATION OF PERMISES WHERE SUPPLY IS REQUIRED</h5>
                    <hr />
                    <br />

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>District</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">1</option>
                                <option value="2">3</option>

                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Block</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">1</option>
                                <option value="2">3</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Panchayat</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">1</option>
                                <option value="2">3</option>

                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Village/Ward</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">1</option>
                                <option value="2">3</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Division</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">1</option>
                                <option value="2">3</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Sub Division</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">1</option>
                                <option value="2">3</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Section</Form.Label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {/* <option>Open this select menu</option> */}
                                <option value="1">1</option>
                                <option value="2">3</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>
                    {/* third part starts*********************************************** */}

                    <br />   <br />    <hr />
                    <h5>APPLICANTS DETAILS</h5>
                    <hr />
                    <br />



                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridF_name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridL_Name">
                            <Form.Label>Father/Husband's name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridgen">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridL_Name">
                            <Form.Label>Photo of Applicant</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridtel">
                            <Form.Label>Mobile No.</Form.Label>
                            <Form.Control type="tel" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </Row>



                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="" />
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


                        <Form.Group as={Col} controlId="formGridDoc">
                            <Form.Label>Document Type</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Driving License</option>
                                <option>Adhar Card</option>
                                <option>Ration Card</option>
                            </Form.Select>
                        </Form.Group>



                        <Form.Group as={Col} controlId="formGriddoc_front">
                            <Form.Label>Upload Documnet</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>





                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAdd">
                            <Form.Label>Address Proof Type</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Driving License</option>
                                <option>Adhar Card</option>
                                <option>Ration Card</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridadd_front">
                            <Form.Label>Address Proof Front Pic </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridadd_back">
                            <Form.Label>Address Proof Back Pic</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>


                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAdd">
                            <Form.Label>Photo of OwnerShip</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>



                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="By checking this box, every details provided by you is correct, any fault can put you in trouble, moreover you are agreeing to our terms of service" />
                    </Form.Group>



                    <Button variant="primary" size="sm">
                        Submit
                    </Button>
                </Form>

            </Container>

            <br /><br /><br />  <br />

        </>
    )
}