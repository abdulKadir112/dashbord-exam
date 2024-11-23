import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({to , liItems}) => {
  return (
    <div>
        <li><Link to={to} className='text-[#cac9c9] text-2xl font-semibold capitalize hover:text-white'>{liItems}</Link></li>
    </div>
  )
}

export default Li