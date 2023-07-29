import React from 'react'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <div>

<div className=' flex   w-3/4  text-center gap-10   mt-10  mx-auto  flex-col '>
    
    <div>
      <img src='https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png'
        className=' w-auto  rounded-xl  mx-auto   ' alt='cart-img'></img>
    </div>

    <div>
      <button className="hover:bg-green-400  bg-green-500 rounded-lg text-2xl font-bold text-white px-3 p-4">
        <Link to="/">   Check out  Food  point </Link>

      </button>
    </div>

  </div>

    </div>
  )
}

export default EmptyCart;