import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import MovieCard from '../components/MovieCard';
import StreamCard from '../components/StreamCard';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
   
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
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <div className='col-md-9 mt-5' style={{width:'fit-content'}}>
          <h4 className='textStyle mb-3'>Recomended Movies</h4>
          <MovieCard/>
        </div>
      </div>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <div className='col'>
          <Link to={'/streams'}><img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
           height='100%' width='100%' alt="" /></Link>
        </div>
      </div>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <div className='col-md-9 mt-5' style={{width:'fit-content'}}>
          <h4 className='textStyle mb-3'>The Best Of Live Events</h4>
          <StreamCard/>
        </div>
      </div>
    </>
  )
}

export default Home