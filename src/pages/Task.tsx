import TaskCard from "@/components/module/taskCard";
import { useAppSelector } from "@/redux/hook"
import { selectTasks } from "@/redux/tasks/taskSlice"

export default function Task() {

    const tasks = useAppSelector(selectTasks);
    console.log(tasks)

    return (
        <div className="mx-auto max-w-5xl px-5 mt-20">
            <div><h1 className="text-4xl py-5 text-sky-500 font-bold">Tasks: </h1></div>
            <div className="space-y-5 mt-5">
                {
                    tasks.map((task) => (
                        <TaskCard task={task} />
                    ))
                }
            </div>
        </div>
    )
}