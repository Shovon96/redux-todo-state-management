// import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
// import { v4 as uuidv4 } from 'uuid';
// import type { ITask } from "./task.interface"
// import type { RootState } from "../store";

// interface InitialState {
//     tasks: ITask[];
//     filter: "all" | "low" | "medium" | "high"
// }

// const initialState: InitialState = {
//     tasks: [],
//     filter: "all"
// }

// const taskSlice = createSlice({
//     name: "task",
//     initialState,
//     reducers: {
//         addTask: (state, action: PayloadAction<ITask>) => {
//             const id = uuidv4();
//             const taskData = {
//                 ...action.payload,
//                 id,
//                 isComplete: false
//             }
//             state.tasks.push(taskData)
//         },
//         toggleIsCompleted: (state, action: PayloadAction<string>) => {
//             state.tasks.forEach((task) =>
//                 task.id === action.payload ? (task.isComplete = !task.isComplete) : task
//             )
//         },
//         deleteTask: (state, action: PayloadAction<string>) => {
//             state.tasks = state.tasks.filter(task => task.id !== action.payload)
//         },
//         updateFilter: (state, action: PayloadAction<"all" | "low" | "medium" | "high">) => {
//             state.filter = action.payload
//         }
//     }
// })

// export const selectTasks = (state: RootState) => {
//     const filter = state.todo.filter
//     if (filter === "low") {
//         return state.todo.tasks.filter(task => task.priority === "low");
//     } else if (filter === "medium") {
//         return state.todo.tasks.filter(task => task.priority === "medium");
//     } else if (filter === "high") {
//         return state.todo.tasks.filter(task => task.priority === "high");
//     } else {
//         return state.todo.tasks;
//     }
// }

// export const { addTask, toggleIsCompleted, deleteTask, updateFilter } = taskSlice.actions

// export default taskSlice.reducer