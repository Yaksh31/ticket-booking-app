// components/OrderCheckout.jsx
import React from 'react';
import './OrderCheckout.css';

const OrderCheckout = ({ tickets, onIncrement, onDecrement, onClear, orderAmount, bookingFee, total, onContinue }) => {
  return (
    <div className="order-checkout">
      <h3>Order Summary</h3>

      <div className="tickets-summary">
        {tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <div key={index} className="ticket-summary">
              <div className="ticket-details">
                <p>{ticket.name} x {ticket.quantity}</p>
                <p>₹{ticket.price * ticket.quantity}</p>
              </div>
              <div className="ticket-actions">
                <button onClick={() => onDecrement(ticket.name)}>-</button>
                <button onClick={() => onIncrement(ticket.name)}>+</button>
                <button onClick={() => onClear(ticket.name)}>Clear</button>
              </div>
            </div>
          ))
        ) : (
          <p>No tickets selected</p>
        )}
      </div>

      <div className="payment-details">
        <h3>Payment Details</h3>
        <div className="payment-row">
          <p>Order Amount</p>
          <p>₹{orderAmount}</p>
        </div>
        <div className="payment-row">
          <p>Booking Fee</p>
          <p>₹{bookingFee}</p>
        </div>
        <div className="payment-row total">
          <p>Total</p>
          <p>₹{total}</p>
        </div>
      </div>

      <button className="continue-button" onClick={onContinue}>
        CONTINUE
      </button>
    </div>
  );
};

export default OrderCheckout;
