import './App.css'
import { Container, Row, Col, InputGroup } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import reactlogo from './assets/react.svg';


import Form from 'react-bootstrap/Form';


function App() {

  return (
    <>
      <Container fluid>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>

            <Navbar.Brand href="#home"> <i className='m-1 p-1 bi-twitch' ></i>TWISTY</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className='ms-5'> Home</Nav.Link>
                <Nav.Link href="#Messages">Messages</Nav.Link>
                <Nav.Link href="#Discover">Discover</Nav.Link>
                <Nav.Link href="#Wallet">Wallet</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">

                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Col>
              <InputGroup>
                <Col sm={3} md={9} lg={6}>
                  <div className="input-group flex-nowrap">

                    <input type="text" className="form-control" placeholder="Enter your search request" aria-label="Enter your search request" aria-describedby="addon-wrapping" />
                    <span className="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
                  </div>
                </Col>
                <Col sm={4} md={1} lg={2} ><i className="bi bi-gear ms-4" ></i></Col>
                <Col sm={4} md={1} lg={2}><i className="bi bi-bell ms-4"></i></Col>
                <Col sm={4} md={1} lg={2}><i className="bi bi-person-circle ms-4 "></i></Col>
              </InputGroup>

            </Col>
          </Container>
        </Navbar>
        <Container fluid>
          <Row>
            <Col sm={12} md={6} lg={7}>
              <Card className='m-2 p-5 card-container'>
                <Row>

                  <Col sm={8} md={8}><h1><i className="bi bi-archive-fill me-5 "></i>Income Tracker</h1></Col>
                  <Col sm={2} md={2}>
                    <NavDropdown title="Week" id="basic-nav-dropdown">

                      <NavDropdown.Item href="#action/3.1">Sunday</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Monday</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Tuesday</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">wednesday</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Thursday</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Friday</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Sturaday</NavDropdown.Item>

                    </NavDropdown></Col>
                </Row>
                <Row>
                  <p>Track changes in income over time and access detailed data on each project and payments recieved</p>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <h2>+20%</h2>
                    </Row>
                    <Row>
                      <p>This week's income is higher than last week's</p>
                    </Row>
                  </Col>
                  <Col></Col>
                </Row>

              </Card>
            </Col>

            <Col sm={12} md={6} lg={5}>
              <Row>
                <Col sm={12} md={6} lg={6} className='m-2 p-3'>

                  <h5>Your Recent Project</h5></Col>
                <Col sm={12} md={6} lg={5} className='m-2 p-3'>
                  <div class="d-flex justify-content-end">
                    <a href="#"> see all project</a>
                  </div>
                </Col>
              </Row>
              <Row>

                <Col sm={12} md={6} lg={1} className='me-3'><p className="fs-1"><i className="bi bi-browser-edge"></i></p></Col>
                <Col sm={12} md={6} lg={5} className='me-5'> <Row> Web Development Project </Row>
                  <Row> $10/hour</Row></Col>
                <Col sm={12} md={6} lg={3}><div className='tag' > Part 1
                </div></Col>
                <Col><i class="bi bi-chevron-up"></i></Col>
              </Row>
              <Row>
                <Col sm={6} md={4} lg={2}>
                  <div className='tag'>Remote</div>
                </Col>
                <Col> <div className='tag' > Part time
                </div></Col>
              </Row>
              <Row>
                <p> This project involves implementing both frontend and backend functionalities , as well as integrating with third-party APIs</p>
              </Row>
              <Row>

                <Col sm={12} md={6} lg={7} className="me-0">
                  <p className="fs-5 ">
                    <i className="bi bi-geo-alt-fill me-2"></i> Germany
                  </p>
                </Col>

                <Col sm={12} md={6} lg={5}>
                  <div className="vr me-2"></div>
                  <span>2 hrs ago</span>
                </Col>
              </Row>


              <Row>
                <Col sm={12} md={6} lg={2}><img src={reactlogo} alt="" /> </Col>
                <Col>
                  <Row>COPYRIGHT PROJECT </Row>
                  <Row> $10/Hour</Row></Col>
                <Col sm={12} md={6} lg={3}>
                  <div className='tag' > Non paid
                  </div></Col>
                <Col sm={12} md={6} lg={2}><i class="bi bi-chevron-up"></i>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={12} md={6} lg={2}><img src={reactlogo} alt="" /> </Col>
                <Col>
                  <Row>COPYRIGHT PROJECT </Row>
                  <Row> $10/Hour</Row></Col>
                <Col sm={12} md={6} lg={3}>
                  <div className='tag' > Non paid
                  </div></Col>
                <Col sm={12} md={6} lg={2}><i class="bi bi-chevron-up"></i>
                </Col>

              </Row>

            </Col>

          </Row>
          <Row className='mt-5'>
            <Col sm={12} md={4} lg={4}>
              <Card className='p-3 m-2'>
                <Row>
                  <Row>
                    <Col><h3>Let's connect</h3></Col>
                    <Col className="text-end"><p>See all</p></Col>
                  </Row>

                </Row>
                <Row>
                  <Col sm={12} md={6} lg={4}><img src={reactlogo} alt="" /></Col>
                  <Col sm={12} md={6} lg={4} > <div>Randy Gouse </div>
                    <p>cybersecurity specialist </p>
                  </Col>
                  <Col sm={12} md={6} lg={4}>
                    <Button className="circle d-flex justify-content-end">+</Button>
                  </Col>

                </Row>

              </Card>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <Card className='p-4 m-2'>
                <Row><h1>Unlock Premium Features</h1></Row>
                <Row> Get access to exclusive benefits and expand your freelancing oppurtunities</Row>
                <Row> Upgrade now</Row>
              </Card>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <Card className='p-4 m-2'>
                <Row>
                  <Col>
                    <h3>Proposal Progress</h3>
                  </Col>
                  <Col>
                    April 11,24
                  </Col>
                </Row>
                <Row>
                  <Col>Proposal Sent</Col>
                  <Col>Interview</Col>
                  <Col>Hires</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default App
