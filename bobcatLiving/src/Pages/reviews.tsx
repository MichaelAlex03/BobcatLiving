import React from 'react'
import Navbar from '../components/Navbar';
import ReviewCard from '../components/reviewCard'

export const Reviews = () => {
  return (
    <>
      <Navbar />
      <div className='p-5'>
        <button className='submit'><a href="/createReview">Leave Review</a></button>
        <div className='flex flex-col m-5 gap-4'>
          <ReviewCard 
            username='Michael'
            title="Review 1"
            date="01/10/11"
            content="This apartment was great" 
            rating={4}/>
          <ReviewCard 
            username='Michael'
            title="Review 1"
            date="01/10/11"
            content="This apartment was great" 
            rating={2}/>
          <ReviewCard
            username='Michael'
            title="Review 1"
            date="01/10/11"
            content="I've lived in this community since November 2014 The staff is responsive and kind, the building is well maintained and safe, and the location is great. Only one issue - The parking lot is damage, all the rebar exposed on the ground and scratch our car tires badly. I've lived here. When that is fixed someday? I'll have no complaints! I recommend SunBlossom Cottages as a great place to live." 
            rating={3}/>
        </div>
      </div>
    </>
  )
}


export default Reviews;
