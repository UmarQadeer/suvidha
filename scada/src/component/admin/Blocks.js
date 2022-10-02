// import {Link,Route,Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export function Blocks() {
    return (
        <>
            <Container>
                <hr />
                <h3>Add Block</h3>
                <hr />
                <br />
                <Form className='common_css'>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formBasicblock">
                            <Form.Label>Add Block</Form.Label>
                            <Form.Control type="text" placeholder="Enter mobile number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formBasicbdist">
                            <Form.Label>District</Form.Label>
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

            </Container>
            <br /><br /><br />  <br /><br /><br />  <br /><br /><br />  <br /><br /><br /> <br /><br />



        </>
    )
}