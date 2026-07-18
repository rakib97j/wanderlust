
import { BookingDelete } from "@/components/BookingDelete";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const myBookingPage = async () => {

  const {token} = await auth.api.getToken({
      headers: await headers()
    }) 

  const session = await auth.api.getSession({
    headers: await headers(), 
  });
  const user = session?.user;


  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const bookingData = await res.json()
 

    return (
      <div className="bg-[#8cceda60]">
        <div className="py-28 max-w-7xl mx-auto ">
          <div>
            <h1 className="text-5xl font-medium">My Bookings : {bookingData.length} </h1>
            <p>Manage and view your upcoming travel plans</p>
          </div>
          <div className="grid gap-4 ">
            {bookingData.map((booking) => (
              <div
                key={booking._id}
                className=" gap-10 bg-[#8cceda] p-4  rounded-sm flex"
              >
                <div className="w-[200px] h-[150px] relative overflow-hidden rounded-lg">
                  <Image
                    src={booking.imageUrl}
                    alt={booking.destinationName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h1>{booking.destinationName}</h1>
                  <h1>
                    Departure :{" "}
                    {new Date(booking.departureDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </h1>
                  <p>Booking ID: {booking._id}</p>
                  <p>Price : $ {booking.price}</p>

                  <div>
                    <BookingDelete bookingId={booking._id} />
                    <Button className=" ml-2.5 rounded-sm" variant="primary">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default myBookingPage;