import React, { useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Simmeruicards from "./Simmeruicards";
import { Link } from "react-router-dom";
import { ListofRestaurent } from "../utils/constants";


const Body = () => {
  const [listofRes, SetlistofRes] = useState([]);
  const [FilteredlistofRes, SetFilteredlistofRes] = useState([]);
  const [Searchlistofres, SetSearchlistofres] = useState("");
  const [searchResult, setSearchResult] = useState(true);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ListofRestaurent);

    const Data = await data.json();

    SetlistofRes(Data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    SetFilteredlistofRes(Data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };





  if (listofRes.length == 0) {

    return <Simmeruicards />
  }




  return (

    <div className="bg-gray-100 shadow-2xl mb-10  m-auto rounded-2xl">

<br></br>

      <div className="  flex  flex-wrap justify-around p-6 items-center  rounded-2xl mx-5 m-auto 
       shadow-lg text-center gap-5 bg-gray-50">
        <div className="font-bold text-xl text-orange-600 ">
          <h2>
            <span className="text-green-500"> Welcome to </span> food point
          </h2>
        </div>

        <div className=" flex  gap-5 mx-10 ">
          <input
            type="search"
            className="bg-gray-100 outline-none p-1 px-16 rounded-md text-green-700 "
            placeholder="search item ......"
            value={Searchlistofres}
            onChange={(e) => {
              SetSearchlistofres(e.target.value);
            }}
          ></input>

          <button
            className=" bg-green-500  rounded-md     p-2 text-white"
            onClick={() => {
              const filteredRes = listofRes.filter((Res) =>
                Res?.info?.name
                  .toLowerCase()
                  .trim()
                  .includes(Searchlistofres.toLowerCase().trim())
              );
              if (filteredRes.length) {
                setSearchResult(true);
              } else setSearchResult(false);

              SetFilteredlistofRes(filteredRes);
            }}
          >
            Search food
          </button>
        </div>

        <div className="flex mx-10 gap-10">
          <button
            className=" p-2  bg-green-500  rounded-md text-white"
            onClick={() => {
              const lists = listofRes.filter((res) => res?.info?.avgRating < 3);

              SetFilteredlistofRes(lists);
            }}
          >
            3 ⭐ Rating
          </button>


          <button
            className=" p-2  bg-green-500  rounded-md text-white"
            onClick={() => {
              const lists = listofRes.filter((res) => res?.info?.avgRating > 4.0);

              SetFilteredlistofRes(lists);
            }}
          >
         4 ⭐ Rating
          </button>
        </div>
      </div>




      <div className="flex flex-wrap m-2 justify-center ">
        {searchResult ? (
          FilteredlistofRes.map((res) => {
            return (
              <Link to={"/restaurents/" + res?.info.id} key={res?.info.id}>
                  <RestaurentCard resData={res?.info} />
                </Link>
            );
          })
        ) : (
          <div className="w-full flex justify-center">
            <img
              className="w-[70%] mt-32 mb-28 "
              src="https://getfood.co.uk/themes-nct/images-nct/no-result-found-white.jpeg"
            />
          </div>
        )}
      </div>
    </div>
  )
};

export default Body;
