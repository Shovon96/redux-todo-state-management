import { AddTask } from "@/components/module/AddTask";
import TaskCard from "@/components/module/TaskCard";
import { useAppSelector } from "@/redux/hook"
import { selectTasks } from "@/redux/tasks/taskSlice"

export default function Task() {

    const tasks = useAppSelector(selectTasks);
    console.log(tasks)

    return (
        <div className="mx-auto max-w-5xl px-5 mt-20">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl py-3 text-sky-500 font-bold">Tasks: </h1>
                <AddTask />
            </div>
            <div className="space-y-5 mt-5">
                {
                    tasks.map((task) => (
                        <TaskCard task={task} key={task.id} />
                    ))
                }
            </div>
        </div>
    )
}