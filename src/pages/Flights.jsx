function FlightCard(props) {
  return (
    <div className="match-card">
      <h2>
        {props.from} ✈️ {props.to}
      </h2>
      <p>📅 Departure: {props.date}</p>
      <p>🕒 Time: {props.time}</p>
      <p>💰 Price: {props.price}</p>
    </div>
  );
}

function Flights() {
  return (
    <main className="matches-page">
      <h1>Available Flights</h1>
      <div className="matches-grid">
        <FlightCard
          from="Bengaluru (BLR)"
          to="Mumbai (BOM)"
          date="15 October 2026"
          time="08:30 AM"
          price="₹4,500"
        />
        <FlightCard
          from="Delhi (DEL)"
          to="Goa (GOI)"
          date="18 October 2026"
          time="02:15 PM"
          price="₹6,200"
        />
      </div>
    </main>
  );
}

export default Flights;