import { Request, Response } from "express";
import { TasksService } from "../service/tasks.service";

export class TasksController {
    service = new TasksService();

    async create (req: Request, res: Response) {
        const createTask = await this.service.createTasks(req.body);
        return res.status(201).json(createTask);
    };

    async findAllTask (_req: Request, res: Response) {
        const tasks = await this.service.findAllTasks();
        return res.status(200).json(tasks);
    };

    async delete (req: Request, res: Response) {
        await this.service.delete(Number(req.params.id));
        return res.status(204).send();
    };
};