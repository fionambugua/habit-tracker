import { createContext, useState } from "react";
export const HabitContext = createContext();

export function HabitProvider({ children }) {
  const [habits, setHabits] = useState([]);

  function addHabit(habit) {
    setHabits((currentHabits) => [...currentHabits, habit])
  }

  function deleteHabit(id) {
    setHabits((currentHabits) => currentHabits.filter((habit) => habit.id !== id))
  }

  function toggleHabit(id) {
    setHabits((currentHabits) => currentHabits.map((habit) => habit.id === id
    ? {...habit, completed: !habit.completed} :habit
))
  }

  return (
    <HabitContext.Provider value={{ habits, addHabit, deleteHabit, toggleHabit}}>
      {children}
    </HabitContext.Provider>
  );
}
