import Navbar from "../components/Navbar"
import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';



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
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="flex flex-col rounded-md items-center justify-center">
          <h1 className="text-center w-2/3 text-lg mb-6 font-bold">Search for your apartment at Texas State</h1>
          <input className="border-2 border-black pl-2 pr-20 py-3 rounded-lg"
            type="text"
            placeholder="search"
            onChange={handleChange}
            value={searchData.data}/>
        </div>

        <div>
          <h1>Highest Rated Apartments</h1>
        </div>
      </div>
    </>
  )
}

export default Home