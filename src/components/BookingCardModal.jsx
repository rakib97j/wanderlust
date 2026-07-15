"use client";

import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label, Modal } from "@heroui/react";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export function BookingCardModal({ destinationDetails }) {
  // user Data
  const { data: session } = authClient.useSession();
  const user = session?.user;

  //   Date
  const [departureDate, setDepartureDate] = useState(null);
  //   destination details
  const { _id, destinationName, price, imageUrl, country } = destinationDetails;

  const handelBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
     if (data.acknowledged) {
       toast.success("Your booking has been confirmed! 🎉");
     } else {
       toast.error("Booking failed!");
     }
  };

   

  return (
    <Modal>
      <Button
        className={
          "mt-10 w-full rounded-sm bg-cyan-500 hover:bg-cyan-400 text-white py-4  text-lg font-semibold transition"
        }
      >
        Booking Now
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px] rounded-sm ">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>{destinationName}</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>Starting from</p>
              <p className="text-2xl text-black">$ {price}</p>
              <p>per person</p>
              <hr />

              <div className="mt-2.5">
                <DateField
                  isRequired
                  onChange={setDepartureDate}
                  className="w-[256px]"
                  name="date"
                >
                  <Label>Departure Date</Label>
                  <DateField.Group>
                    <DateField.Input>
                      {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                  </DateField.Group>
                </DateField>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                slot="close"
                onClick={handelBooking}
                className="w-full  bg-cyan-500 hover:opacity-60 rounded-sm"
              >
                Confirm Booking
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
