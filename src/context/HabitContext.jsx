import { createContext, useEffect, useState } from "react";

export const HabitContext = createContext();

const API_URL = "http://localhost:3001/habits";

export function HabitProvider({ children }) {
  const [habits, setHabits] = useState([]);
  const [error, setError] = useState("");

  // Fetch habits when the app loads
  useEffect(() => {
    async function fetchHabits() {
      try {
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch habits");
        }

        const data = await response.json();
        setHabits(data);
      } catch (error) {
        console.error("Error fetching habits:", error);
        setError("Unable to load habits.");
      }
    }

    fetchHabits();
  }, []);

  // Add a new habit
  async function addHabit(habit) {
    try {
      setError("");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(habit),
      });

      if (!response.ok) {
        throw new Error("Failed to add habit");
      }

      const newHabit = await response.json();

      setHabits((currentHabits) => [
        ...currentHabits,
        newHabit,
      ]);
    } catch (error) {
      console.error("Error adding habit:", error);
      setError("Unable to add habit.");
    }
  }

  // Delete a habit
  async function deleteHabit(id) {
    try {
      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete habit");
      }

      setHabits((currentHabits) =>
        currentHabits.filter((habit) => habit.id !== id)
      );
    } catch (error) {
      console.error("Error deleting habit:", error);
      setError("Unable to delete habit.");
    }
  }

  // Toggle habit completion
  async function toggleHabit(id) {
    try {
      setError("");

      const habit = habits.find((habit) => habit.id === id);

      if (!habit) {
        throw new Error("Habit not found");
      }

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !habit.completed,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update habit");
      }

      const updatedHabit = await response.json();

      setHabits((currentHabits) =>
        currentHabits.map((habit) =>
          habit.id === id ? updatedHabit : habit
        )
      );
    } catch (error) {
      console.error("Error updating habit:", error);
      setError("Unable to update habit.");
    }
  }

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        deleteHabit,
        toggleHabit,
        error,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
}