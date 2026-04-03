#  Bus Booking Backend

A Node.js + Express backend for a Bus Booking System.

##  Live API
https://bus-booking-backend-kq8r.onrender.com/api/buses

---

##  Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Render (Deployment)

---

##  Features
- Get list of buses with filters
- Get bus details by ID
- Seat layout with availability
- Book seats with passenger details

---

##  API Endpoints

### 1. Get Buses
GET /api/buses

Query Params:
- departureCity
- arrivalCity

### 2. Get Bus by ID
GET /api/buses/:id

### 3. Book Seats
POST /api/bookings

Body:
```json
{
  "busId": "id",
  "seats": [1,2],
  "passengerDetails": [
    { "name": "Ajay", "age": 22 }
  ]
}

git clone <repo>
npm install
npx nodemon server.js
