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
                isCompleted: false
            }
            state.tasks.push(taskData)
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const { addTask } = taskSlice.actions

export default taskSlice.reducer