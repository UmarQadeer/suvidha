// import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Footer() {



    return (

        <>


            <Container style={{ padding: '1rem' }}>
                {/* <Container fluid> */}
                <Row className="single_card">
                    <Col className='justify-content-center d-flex'>

                        important Links  <br /> important Links  <br />important Links  <br />important Links <br /> important Links



                    </Col>

                    <Col className='justify-content-center d-flex'>
                        important Links  <br /> important Links  <br />important Links  <br />important Links <br /> important Links



                    </Col>

                    <Col className='justify-content-center d-flex'>
                        important Links  <br /> important Links  <br />important Links  <br />important Links <br /> important Links



                    </Col>
                    <a className='uparr'  href="#">&#8613;</a>
                </Row>
              
            </Container>

        </>
    )
}