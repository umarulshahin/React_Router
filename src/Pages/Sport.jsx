import React from 'react'
import { useOutletContext } from 'react-router-dom'


const Sport = () => {
    const {sports={}} = useOutletContext()
    console.log(sports)

  return (
    <div className="bg-blue-200 border border-4 ml-4 py-4 border-blue-900">
    {sports && (
        Object.keys(sports).map((res,index) => (
            <div key={index}>
            <div  className="grid grid-cols-6 gap-4 m-2">
                <div className="text-2xl font-medium mx-2">
                    <span>{res}</span>
                </div>
                <div className="text-2xl font-medium mx-4">
                    {sports[res] === 1 ? "Position " + sports[res] : "Participate"}
                </div>
               
            </div>
            <hr className=" border border-3 border-blue-300 m-4" />
            </div>
        ))
    )}
</div>
   
    
  )
}

export default Sport