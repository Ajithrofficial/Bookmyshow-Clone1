import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Modal from 'react-bootstrap/Modal';


function Header() {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  

  return (
    <>
    <div>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Link to={'/'}><img width='150px' src="https://brandlogos.net/wp-content/uploads/2022/10/bookmyshow-logo_brandlogos.net_rzqea-300x300.png" 
            alt="" /></Link>
            <Container>
            <Form className="d-flex">
            <Form.Control type="search" placeholder="Search for Movies, Events, Plays and Sports" 
            className="me-2"
             aria-label="Search"/>
          </Form>
          </Container>

          <Dropdown className='me-2'>
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
        Location
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><i class="fa-solid fa-location-dot"></i>  Turn on Location...</Dropdown.Item>
        <Dropdown.Item >Trivandrum</Dropdown.Item>
        <Dropdown.Item >Kollam</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <button className='btn btn-danger' onClick={handleShow1}>SignIn</button>
    <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Get Started...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row my-4'>
          <div className='col-md-4'></div>

            <div className='col-md-9 ms-5 d-flex'>
              <input  type="text" className='form-control mb-3' placeholder='Continue with Google'/>
              <i class="fa-brands fa-google" style={{marginTop:'12px',marginLeft:'-380px', color:'black'}}></i>
              </div>

              <div className='col-md-9 ms-5 d-flex'>
              <input type="text" placeholder='Continue with Email' className='form-control mb-3' />
              <i class="fa-solid fa-envelope" style={{marginTop:'12px',marginLeft:'-380px', color:'black'}}></i>
              </div>
              <div className='col-md-9 ms-5 d-flex'>
              <input type="text" placeholder='Continue with Apple' className='form-control mb-3' />
              <i class="fa-brands fa-apple" style={{marginTop:'12px',marginLeft:'-380px', color:'black'}}></i>
              </div>
          </div>
          <div>
            <p style={{textAlign:'center'}}>OR</p>
          </div>
          <div>
          <h6 className='text-center mb-3 mt-3'>Sign In To Your Account</h6>
          </div>
          <div className='col-md-9 ms-5 d-flex'>
                      <input type="text" placeholder='Email Id' className='form-control rounded mb-3'/>
                   </div>
                   <div className='col-md-9 ms-5 d-flex'>
                    <input type="password" placeholder='Password' className='form-control rounded '/>
                   </div>
                   <div className='mb-3 mt-3 ms-5'>
                      <button className='btn btn-danger rounded' >LOGIN</button>
                      <p className='mt-3'>Not Registered Yet? Click Here To<Link className='ms-2' style={{ textDecoration:'none'}} to={'/register'}>REGISTER</Link></p>
                    </div>

        </Modal.Body>
      </Modal>

          <Button variant="light" onClick={handleShow2}>
        <i class="fa-solid fa-list"></i>
      </Button>

      <Offcanvas show={show2} onHide={handleClose2} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hey..!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div style={{height:'100vh'}} className='d-flex align-items-center flex-column'>
          <img src="https://static.vecteezy.com/system/resources/previews/022/876/296/large_2x/server-under-maintenance-and-repair-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          height='300px' alt="" />
          <h3 className='text-danger fw-bolder'>Server Under Maintenance</h3>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
      </Navbar>
      <div>
      <Navbar bg="light" data-bs-theme="light" className='d-flex'>
        <Container>
          
          <Nav className="me-auto">
           <Link to={'/movies'} style={{textDecoration:'none',color:'black'}} >Movies</Link> 
           <Link to={'/streams'} style={{textDecoration:'none',color:'black'}} className='ms-3'>Streams</Link>
           <Link to={'/events'} style={{textDecoration:'none',color:'black'}} className='ms-3'>Events</Link>
           <Link to={'/sports'} style={{textDecoration:'none',color:'black'}} className='ms-3'>Sports</Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link>ListYourShows</Nav.Link>
            <Nav.Link>Offers</Nav.Link>
            <Nav.Link>GiftCards</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div> 
    </>
  )
}

export default Header