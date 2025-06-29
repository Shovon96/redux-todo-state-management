import { createSlice } from "@reduxjs/toolkit"
import type { ITask } from "./task.interface"

interface InitialState {
    task: ITask[];
}

const initialState: InitialState = {
    task: [
        {
            id: 'fd8803fa44DD',
            title: 'Learn Redux',
            description: 'I have learning to redux toolkit',
            dueDate: '20-03-2034',
            isComplete: false,
            priority: 'High'
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer