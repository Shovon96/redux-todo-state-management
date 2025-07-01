import { cn } from "@/lib/utils"
import type { ITask } from "@/redux/tasks/task.interface"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
// import { useAppDispatch } from "@/redux/hook"
// import { deleteTask, toggleIsCompleted } from "@/redux/tasks/taskSlice"
import { Trash2 } from "lucide-react"

interface IProps {
    task: ITask
}

export default function TaskCard({ task }: IProps) {

    // const dispatch = useAppDispatch()

    return (
        <div className="border px-5 py-5 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <div className={cn("size-4 rounded-full", {
                        "bg-green-600": task.priority === "low",
                        "bg-yellow-600": task.priority === "medium",
                        "bg-red-600": task.priority === "high"
                    })}>
                    </div>
                    <h1>{task.title}</h1>
                </div>
                <div className="flex gap-4 items-center">
                    <Button variant="link" className="p-0 text-red-500 cursor-pointer">
                        <Trash2 />
                    </Button>
                    <Checkbox />
                </div>
            </div>
            <p className="mt-6">{task.description}</p>
        </div>
    );
}