import { useHabits } from "../hooks/UseHabits"

function HabitDetails () {
    const { habits, deleteHabit, toggleHabit} = useHabits();

    return (
        <div>
            <h1>My Habits</h1>
            {habits.map((habit) => (
                <div key={habit.id}>
                    <h2>{habit.name}</h2>
                </div>
            ))}
        </div>
    )
}