import backgroundImage from "@/src/assets/background.jpg";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

export default function ApartmentCard() {
  return (
    <div className="w-full h-76 flex flex-col rounded-md shadow-md select-none">
      <img
        src={backgroundImage}
        alt="Apartment image"
        className="rounded-t-md h-32 w-full object-cover"
      />
      <div className="flex flex-col gap-1 w-full p-2">
        <p className="font-bold text-xl">Cool Apartment</p>
        <p className="text-xs">
          601 University Dr, San Marcos, TX 78666 United States
        </p>
        <div className="flex gap-1 items-center">
          <StarRating rating={4} />
          <p className="text-xs">48 Reviews</p>
        </div>
        <p>$1,250 a month</p>
        <button className="mt-4 bg-bar h-8 rounded-md text-white">
          Review
        </button>
      </div>
    </div>
  );
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
