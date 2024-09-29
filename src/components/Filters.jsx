import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function Filters() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
  return (
    <>
    <div>
    <div className='shadow p-4' >
       <div className='d-flex '>
          <h5>Language</h5>
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
                 <p>Malayalam</p>
                 
               </div>
              
            </div>
          </Collapse>
       </div>

       <div className='shadow p-4 '>
       <div className='d-flex'>
          <h5>Genres</h5>
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
                 <p>Thriller</p>
                 
               </div>
              
            </div>
          </Collapse>
       </div>

       <div className='shadow p-4 '>
       <div className='d-flex'>
          <h5>Format</h5>
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
                 <p>3D</p>
                 
               </div>
              
            </div>
          </Collapse>
       </div>

       </div>
    </>
  )
}

export default Filters