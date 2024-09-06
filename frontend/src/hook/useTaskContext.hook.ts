import { useContext } from "react";
import { ITaskContext, TaskContext } from "../provider/task.provider";

export const useTaskContext = (): ITaskContext => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error ('useTaskContext must be used within an TaskContext')
    }

    return context
}