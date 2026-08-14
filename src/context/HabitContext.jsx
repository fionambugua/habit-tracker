import { createContext, useState } from "react";
export const HabitContext = createContext();

export function HabitProvider({ children }) {
  const [habits, setHabits] = useState([]);

  function addHabit(habit) {
    setHabits((currentHabits) => [...currentHabits, habit])
  }

  return (
    <HabitContext.Provider value={{ habits, addHabits}}>
      {children}
    </HabitContext.Provider>
  );
}
