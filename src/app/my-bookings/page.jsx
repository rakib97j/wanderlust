import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const myBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), 
  });
  const user = session?.user;


  const res = await fetch(
    `http://localhost:5000/booking/${user?.id}`,
  );

  const BookingData = await res.json()





    return (
      <div className="bg-[#8cceda60]">
        <div className="py-28 max-w-7xl mx-auto ">This is my Booking Page</div>
      </div>
    );
};

export default myBookingPage;