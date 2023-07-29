import React from 'react'
import { useState } from "react";
import ItemCard from './ItemCard';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { IconContext } from "react-icons";


const Menuu = ({menu}) => {


  
  const MenuitemsCards = menu?.card?.card?.itemCards;

  

//  console.log(menu)
  const [isVisible, setIsVisible] = useState("false");



  return (
    <>
      <div className='m-auto p-2'>

       

        <div className=' bg-gray-100 flex items-center 
         text-center justify-between m-auto w-3/4 mt-3 px-5 '>
       
          <h3 className='font-medium text-xl px-5 '>{menu?.card?.card?.title} 
          
          <span className='font-medium text-xl px-1 ' >  {menu?.card?.card?.itemCards?.length} </span>
          
           </h3>

     
          {MenuitemsCards && isVisible == "true" && (
            <button className='p-4' onClick={()=> setIsVisible("false")}>
            <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <BsCaretDown />
                </div>
              </IconContext.Provider>
           
            </button>
          )}

          {MenuitemsCards  && isVisible == "false" && (
            <button   className='p-4' onClick={()=> setIsVisible("true")}>
            
            <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <BsCaretUp />
                </div>
              </IconContext.Provider>
            </button>
          )} 
       

        </div>


          { isVisible == "false" &&

          MenuitemsCards?.map((menuitem,index) => {

          key={index}

              return (
                <>
               
                <ItemCard fooditem={menuitem} ></ItemCard>

                
                </>
              )
            })
          }
       


      </div>


    </>
  )
}

export default Menuu;


 