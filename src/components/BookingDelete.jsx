"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";

export function BookingDelete({ bookingId }) {

    const handleBooking = async () => {
       const {data:tokenData} =await authClient.token()
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${tokenData?.token}`,
            },
          },
        );

        const data =  await res.json();

        window.location.reload()
    }
    
  return (
    <AlertDialog>
      <Button className={"rounded-sm"} variant="danger">
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleBooking} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
