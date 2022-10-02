import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';



export function Sign_In() {



    const closeTab = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
    };

    return (

        <>

            <Container>
                <hr />
                <h3 className='sq'>Sign In</h3>
                <hr />
                <br />
                <Form className='common_css'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Mobile No.</Form.Label>
                        <Form.Control type="email" placeholder="Enter mobile number" />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" className="m-1" size="sm">
                        Submit
                    </Button>


                    <Button variant="Light" style={{ float: 'right' }} size="sm">
                        <Nav.Link as={NavLink} onClick={closeTab} to="/for_pass">Forgot Password ?</Nav.Link>
                    </Button>
                    <br /><br />

                    New with us??
                    <Button variant="link" style={{ "text-decoration": 'none' }} className="m-1" size="sm">
                        <Nav.Link as={NavLink} onClick={closeTab} to="/sign_up">Sign Up</Nav.Link>
                    </Button>to get in touch ✔️
                </Form>
            </Container>

            <br /><br /><br />  <br /><br /><br />  <br /><br /><br /> <br />

        </>
    )
}