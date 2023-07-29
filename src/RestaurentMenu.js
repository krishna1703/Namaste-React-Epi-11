import React from "react";
import Simmermenucards from "./Simmermenucards";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import Menuu from "./Menuu";

const RestaurentMenu = () => {


    const { resId } = useParams();

    const resinfo = useResMenu(resId);

    const ItemCards = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;





    if (resinfo == null) {
        return < Simmermenucards/>;
    }


    const { name, cuisines, areaName
        , avgRatingString, totalRatingsString, city, locality, }

        = resinfo?.cards[0]?.card?.card?.info;





    const Info = resinfo?.cards[0]?.card?.card?.info;



    return (
        <div className=" mt-4  w-3/4 mx-auto"  >
            <div className=" text-xs mt-8 px-52  " >
                <p>Home / {city} / {locality} / {name}</p>
            </div>

            <div className=" flex  justify-around   items-center py-5 text-center ">

                <div className=" px-2  ">
                    <h3 className="  font-sans  text-2xl font-medium"> {name}</h3>

                    <h3 className=" font-sans "  >{cuisines.join(" ,")}</h3>

                    <h3 className="  font-sans "> {areaName} ,  {Math.round(Info?.sla.lastMileTravel) / 1000} km</h3>
                </div>


                <div className=" border-2 rounded-md p-3 ">
                    <h3> {avgRatingString} ⭐ </h3>

                    <hr></hr>
                    <h3>{totalRatingsString}</h3>
                </div>
            </div>
            <hr className="w-2/3 m-auto h-2"></hr>


            <div className="  w-3/4 mx-auto  my-5">

                <h1 className="text-xl font-semibold ">Menu</h1>
            </div>
            <div >
                {
                    ItemCards.map((menuitem, index) => {

                        key = { index }

                        return (
                            <>


                                <Menuu menu={menuitem} ></Menuu>



                            </>
                        )
                    })

                }

            </div>

           
        </div>
    );
};

export default RestaurentMenu;
