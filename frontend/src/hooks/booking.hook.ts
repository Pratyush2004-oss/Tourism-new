import { db } from "@/config";
import { Bookings, Users } from "@/config/schema";
import { useUserStore } from "@/store/user.store";
import { BookingInput } from "@/types";
import axios from "axios";
import { desc, eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// razorpay.d.ts
declare global {
  interface Window {
    Razorpay: any;
  }
}
const useBookingHook = () => {
  const { user } = useUserStore();
  const navigate = useRouter();

  const router = useRouter();
  const bookTripWithPayment = async (input: BookingInput) => {
    if (!user) return toast.error("Please login to book a trip");
    try {
      // Create an order
      const response = await axios.post("/api/createOrder", {
        amount: input.PackagePrice, // Replace with the actual amount
        currency: "INR",
      });

      const orderId = response.data.id;

      // Make a payment
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay key ID
        amount: input.PackagePrice, // Replace with the actual amount
        currency: "INR",
        name: "Osan Tourism",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        handler: async (response: any) => {
          // Verify the payment signature
          const verifyResponse = await axios.post("/api/verifyPayment", {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyResponse.data.success) {
            const paymentInfo = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };
            // Payment is successful, update your database
            await db
              .insert(Bookings)
              .values({
                user: user?.id,
                bookingDate: new Date(),
                startDate: input.startDate,
                name: input.PackageName,
                people: input.people,
                days: input.PackageDays,
                placeList: input.PlaceList,
                status: "approved",
                paymentStatus: JSON.stringify(paymentInfo),
              } as any)
              .returning();
            if (response) {
              toast.success("Payment successful!");
              router.push("/account");
            }
          } else {
            toast.error("Payment failed!");
          }
        },
        prefill: {
          name: "Osan Tourism",
          email: "osantourism@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Osan Tourism",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error("Error occurred!");
    }
  };
  const bookTripWithoutPayment = async (input: BookingInput) => {
    try {
      // checking for all the fields
      if (
        !(
          input.PackageName &&
          input.PackageDays &&
          input.PackagePrice &&
          input.people &&
          input.startDate
        )
      ) {
        toast.error("All fields are required");
        return;
      }
      if (!user) return toast.error("Please login to book a trip");
      const response = await db
        .insert(Bookings)
        .values({
          user: user?.id,
          bookingDate: new Date(),
          startDate: input.startDate,
          name: input.PackageName,
          people: input.people,
          days: input.PackageDays,
          placeList: input.PlaceList,
          status: "pending",
          paymentStatus: "offline",
        } as any)
        .returning();

      if (response) {
        toast.success("Trip Booked Successfully");
        navigate.push("/account");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later");
    }
  };

  const getAllTourBookings = async () => {
    try {
      if (!user) return { error: "User not found" };

      const fetchBookings = await db
        .select({
          id: Bookings.id,
          date: Bookings.bookingDate,
          startDate: Bookings.startDate,
          people: Bookings.people,
          days: Bookings.days,
          price: Bookings.price,
          placeList: Bookings.placeList,
          name: Bookings.name,
          status: Bookings.status,
          user: {
            name: Users.name,
            id: Users.id,
            email: Users.email,
          },
        })
        .from(Bookings)
        .fullJoin(Users, eq(Bookings.user, Users.id))
        .where(eq(Bookings.user, user.id))
        .orderBy(desc(Bookings.bookingDate));

      return fetchBookings;
    } catch (error) {
      return { error: "Something went wrong" };
    }
  };

  return { bookTripWithoutPayment, getAllTourBookings, bookTripWithPayment };
};

export default useBookingHook;
