import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from '@mui/material/Slider'

interface Review{
    title: string,
    date: string,
    reviewContent: string
}

export const CreateReview = () => {

    //Getting the date
    const today = new Date();

    const year = today.getFullYear()
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const date = month + "/" + day + "/" + year;

    const [reviewData, setReviewData] = useState<Review>({title: "", date: date, reviewContent: ""})


    const [rating, setRating] = React.useState<number>(1);

    const handleSlider = (event: Event, newValue: number | number[]) => {
        setRating(newValue as number);
    };

    console.log(rating)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setReviewData(prevReviewData => {
            return {
              ...prevReviewData,
              [name]: value,
            };
          })
    }

    console.log(reviewData)



    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center h-[90vh]'>
                <div className='flex flex-col mt-5'>
                    <h1 className='text-3xl font-bold'>Create Review</h1>
                    <p className='text-l font-bold text-center'>for Bobcat Village</p>
                </div>
                <div className='flex flex-col h-[80vh] w-[80vw] gap-2 sm:w-[60vw] md:w-[50vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[40vw]'>
                    <div>
                        <label htmlFor='title'>Rating</label>
                        <div className='flex gap-4'>
                            <Slider 
                                aria-label='Restricted values'
                                valueLabelDisplay='auto'
                                defaultValue={1}
                                min={1}
                                max={5}
                                step={1}
                                value={rating}
                                onChange={handleSlider}
                            />
                            <input className='border-2 border-gray-300 w-[15vw] 2xl:w-[10vw] h-[5vh]'
                                type='text'
                                name='rating'
                                value={rating}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='title'>Title</label>
                        <input className='border-2 border-gray-300'
                            onChange={handleChange}
                            type='text'
                            name='title'
                            placeholder='Title'
                            id='title'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='title'>Date</label>
                        {reviewData.date}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='reviewContent'>Review</label>
                        <textarea className='border-2 border-gray-300 h-[20vh]'
                            onChange={handleChange}
                            value={reviewData.reviewContent} //Ensures that what is inputed is a string
                            name='reviewContent'
                            id='reviewContent'></textarea>
                    </div>
                    <button type='submit' className='submit mt-5'><a href="/reviews">Create Review</a></button>
                </div>
            </div>
        </>
    )
}

export default CreateReview
