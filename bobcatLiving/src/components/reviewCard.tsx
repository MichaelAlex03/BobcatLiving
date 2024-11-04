import React, { FC } from 'react'
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

interface ReviewProps{
    username: string,
    title: string,
    date: string,
    content: string,
    rating: number
}

export const ReviewCard: FC<ReviewProps> = ({title, date, content, username, rating}): JSX.Element => {
  return (
    <div className='border-2 w-full rounded-lg shadow-md select-none p-5'>
      <div className='flex items-center gap-2'>
        <img src='../images/avatar.jpg'
          width="50px"
          height="20px"
        />
        <p>{username}</p>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
      <div className='flex justify-between items-center'>
        <StarRating rating={rating} />
        <p>{date}</p>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  )
}

function getStatus(rating: number, position: number) {
  if (rating >= position) {
    return "filled";
  } else if (position - rating === 0.5) {
    return "half";
  } else {
    return "empty";
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      <Star status={getStatus(rating, 1)} />
      <Star status={getStatus(rating, 2)} />
      <Star status={getStatus(rating, 3)} />
      <Star status={getStatus(rating, 4)} />
      <Star status={getStatus(rating, 5)} />
    </div>
  );
}

function Star({ status }: { status: "filled" | "half" | "empty" }) {
  return status === "filled" ? (
    <TiStarFullOutline />
  ) : status === "half" ? (
    <TiStarHalfOutline />
  ) : (
    <TiStarOutline />
  );
}

export default ReviewCard
