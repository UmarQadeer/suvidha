import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar_r } from '../component/Navbar';

import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export function Sign_Up() {

    const hhu = () => {
        alert("User Registered");
    }
    return (

        <>
                 <Navbar_r />

            <Container>
            <br />
                <br />
                <br />
                <Form className='common_css'>
                <h5>Register With Us</h5>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Applicant's Name.</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="tel" placeholder="" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control type="password" placeholder="" />
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