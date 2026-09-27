import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  const [passengerName, setPassengerName] = useState("");
  const [flightClass, setFlightClass] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [passengers, setPassengers] = useState("");

  async function handleBooking() {
    if (!passengerName || !flightClass || !departureCity || !arrivalCity || !passengers) {
      alert("Please fill all the flight booking details.");
      return;
    }

    if (departureCity === arrivalCity) {
      alert("Departure and Arrival cities cannot be the same.");
      return;
    }

    const { data, error } = await supabase
      .from("flight_bookings")
      .insert([
        {
          passenger_name: passengerName,
          flight_class: flightClass,
          departure_city: departureCity,
          arrival_city: arrivalCity,
          passengers: Number(passengers)
        }
      ]);

    if (error) {
      console.error(error);
      alert("Flight booking failed.");
      return;
    }

    alert("Flight booked successfully!");
    setPassengerName("");
    setFlightClass("");
    setDepartureCity("");
    setArrivalCity("");
    setPassengers("");
  }

  return (
    <main className="booking-page">
      <h1>Book Your Flight</h1>
      <div className="booking-form">
        <label htmlFor="passengerName">Passenger Name</label>
        <input
          id="passengerName"
          type="text"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
          placeholder="Enter full name"
        />

        <label htmlFor="departureCity">Departure City</label>
        <select
          id="departureCity"
          value={departureCity}
          onChange={(e) => setDepartureCity(e.target.value)}
        >
          <option value="">-- Select Departure --</option>
          <option value="Bengaluru (BLR)">Bengaluru (BLR)</option>
          <option value="Mumbai (BOM)">Mumbai (BOM)</option>
          <option value="Delhi (DEL)">Delhi (DEL)</option>
          <option value="Goa (GOI)">Goa (GOI)</option>
        </select>

        <label htmlFor="arrivalCity">Arrival City</label>
        <select
          id="arrivalCity"
          value={arrivalCity}
          onChange={(e) => setArrivalCity(e.target.value)}
        >
          <option value="">-- Select Destination --</option>
          <option value="Bengaluru (BLR)">Bengaluru (BLR)</option>
          <option value="Mumbai (BOM)">Mumbai (BOM)</option>
          <option value="Delhi (DEL)">Delhi (DEL)</option>
          <option value="Goa (GOI)">Goa (GOI)</option>
        </select>

        <label htmlFor="flightClass">Travel Class</label>
        <select
          id="flightClass"
          value={flightClass}
          onChange={(e) => setFlightClass(e.target.value)}
        >
          <option value="">-- Select Class --</option>
          <option value="Economy">Economy</option>
          <option value="Premium Economy">Premium Economy</option>
          <option value="Business Class">Business Class</option>
        </select>

        <label htmlFor="passengers">Number of Passengers</label>
        <input
          id="passengers"
          type="number"
          min="1"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          placeholder="Enter passenger count"
        />

        <button onClick={handleBooking}>Book Flight</button>
      </div>

      <section className="booking-details">
        <h3>Booking Summary</h3>
        <p>Name: <strong>{passengerName || "-"}</strong></p>
        <p>From: <strong>{departureCity || "-"}</strong></p>
        <p>To: <strong>{arrivalCity || "-"}</strong></p>
        <p>Class: <strong>{flightClass || "-"}</strong></p>
        <p>Passengers: <strong>{passengers || "-"}</strong></p>
      </section>
    </main>
  );
}

export default Booking;