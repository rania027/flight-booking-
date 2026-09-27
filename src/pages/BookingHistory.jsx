import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  async function getBookings() {
    const { data, error } = await supabase
      .from("flight_bookings")
      .select("*");

    if (error) {
      console.error(error);
      alert("Failed to retrieve flight bookings.");
      return;
    }

    setBookings(data);
  }

  return (
    <main className="history-page">
      <h1>Flight Booking History</h1>
      <button className="history-button" onClick={getBookings}>
        View History
      </button>

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Passenger</th>
              <th>From</th>
              <th>To</th>
              <th>Class</th>
              <th>Passengers</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.passenger_name}</td>
                <td>{booking.departure_city}</td>
                <td>{booking.arrival_city}</td>
                <td>{booking.flight_class}</td>
                <td>{booking.passengers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BookingHistory;