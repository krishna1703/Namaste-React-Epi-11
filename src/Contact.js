import React from 'react'

const Contact = () => {
  return (

    <>
      <div className='w-3/4 m-auto  mt-16 mb-10'>
        <img className='m-auto  h-64' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYbCHINqFguLkpEWZEiCK9FiXFCHSpl3L_A&usqp=CAU" alt='contact-img'></img>
      </div>

      <div className='flex w-3/4 m-auto  mt-15 mb-10 items-center  shadow-2xl  shadow-slate-300 rounded-2xl h-auto p-5  justify-evenly'>
        <div className='w-1/2'>
          <h2 className='font-bold text-3xl text-green-600 font-serif'  >CONTACT DETAILS</h2>
          
          <br></br>
          <h3 className='font-semibold text-2xl font-serif  text-green-600 ' > EMAIL US :</h3>
          <h4 className='text-gray-400 text-xl  font-semibold '>General enquiries ---  <span className='text-red-600 text-xl'>info@happy.krishna.kumar.com</span></h4>
          <h4 className='text-gray-400 text-xl  font-semibold ' >Support enquiries ---   <span  className='text-red-600 text-xl'  >krishnasharma30.com</span> </h4>
          <br></br>
          <h3 className='font-semibold text-2xl  font-serif  text-green-600 ' > CALL US :</h3>
          <h4 className='text-gray-400 text-xl  font-semibold  ' >General enquiries - <span className='text-red-600 text-xl' >0333 242 7072</span></h4>
          <h4 className='text-gray-400  text-xl  font-semibold ' >Support enquiries - <span className='text-red-600 text-xl'  >+44(0) 121 329 4650</span></h4>
          <br></br>
          <h3 className='font-semibold text-2xl font-serif  text-green-600 ' > OPENING HOURS :</h3>
          <h4 className='text-gray-400 text-xl  font-semibold ' >General enquiries - <span className='text-red-600 text-xl' > Monday to friday : 9am - 8pm .Saturdays : 11am - 5pm .</span></h4>
          <h4 className='text-gray-400 text-xl  font-semibold  ' >Support enquiries - <span className='text-red-600 text-xl' >Monday to friday : 9am - 5pm</span></h4>
        </div>
        <div className=' w-72'>
          <h2  className='font-semibold text-2xl font-serif  text-green-600 ' >ADDRESS :</h2>
          <br></br>
 <p className='text-red-600 text-xl' > 1760 solihull park Birmingham business park kanpur up India</p>

        </div>
      </div>


    </>

  )
}

export default Contact;