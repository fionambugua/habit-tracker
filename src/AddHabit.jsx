import { useState, usedContext} from "react";
import { HabitContext } from "../context/HabitContext";

function AddHabit() {
  const { addHabit } = useContext(HabitContext);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim() || !frequency) {
      setError("Please fill in all fields.");
      return;
    }

    const newHabit = {
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
      frequency,
      completed: false,
    };

    addHabit(newHabit);

    setName("");
    setDescription("");
    setFrequency("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Habit</h2>

      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      >
        <option value="">Select frequency</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>

      <button type="submit">
        Add Habit
      </button>
    </form>
  );
}

export default AddHabit;