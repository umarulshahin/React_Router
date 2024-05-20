import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div className="p-8 m-8 max-h-full bg-white">
    <div className='text-2xl font-bold flex justify-center'>
        Sorry ,Notfound
       
    </div>
     <div className=' flex justify-center '>
            <Link to={"/"}> Home Page</Link>
        </div>
    </div>
  )
}

export default Notfound