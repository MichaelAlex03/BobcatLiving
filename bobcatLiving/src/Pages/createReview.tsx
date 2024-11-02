import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from '@mui/material/Slider'

interface Review{
    title: String,
    date: Number,
    reviewContent: String
}

export const CreateReview = () => {

    const [reviewData, setReviewData] = useState<Review>({title: "", date: 0, reviewContent: ""})
    const [rating, setRating] = useState('');

    const marks = [{
        value: 20,
        label: '1'
    },
    {
        value: 40,
        label: '2'
    },
    {
        value: 60,
        label: '3'
    },  
    {
        value: 80,
        label: '4'
    },  
    {
        value: 100,
        label: '5'
    }]

    const getLabel = (value: number) => {
       const mark = marks.find(mark => mark.value === value);
       return mark ? mark.label : '';
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setReviewData(prevReviewData => ({...prevReviewData, [name]: value}))
    }

    console.log(reviewData)


    return (
        <div className=''>
            <Navbar />
            <div className='flex flex-col items-center'>
                <div className='flex flex-col justify-center items-center m-5'>
                    <h1 className='text-3xl font-bold'>Create Review</h1>
                    <p className='text-l font-bold'>for Bobcat Village</p>
                </div>
                <div className='flex flex-col h-[80vh] w-[80vw]'>
                    <div>
                        <label htmlFor='title'>Rating</label>
                        <div className='flex gap-4'>
                            <Slider 
                                aria-label='Restricted values'
                                valueLabelDisplay='auto'
                                getAriaValueText={getLabel}
                                step={null}
                                marks={marks}/>
                            <input className='border-2 border-gray-300 rounded-md w-[15vw] h-[5vh]'
                                onChange={handleChange}
                                type='text'
                                name='rating'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='title'>Title</label>
                        <input className='border-2 border-gray-300 rounded-md'
                            onChange={handleChange}
                            type='text'
                            name='title'
                            placeholder='Title'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='title'>Review</label>
                        <input className='border-2 border-gray-300 rounded-md h-[20vh]'
                            onChange={handleChange}
                            type='text'
                            name='reviewContent'
                        />
                    </div>
                    <button type='submit' className='submit mt-5'>Submit</button>
                </div>
            </div>
            
        </div>
    )
}

export default CreateReview
