import React from 'react'
import Navbar from '../components/Navbar';
import ReviewCard from '../components/reviewCard'

export const Reviews = () => {
  return (

    <div>
      <Navbar/>
      <button><a href="/createReview">Leave Review</a></button>
    </div>
  )
}

export default Reviews;
