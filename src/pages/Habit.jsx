import { useState } from "react";
import HabitList from "../components/HabitList";
import SearchBar from "../components/SearchBar";

function Habits() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Read a book",
      description: "Read for 30 minutes",
      frequency: "Daily",
      completed: false,
    },
    {
      id: 2,
      name: "Exercise",
      description: "Exercise for 30 minutes",
      frequency: "Daily",
      completed: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredHabits = habits.filter((habit) =>
    habit.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  return (
    <div>
      <h1>Habit Management</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <HabitList
        habits={filteredHabits}
        onDelete={deleteHabit}
        onToggle={toggleHabit}
      />
    </div>
  );
}

export default Habits;