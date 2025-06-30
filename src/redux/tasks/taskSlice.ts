import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';
import type { ITask } from "./task.interface"
import type { RootState } from "../store";

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const id = uuidv4();
            const taskData = {
                ...action.payload,
                id,
                isComplete: false
            }
            state.tasks.push(taskData)
        },
        toggleIsCompleted: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) =>
                task.id === action.payload ? (task.isComplete = !task.isComplete) : task
            )
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const { addTask, toggleIsCompleted, deleteTask } = taskSlice.actions

export default taskSlice.reducer