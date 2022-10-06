import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pole from '../slider/pole.jpg';
import "./css/Content.css";
import { Navbar_r } from '../component/Navbar';


export function Content() {
    return (
        <>
        
            <Container className="comp_row">
                <Row className="single_card">
                    <Col className='justify-content-center d-flex'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary btn-sm">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>




                    <Col className='justify-content-center d-flex'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary btn-sm" >Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>



                    <Col className='justify-content-center d-flex'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary btn-sm">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

                {/* ********************************************2nd col************************* */}
                <Row className="single_card">
                    <Col className='justify-content-center d-flex'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary btn-sm">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>




                    <Col className='justify-content-center d-flex'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary btn-sm" >Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>



                    <Col className='justify-content-center d-flex'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary btn-sm">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>



            </Container>




            {/* ***********************about us************************************** */}
            <Container>
                <Row className="about_us">
                    <hr />
                    <h3>About Us</h3>
                    <hr />

                    <Col>
                        <img align="left" className="img-thumbnail me-3" width="350px" alt='...' src={pole} />
                        <p>
                            NBPDCL is a company registered under
                            the provisions of Companies Act 1956 and is a fully owned subsidiary Company of BSPHCL.
                            <br />
                            <br />
                            The Company is engaged primarily in the business of distribution of Electricity.
                            It has been vested with the distribution assets, interest in property, rights andliabilities of the erstwhile BSEB necessary
                            for the business of distribution inits area of distribution comprising of all 21 districts of North Bihar
                            namely  <br /> 1. West Champaran, 2. East Champaran, 3. Sitamadhi, 4. Sheohar, 5. Muzaffarpur, 6.Vaishali, 7. Saran, 8. Siwan, 9. Gopalgunj, 10. Mahubani, 11. Darbhanaga, 12. Samastipur,13. Begusarai,
                            14. Khagaria, 15. Saharsa, 16. Supaul, 17. Medhepura, 18. Araria, 19. Katihar, 20. Purnea and 21. Kishangunj.
                            <br />
                            <br />
                            The Company has been given the status of a Distribution licensee as per Section14 of the Electricity Act 2003. In order to fulfill the obligations of the Distributionlicensee as mandated under the provision of
                            Bihar State Electricity Reforms TransferScheme 2012 and Electricity Act 2003,
                            the main objects to be pursued by the company are:-
                            <br />
                            <br />
                            <br />
                    <br />

                            ⦿ To undertake the activities of distribution to all consumers irrespective of thevoltage, provision, supply, wheeling, purchase, sale, import, export and tradingof electricity, introduce open access in distribution as per the Electricity Act2003 and/or the directions of the regulator.
                            <br />
                            <br />
                            ⦿ To plan, develop, acquire, establish, construct, erect, lay, hire, lease, buy, sell,operate, run, manage, maintain, enlarge, alter, renovate, modernize, work and usea power distribution system network in all its aspects including amongst othersvarious voltage lines and associated sub -stations, including distribution centers,cables, wires, accumulators, plants, motors, meters, apparatus, computers and materialsconnected with sub -transmission, distribution, supply of electrical energy, ancillaryservices, telecommunication and telemetering equipments.
                            <br />
                            <br />
                            ⦿ To tender, finalise and execute Power Purchase Agreements and other agreements forsale or purchase of electricity with generating companies, trading companies, otherdistribution companies, Central and State generating authorities, departments orcompanies, societies, other States, utilities, Independent Power Producers and otherPersons.
                            <br />
                            <br />
                            ⦿ To undertake Rural Electrification schemes in the licensed area.
                            <br />
                            <br />
                            ⦿ Any other work incidental to the objectives & functions of the company.


                        </p>
                    </Col>

                </Row>





            </Container>

        </>



    )
}