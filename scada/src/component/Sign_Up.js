import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export function Sign_Up() {

    const hhu = () => {
        alert("User Registered");
    }
    return (

        <>

            <Container>
                <hr />
                <h3>Register With Us</h3>
                
                <hr />
                <br />
                <Form className='common_css'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Applicant's Name.</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email ID" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="tel" placeholder="Enter mobile number" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" onClick={hhu} className="m-1" size="sm">
                        Register
                    </Button>

                </Form>
            </Container>
            <br /><br /><br /> <br />


        </>
    )
}