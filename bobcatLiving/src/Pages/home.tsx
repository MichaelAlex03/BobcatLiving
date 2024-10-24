import Navbar from "../components/Navbar"
import React from 'react'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col rounded-md justify-center items-center h-[80vh]">
        <h1>Search for your apartment at Texas State</h1>
        <input className="border-2 pl-2 pr-20 py-3 rounded-lg"
          type="text"
          placeholder="search"/>
      </div>
    </div>
  )
}

export default Home