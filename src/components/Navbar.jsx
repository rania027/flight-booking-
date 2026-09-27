import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>SkyWings Airlines</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/flights">Available Flights</Link>
        <Link to="/booking">Book Flight</Link>
        <Link to="/history">Booking History</Link>
      </div>
    </nav>
  );
}

export default Navbar;