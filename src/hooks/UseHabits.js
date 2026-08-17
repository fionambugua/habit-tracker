import { useContext } from "react"
import { HabitContext } from "../context/HabitContext"

export function useHabits(){
    const context = useContext(HabitContext)

    return context; 
}