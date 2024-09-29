import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import EventFliters from '../components/EventFliters';


function Events() {
  return (
    <div>
      <div >
      <Carousel>
      <Carousel.Item interval={500} >
       <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" className='d-block w-100' alt="" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1724930396379_rambocircus1240x300kochi.jpg" className='d-block w-100' alt="" /> 
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726215338904_cherryblossom1240x300.jpg" className='d-block w-100' alt="" />
      </Carousel.Item>
    </Carousel>
      </div>
      <div >
        <div className='row '>
          <div className='col-md-4'>
            <div className='container mt-5 mb-5  d-flex'>
              <div className='col-md-9 mt-5 ' >
              <h4 style={{textAlign:'center'}}>Filters</h4>

              <EventFliters/>

            </div>
            </div>
          </div>
          
          <div className='col-md-8'>
          <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <div className='col-md-9 mt-5' style={{width:'100%'}}>
          <h4 className='textStyle mb-3'>Recomended Movies</h4>
          
          <div className='container mt-5 mb-5'>
    <div className='cards d-flex  align-item-center justify-content-evenly'>
        <Card style={{ width: '700px', height:'500px' }} className='border border-2 rounded '>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAxMi4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00407124-cdnwwpneac-portrait.jpg" 
      height='400px' width='100%' style={{padding:'5px'}}/>
      <Card.Body>
      <div >
      <Card.Title >A.R.M</Card.Title>
      </div>
      <div>
        <h6 style={{textOverflow:'ellipsis',color:'gray'}}>Action/Adventure/Drama/Period</h6>
      </div>
      </Card.Body>
    </Card>
    <Card style={{ width:'700px', height:'500px' }} className='border border-2 rounded ms-5'>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyMzUuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401439-xdtxcmtyux-portrait.jpg" 
      height='400px' width='100%' style={{padding:'5px'}}/>
      <Card.Body>
      <div >
      <Card.Title >The Greatest Of All Time</Card.Title>
      </div>
      <div>
        <h6 style={{textOverflow:'ellipsis', color:'gray'}}>Action/Drama/Thriller</h6>
      </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '700px', height:'500px' }} className='border border-2 rounded ms-5'>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAyLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408549-uznajdhnpj-portrait.jpg" 
      height='400px' width='100%' style={{padding:'5px'}}/>
      <Card.Body>
      <div >
      <Card.Title >Kondal</Card.Title>
      </div>
      <div>
        <h6 style={{textOverflow:'ellipsis',color:'gray'}}>Action/Crime/Drama</h6>
      </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '700px', height:'500px' }} className='border border-2 rounded ms-5'>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAxNi4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410024-ahngtwkfqu-portrait.jpg" 
      height='400px' width='100%' style={{padding:'5px'}}/>
      <Card.Body>
      <div >
      <Card.Title >Kishkindha Kaandam</Card.Title>
      </div>
      <div>
        <h6 style={{textOverflow:'ellipsis', color:'gray'}}>Mystery/Thriller</h6>
      </div>
      </Card.Body>
    </Card>
    </div>
    </div>


    <div className='container mt-5 mb-5'>
    <div className='cards d-flex  align-item-center justify-content-evenly'>
        <Card style={{ width: '700px', height:'500px' }} className='border border-2 rounded '>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAxMi4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00407124-cdnwwpneac-portrait.jpg" 
      height='400px' width='100%' style={{padding:'5px'}}/>
      <Card.Body>
      <div >
      <Card.Title >A.R.M</Card.Title>
      </div>
      <div>
        <h6 style={{textOverflow:'ellipsis',color:'gray'}}>Action/Adventure/Drama/Period</h6>
      </div>
      </Card.Body>
    </Card>
    <Card style={{ width:'700px', height:'500px' }} className='border border-2 rounded ms-5'>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyMzUuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401439-xdtxcmtyux-portrait.jpg" 
      height='400px' width='100%' style={{padding:'5px'}}/>
      <Card.Body>
      <div >
      <Card.Title >The Greatest Of All Time</Card.Title>
      </div>
      <div>
        <h6 style={{textOverflow:'ellipsis', color:'gray'}}>Action/Drama/Thriller</h6>
      </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '700px', height:'500px' }} className='border border-2 rounded ms-5'>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAyLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408549-uznajdhnpj-portrait.jpg" 
      height='400px' width='100%' style={{padding:'5px'}}/>
      <Card.Body>
      <div >
      <Card.Title >Kondal</Card.Title>
      </div>
      <div>
        <h6 style={{textOverflow:'ellipsis',color:'gray'}}>Action/Crime/Drama</h6>
      </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '700px', height:'500px' }} className='border border-2 rounded ms-5'>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAxNi4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410024-ahngtwkfqu-portrait.jpg" 
      height='400px' width='100%' style={{padding:'5px'}}/>
      <Card.Body>
      <div >
      <Card.Title >Kishkindha Kaandam</Card.Title>
      </div>
      <div>
        <h6 style={{textOverflow:'ellipsis', color:'gray'}}>Mystery/Thriller</h6>
      </div>
      </Card.Body>
    </Card>
    </div>
    </div>




        </div>
      </div>
          </div>
          </div>

        </div>
    </div>
  )
}

export default Events