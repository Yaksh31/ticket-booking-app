import React, { useState } from 'react';
import EventHeader from './EventHeader';
import TicketOption from './TicketOption';
import OrderCheckout from './OrderCheckout';
import './Checkout.css';
import Header from './Header';
import Footer from './Footer';

const Checkout = () => {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticketName, price) => {
    const existingTicket = tickets.find(ticket => ticket.name === ticketName);
    if (existingTicket) {
      setTickets(tickets.map(ticket =>
        ticket.name === ticketName
          ? { ...ticket, quantity: ticket.quantity + 1 }
          : ticket
      ));
    } else {
      setTickets([...tickets, { name: ticketName, price, quantity: 1 }]);
    }
  };

  const incrementTicket = (ticketName) => {
    setTickets(tickets.map(ticket =>
      ticket.name === ticketName
        ? { ...ticket, quantity: ticket.quantity + 1 }
        : ticket
    ));
  };

  const decrementTicket = (ticketName) => {
    setTickets(tickets.map(ticket =>
      ticket.name === ticketName && ticket.quantity > 1
        ? { ...ticket, quantity: ticket.quantity - 1 }
        : ticket
    ));
  };

  const clearTicket = (ticketName) => {
    setTickets(tickets.filter(ticket => ticket.name !== ticketName));
  };

  const orderAmount = tickets.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0);
  const bookingFee = 54; // Example booking fee
  const total = orderAmount + bookingFee;

  return (
    <div className="checkout-app">
        <Header className="checkout-header"/>
      <EventHeader className="checkout-event-Header" title="Oh Hello! - A Stand-up Comedy Special by Talyu Pookie 💖" date="Wed, 3 Oct | 5:00 PM" location="Vadodara" />
      
      <div className="checkout-tickets-section">
        <TicketOption ticketName="Entry Ticket" price={499} description="Entry for One Person" onAdd={() => addTicket('Entry Ticket', 499)} />
        <TicketOption ticketName="Family Entry Ticket" price={1499} description="Entry for Four People" onAdd={() => addTicket('Family Entry Ticket', 1499)} />
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
        onContinue={() => alert('Proceeding to Payment')} 
      />
      <Footer/>
    </div>
  );
};

export default Checkout;
