import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function EventFliters() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
  return (
    <>
    <div>
    <div className='shadow p-4' >
       <div className='d-flex '>
          <h5>Date</h5>
           <button className='ms-auto btn btn-danger' onClick={() => setOpen1(!open1)}>
             { open1?
               <i class="fa-solid fa-angle-up"></i> :
               <i class="fa-solid fa-angle-down"></i>
             }
           </button>
        </div>
          <Collapse in={open1}>
            <div>
               <div className='d-flex justify-content-center align-items-center'>
                 <p>Calander</p>
                 
               </div>
              
            </div>
          </Collapse>
       </div>

       <div className='shadow p-4 '>
       <div className='d-flex'>
          <h5>Language</h5>
           <button className='ms-auto btn btn-danger' onClick={() => setOpen2(!open2)}>
             { open2?
               <i class="fa-solid fa-angle-up"></i> :
               <i class="fa-solid fa-angle-down"></i>
             }
           </button>
        </div>
          <Collapse in={open2}>
            <div>
               <div className='d-flex justify-content-center align-items-center'>
                 <p>Malayalam</p>
                 
               </div>
              
            </div>
          </Collapse>
       </div>

       <div className='shadow p-4 '>
       <div className='d-flex'>
          <h5>Categories</h5>
           <button className='ms-auto btn btn-danger' onClick={() => setOpen3(!open3)}>
             { open3?
               <i class="fa-solid fa-angle-up"></i> :
               <i class="fa-solid fa-angle-down"></i>
             }
           </button>
        </div>
          <Collapse in={open3}>
            <div>
               <div className='d-flex justify-content-center align-items-center'>
                 <p>Exhibition</p>
                 
               </div>
              
            </div>
          </Collapse>
       </div>

       <div className='shadow p-4 '>
       <div className='d-flex'>
          <h5>More Filters</h5>
           <button className='ms-auto btn btn-danger' onClick={() => setOpen4(!open4)}>
             { open4?
               <i class="fa-solid fa-angle-up"></i> :
               <i class="fa-solid fa-angle-down"></i>
             }
           </button>
        </div>
          <Collapse in={open4}>
            <div>
               <div className='d-flex justify-content-center align-items-center'>
                 <p>Outdoor</p>
                 
               </div>
              
            </div>
          </Collapse>
       </div>

       <div className='shadow p-4 '>
       <div className='d-flex'>
          <h5>Price</h5>
           <button className='ms-auto btn btn-danger' onClick={() => setOpen5(!open5)}>
             { open5?
               <i class="fa-solid fa-angle-up"></i> :
               <i class="fa-solid fa-angle-down"></i>
             }
           </button>
        </div>
          <Collapse in={open5}>
            <div>
               <div className='d-flex justify-content-center align-items-center'>
                 <p>1000</p>
                 
               </div>
              
            </div>
          </Collapse>
       </div>

       </div>
    </>
  )
}

export default EventFliters