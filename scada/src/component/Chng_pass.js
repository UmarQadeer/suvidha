import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export function Chng_pass() {

    const hhu = () => {
        alert("enter otp received");
    }
    return (

        <>

            <Container>
                <hr/>
                <h3>Change Password</h3>
                <hr />
                <br />
                <Form className='common_css'>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="tel" placeholder="Enter mobile number" />
                    </Form.Group>


                    <Button variant="primary" onClick={hhu} className="m-1" size="sm">
                        Send OTP
                    </Button>

                </Form>
            </Container>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </>
    )
}