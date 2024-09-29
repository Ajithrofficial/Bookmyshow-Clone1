import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Sports() {
  return (
    <div>
      <div className='d-flex justify-content-center  align-items-center flex-column mb-5 mt-5 '>
        <h4 className='textStyle '>Sports in your location</h4>
        </div>
        <div className='d-flex justify-content-center  align-items-center flex-column'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/lib/tr:w-600/no-entertainement-in-area-202007011731.png" height='200px' />
      <Card.Body>
        <Card.Title>Nope! Nothing! Nada!</Card.Title>
        <Card.Text>
        Sorry! There was nothing to load on this page. Kindly visit the homepage for more entertainment.
        </Card.Text>
        <Link to={'/'}><Button variant="outline-danger" className='ms-5'>Visit Homepage</Button></Link>
      </Card.Body>
    </Card>
        </div>

      

    </div>
  )
}

export default Sports