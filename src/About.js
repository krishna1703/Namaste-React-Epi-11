import React from 'react'


const About = () => {
  return (
    <div>

<h2 className='font-bold text-green-600 text-2xl
 mt-10 mb-10 text-center '>About <span className='text-red-500'>Us</span></h2>
    
    <div className='flex  justify-evenly text-center items-center mt-40 mb-60 m-auto w-3/4  '>


    <div className=' text-green-500 mt-10 w-[50%] mb-10 '>
    <h3 className='text-6xl mb-5 font-bold font'> Welcome to <span className='text-red-400'>Food Point</span> </h3> 
    <p className='text-base text-black font-medium'>At Foot Point, we believe that great food and exceptional service go hand in hand. Our restaurant is a cozy and inviting 
    space where you can relax and enjoy a memorable dining experience. Whether you're joining us for a quick bite or a leisurely meal,
     our dedicated team is committed to providing you with outstanding service and delicious food.</p>
     
    </div>


    <div className='w-[30%]  ' >
      <img  className='w-auto' src='https://foodfire-app.netlify.app/burger-image.ec55d069.png' alt='burger-img'></img>
    </div>
    </div>
    </div>
  )
}

export default About;