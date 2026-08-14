function HabitCard({ habit, onDelete, onToggle }) {
  return (
    <div className="habit-card">
      <h3>{habit.name}</h3>
      <p>{habit.description}</p>
      <p>Frequency: {habit.frequency}</p>

      <p>
        Status: {habit.completed ? "Completed ✅" : "Not completed"}
      </p>

      <button onClick={() => onToggle(habit.id)}>
        {habit.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>

      <button onClick={() => onDelete(habit.id)}>
        Delete
      </button>
    </div>
  );
}

export default HabitCard;