import ApartmentCard from "../components/ApartmentCard";
import Navbar from "../components/Navbar";

export default function ApartmentsPage() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen grid grid-rows-[40%_60%] grid-cols-1 md:grid-cols-[40%_60%] md:grid-rows-1">
        <div className="h-full flex items-center justify-center bg-gray-100">
          This is where the map will maybe go
        </div>
        <div className="flex flex-col items-center p-5 h-full">
          <p className="font-bold text-3xl pb-4">Apartments & Dorms at TXST</p>
          <div className="grid grid-cols-2 w-full gap-4 overflow-scroll">
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
          </div>
        </div>
      </div>
    </>
  );
}
