const mongoose = require('mongoose');
const Event = require('../models/Event'); // Assuming Event model path is correct
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    seedEvents();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Sample event data
const events = [
    {
      title: 'Yashvi Navratri 2024 with Kinjal Dave',
      description: 'Join us for the biggest Navratri celebration with Kinjal Dave!',
      date: new Date('2024-10-03T17:00:00'),
      location: 'Vadodara, Gujarat',
      price: 500,
      seatsAvailable: 50,
      totalSeats: 100,
      imageName: 'event_card_1.png', // Just the filename as stored in assets
    },
    {
      title: 'LLC T20 - Konark Suryas Odisha vs Manipal Tigers',
      description: 'Exciting T20 cricket match between Konark Suryas and Manipal Tigers.',
      date: new Date('2024-10-03T17:00:00'),
      location: 'Vadodara, Gujarat',
      price: 700,
      seatsAvailable: 30,
      totalSeats: 50,
      imageName: 'event_card_2.png', // Filename in assets
    },
    {
      title: 'Pink 10K Challenge Vadodara',
      description: 'Participate in the exciting Pink 10K Challenge in Vadodara!',
      date: new Date('2024-12-15T07:00:00'),
      location: 'Vadodara, Gujarat',
      price: 300,
      seatsAvailable: 100,
      totalSeats: 200,
      imageName: 'event_card_3.png', // Filename in assets
    },
    {
      title: "Kommune Vadodara's Open Mic",
      description: 'Open mic event for poetry, stories, and music lovers.',
      date: new Date('2024-10-03T17:00:00'),
      location: 'Vadodara, Gujarat',
      price: 0,
      seatsAvailable: 25,
      totalSeats: 50,
      imageName: 'event_card_4.png', // Filename in assets
    }
  ];
  

// Seed function
async function seedEvents() {
  try {
    await Event.insertMany(events);
    console.log('Events seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding events:', error.message);
    mongoose.connection.close();
  }
}
