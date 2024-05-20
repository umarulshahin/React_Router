import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Remark = () => {
    const {remark}=useOutletContext()
    console.log(remark)
  return (
    <div className="bg-blue-200 border border-4 ml-4 py-4 border-blue-900">
        {remark.map((item, index) => (
            <div className='font-medium text-xl mx-4' key={index}>{item}</div>
        ))}
    </div>
  )
}

export default Remark