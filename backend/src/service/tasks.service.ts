import { prisma } from "../database/prisma.database";
import { AppErrors } from "../errors/app.errors";
import { ICreateTaskDto, Task } from "../interface/tasks.interface";

export class TasksService {
    async createTasks (data: ICreateTaskDto): Promise<Task> {
        return await prisma.tasks.create({ data });
    }

    async findAllTasks (): Promise<Task[]> {
        return await prisma.tasks.findMany();
    }

    async findById (id: number): Promise<Task> {
        const task = await prisma.tasks.findUnique({ where: { id } });
        if (!task) throw new AppErrors(404, 'Task not found');

        return task
    }

    async delete (id: number): Promise<void> {
        await this.findById(id);

        await prisma.tasks.delete({ where: { id } });
    }
}