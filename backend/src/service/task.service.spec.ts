import { prisma } from "../database/prisma.database"
import { AppErrors } from "../errors/app.errors";
import { ICreateTaskDto, Task } from "../interface/tasks.interface";
import { TasksService } from "./tasks.service"

jest.mock('../database/prisma.database.ts', () => ({
    prisma: {
        tasks: {
            create: jest.fn(),
            findUnique: jest.fn(),
            findMany: jest.fn(),
            delete: jest.fn()
        }
    }
}))

describe('TasksService', () => {
    let tasksService: TasksService;

    beforeEach(() => {
        tasksService = new TasksService();
    })

    describe('createTask', () => {
        it('should create and return task', async () => {
            const createTaskDto: ICreateTaskDto = { title: 'example'};
            const createdTask: Task = {
                id: 1,
                title: 'example',
                created_at: new Date()
            };

            (prisma.tasks.create as jest.Mock).mockResolvedValue(createdTask);

            const result = await tasksService.createTasks(createTaskDto);

            expect(prisma.tasks.create).toHaveBeenCalledWith({ data: createTaskDto });
            expect(result).toEqual(createdTask);
        });
    });

    describe('findAllTask', () => {
        it('should find and return all tasks', async () => {
            const tasks: Task[] = [{ id: 1, title: 'example', created_at: new Date()}];

            (prisma.tasks.findMany as jest.Mock).mockResolvedValue(tasks);

            const result = await tasksService.findAllTasks()

            expect(prisma.tasks.findMany).toHaveBeenCalledWith()
            expect(result).toEqual(tasks)
        })
    })

    describe('findById', () => {
        it('should find and return task by id', async () => {
            const task: Task = {
                id: 1,
                title: 'example',
                created_at: new Date()
            };

            (prisma.tasks.findUnique as jest.Mock).mockResolvedValue(task);

            const result = await tasksService.findById(1);

            expect(prisma.tasks.findUnique).toHaveBeenCalledWith({ where: { id: 1 }});
            expect(result).toEqual(task);
        })

        it('should throw error if the task not exist', async () => {
            (prisma.tasks.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(tasksService.findById(999)).rejects.toThrow(new AppErrors(404, 'Task not found'));
        });
    });

    describe('delete', () => {
        it('should delete task if exists', async () => {
            const task: Task = {
                id: 1,
                title: 'example',
                created_at: new Date()
            };

            (prisma.tasks.findUnique as jest.Mock).mockResolvedValue(task);
            (prisma.tasks.delete as jest.Mock).mockResolvedValue(undefined);

            await tasksService.delete(1);

            expect(prisma.tasks.findUnique).toHaveBeenCalledWith({ where: { id: 1 }});
            expect(prisma.tasks.delete).toHaveBeenCalledWith({ where: { id: 1 }});
        })

        it('should throw error if the task not exist', async () => {
            (prisma.tasks.findUnique as jest.Mock).mockResolvedValue(null);

            await expect(tasksService.findById(999)).rejects.toThrow(new AppErrors(404, 'Task not found'));
        })
    })
}) 