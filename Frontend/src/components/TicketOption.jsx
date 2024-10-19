// components/TicketOption.jsx
import React from 'react';
import './TicketOption.css';

const TicketOption = ({ ticketName, price, description, onAdd }) => {
  return (
    <div className="ticket-option">
      <div className="ticket-info">
        <h4>{ticketName}</h4>
        <p>{description}</p>
      </div>
      <div className="ticket-action">
        <h5>₹{price}</h5>
        <button onClick={onAdd}>ADD</button>
      </div>
    </div>
  );
};

export default TicketOption;
