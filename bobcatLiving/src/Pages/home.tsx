import Navbar from "../components/Navbar"
import React from 'react'

export const Home = () => {
  return (
    <>
    <Navbar />
    <div>
        <div className=" flex rounded-md justify-center">
            <input className=""
            type="text"
            placeholder="search"/>
        </div>
    </div>
    </>
  )
}

export default Home