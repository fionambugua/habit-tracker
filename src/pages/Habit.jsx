import { useState } from "react";
import HabitList from "../components/HabitList";
import SearchBar from "../components/SearchBar";
import { useHabits } from "../hooks/UseHabits";

function Habits() {
  const { habits, deleteHabit, toggleHabit } = useHabits();

  const [search, setSearch] = useState("");

  const filteredHabits = habits.filter((habit) =>
    habit.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Habit Management</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <HabitList
        habits={filteredHabits}
        onDelete={deleteHabit}
        onToggle={toggleHabit}
      />
    </div>
  );
}

export default Habits;
