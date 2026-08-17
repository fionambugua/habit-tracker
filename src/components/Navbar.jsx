import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>HabitTracker</h1>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/habits"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          My Habits
        </NavLink>
        <NavLink
          to="/habits/new"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Add Habit
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
