import {  getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
const Cards = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]= useState(false);
  useEffect(()=>{
    async function getData(){
      setLoading(true); 
      const _data= await getDocs(moviesRef);
     _data.forEach((doc)=>{
      setData((prev)=>[...prev,{...(doc.data()), id:doc.id}])
     })
      setLoading(false)
    }
    getData();
  },[])
  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
    {loading ?  <div  className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="white"/></div>:
      data.map((e, i) => {
        return (
         <Link to={`/details/${e.id}`}> <div key={i} className="bg-gray-900  font-medium shadow-lg p-3 hover:translate-y-2 cursor-pointer mt-6 transition-all duration-500">
            <img
              className="h-60 md:h-72"
              src={e.image}
            />
            <h1>
              {e.title}
            </h1>
            <h1 className="flex item-center">
              <span className="text-blue-500 mr-1">Rating:</span>{e.rating}
              <ReactStars size={20}
                half={true}
                value={e.rating/e.rated}
                edit={false}
              />
            </h1>
            <h1>
              <span className="text-blue-500">Year:</span>{e.year}
            </h1>
          </div></Link>
        );
      })
    }
    </div>
  );
};

export default Cards;
