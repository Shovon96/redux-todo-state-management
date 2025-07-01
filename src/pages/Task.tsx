import { AddTask } from "@/components/module/AddTask";
import TaskCard from "@/components/module/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/redux/tasks/task.interface";
// import { useAppDispatch, useAppSelector } from "@/redux/hook"
// import { selectTasks, updateFilter } from "@/redux/tasks/taskSlice"

export default function Task() {

    // const tasks = useAppSelector(selectTasks);
    // const dispatch = useAppDispatch()
    // console.log(tasks)

    const { data, isLoading } = useGetTasksQuery(undefined);

    // console.log(data, isLoading, isError)

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="mx-auto max-w-5xl px-5 mt-20">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl py-3 text-sky-500 font-bold">Tasks: </h1>
                <div className="flex gap-5 items-center">
                    <Tabs defaultValue="all">
                        <TabsList className="px-2 py-1">
                            <TabsTrigger className="px-2 py-1" value="all">All</TabsTrigger>
                            <TabsTrigger className="px-2 py-1" value="low">Low</TabsTrigger>
                            <TabsTrigger className="px-2 py-1" value="medium">Medium</TabsTrigger>
                            <TabsTrigger className="px-2 py-1" value="high">High</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <AddTask />
                </div>
            </div>
            <div className="space-y-5 mt-5">
                {
                    !isLoading && data.tasks.map((task: ITask) => (
                        <TaskCard task={task} key={task.id} />
                    ))
                }
            </div>
        </div>
    )
}