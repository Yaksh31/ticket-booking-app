import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import EventHeader from "./EventHeader";
import TicketOption from "./TicketOption";
import OrderCheckout from "./OrderCheckout";
import "./Checkout.css";
import Header from "./Header";
import Footer from "./Footer";

const Checkout = () => {
  const [tickets, setTickets] = useState([]);
  const { eventId } = useParams(); // Get eventId from the URL
  const location = useLocation();

  const addTicket = (ticketName, price) => {
    const existingTicket = tickets.find((ticket) => ticket.name === ticketName);
    if (existingTicket) {
      setTickets(
        tickets.map((ticket) =>
          ticket.name === ticketName
            ? { ...ticket, quantity: ticket.quantity + 1 }
            : ticket
        )
      );
    } else {
      setTickets([...tickets, { name: ticketName, price, quantity: 1 }]);
    }
  };

  const incrementTicket = (ticketName) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.name === ticketName
          ? { ...ticket, quantity: ticket.quantity + 1 }
          : ticket
      )
    );
  };

  const decrementTicket = (ticketName) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.name === ticketName && ticket.quantity > 1
          ? { ...ticket, quantity: ticket.quantity - 1 }
          : ticket
      )
    );
  };

  const clearTicket = (ticketName) => {
    setTickets(tickets.filter((ticket) => ticket.name !== ticketName));
  };

  const orderAmount = tickets.reduce(
    (sum, ticket) => sum + ticket.price * ticket.quantity,
    0
  );
  const bookingFee = 54; // Example booking fee
  const total = orderAmount + bookingFee;

  // Handle booking API call
  const handleBooking = async () => {
    if (!localStorage.getItem("token")) {
      alert("You need to be logged in to book tickets");
      return;
    }

    try {
      const bookingData = {
        event: eventId, // Use the passed event ID
        seats: tickets.reduce((total, ticket) => total + ticket.quantity, 0),
        totalPrice: total, // Include the total amount including booking fee
      };

      const response = await axios.post(
        "http://localhost:3000/api/bookings",
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Corrected Authorization header
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        alert("Booking successful!");
        // Redirect or reset tickets here
      } else {
        throw new Error("Booking failed");
      }
    } catch (error) {
      console.error("Error creating booking:", error.response?.data || error.message);
      alert(`Booking failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="checkout-app">
      <Header className="checkout-header" />
      <EventHeader
        className="checkout-event-header"
        title="Oh Hello! - A Stand-up Comedy Special by Talyu Pookie 💖"
        date="Wed, 3 Oct | 5:00 PM"
        location="Vadodara"
      />

      <div className="checkout-tickets-section">
        <TicketOption
          ticketName="Entry Ticket"
          price={499}
          description="Entry for One Person"
          onAdd={() => addTicket("Entry Ticket", 499)}
        />
        <TicketOption
          ticketName="Family Entry Ticket"
          price={1499}
          description="Entry for Four People"
          onAdd={() => addTicket("Family Entry Ticket", 1499)}
        />
      </div>

      <OrderCheckout
        className="checkout-order"
        tickets={tickets}
        onIncrement={incrementTicket}
        onDecrement={decrementTicket}
        onClear={clearTicket}
        orderAmount={orderAmount}
        bookingFee={bookingFee}
        total={total}
        onContinue={handleBooking}
      />
      <Footer />
    </div>
  );
};

export default Checkout;
