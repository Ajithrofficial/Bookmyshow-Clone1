import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import MovieCard from './MovieCard';
import StreamCard from './StreamCard';

function StreamList() {
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
          <h4 className='textStyle mb-3'>Premier Of The Week</h4>
          <MovieCard/>
        </div>
      </div>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <div className='col-md-9 mt-5' style={{width:'fit-content'}}>
          <h4 className='textStyle mb-3'>New On Stream</h4>
          <MovieCard/>
        </div>
      </div>

      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <div className='col-md-9 mt-5' style={{width:'fit-content'}}>
          <h4 className='textStyle mb-3'>Upcoming Releases</h4>
          <MovieCard/>
        </div>
      </div>
      </>
  )
}

export default StreamList