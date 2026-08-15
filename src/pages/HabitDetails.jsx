import { useHabits } from "../hooks/UseHabits"

function HabitDetails () {
    const { habits, deleteHabit, toggleHabit} = useHabits();

    return (
        <div>
            <h1>My Habits</h1>
            {habits.map((habit) => (
                <div key={habit.id}>
                    <h2>{habit.name}</h2>
                    <p>{habit.completed ? "Completed" : "Not Completed"}</p>

                    <button onClick={() => toggleHabit(habit.id)}>
                        {habit.completed ? "Mark Incomplete" : "Mark Complete"}
                    </button>

                    <buttons onClick={() => deleteHabit(habit.id)}>
                        Delete
                    </buttons>
                </div>
            ))}
        </div>
    )
}

export default HabitDetails;