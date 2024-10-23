
interface Apartment{
    address: string,
    rating: number
}

export default function apartmentCard(props: Apartment){
    return (
        <div>
            {props.address}
            {props.rating}
        </div>
    )
}