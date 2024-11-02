import Navbar from "../components/Navbar"
import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ApartmentCard from "../components/apartmentCard";



export const Home = () => {
  
  const [searchData, setSearchData] = useState<{ data: string }>({ data: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setSearchData({data: value})
  }
  console.log(searchData)

  return (
    <>
      <Navbar />
      <div className="relative w-full h-[89.9vh]">

        <div className="bg-[url('/images/background.jpg')] absolute inset-0 blur-sm bg-no-repeat bg-cover"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative flex flex-col items-center justify-center h-[40vh]">
          <h1 className="text-center w-[80vw] text-3xl mb-6 font-bold text-white">Search for your apartment at Texas State</h1>
          <input className="border-2 border-black pl-2 pr-20 py-3 rounded-lg"
            type="text"
            placeholder="search"
            onChange={handleChange}
            value={searchData.data}/>
        </div>

        <div className="relative">
          <div className=" inset-5 flex flex-col items-center">
            <h1 className="text-xl text-white font-bold text-center">Highest Rated Apartment and Dorms</h1>
            <h2 className="text-center"><a href="/apartments" className="text-m text-white text-center">View All Apartments</a></h2>
          </div>
          <div className="relative flex">
      
          </div>
        </div>
      </div>
    </>
  )
}

export default Home