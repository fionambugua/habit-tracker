import HabitCard from "./HabitCard";

function HabitList({ habits }) {
  if (habits.length === 0) {
    return <p>No habits found.</p>;
  }

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitCard 
        key={habit.id}
         habit={habit} 
         onDelete={onDelete}
         onToggle={onToggle}
         />
      ))}
    </div>
  );
}

export default HabitList;