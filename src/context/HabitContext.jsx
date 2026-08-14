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

  return (
    <HabitContext.Provider value={{ habits, addHabits, deleteHabits}}>
      {children}
    </HabitContext.Provider>
  );
}
