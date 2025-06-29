import { createSlice } from "@reduxjs/toolkit"
import type { ITask } from "./task.interface"
import type { RootState } from "../store";

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
    tasks: [
        {
            id: 'fd8803fa44DD',
            title: 'Learn Redux',
            description: 'I have learning to redux toolkit',
            dueDate: '20-03-2034',
            isComplete: false,
            priority: 'High'
        },
        {
            id: 'fd880gsf454DD',
            title: 'Tailwind Shadcn',
            description: 'I have learning to redux with Shadcn',
            dueDate: '20-03-2034',
            isComplete: false,
            priority: 'Medium'
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export default taskSlice.reducer