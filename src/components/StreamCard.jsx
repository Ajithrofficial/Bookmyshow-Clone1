import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function StreamCard() {
  return (
    <>
    <div className='container mt-5 mb-5'>
    <div className='cards d-flex align-item-center justify-content-evenly'>

    <Card style={{ width: '18rem' }}>
    <Link to={'./streams'}><Card.Img variant="top"  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png" />
    </Link></Card>
    <Card style={{ width: '18rem' }} className='ms-5'>
      <Link to={'./streams'}><Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png" />
      </Link></Card>
    <Card style={{ width: '18rem' }} className='ms-5'>
    <Link to={'./streams'}><Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png" />
    </Link></Card>
    <Card style={{ width: '18rem' }} className='ms-5'>
    <Link to={'./streams'}><Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png" />
      </Link></Card>
    </div>
    </div>
    </>
  )
}

export default StreamCard