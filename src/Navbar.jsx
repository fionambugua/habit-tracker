import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>HabitTracker</h1>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/habits">My Habits</NavLink>
        <NavLink to="/habits/new">Add Habit</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
