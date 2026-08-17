import { useState, useContent } from "react";
import { HabitContext } from "../context/HabitContext";
import HabitList from "../components/HabitList";
import SearchBar from "../components/SearchBar";

function Habits() {
  const { habits, deleteHabit, toggleHabit } = useContext(HabitContext);
  const [search, setSearch] = useState("");
  
  const filteredHabits = habits.filter((habit) =>
    habit.name.toLowerCase().includes(search.toLowerCase())
  );
  reurn (
    <main>
      <h1>Habit Management</h1>
      <SearchBar 
      search={search} 
      setSearch={setSearch} 
      />
      <HabitList habits={filteredHabits} 
      onDelete={deleteHabit}
       onToggle={toggleHabit} 
       />
    </main>
  );
}
   