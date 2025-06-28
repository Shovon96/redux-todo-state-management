import App from "@/App";
import Task from "@/pages/task";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: '/task',
                Component: Task
            },
            {
                path: '/users',
                Component: Users
            }
        ]
    },
]);

export default router;