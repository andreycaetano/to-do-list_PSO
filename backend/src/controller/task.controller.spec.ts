import { Request, Response } from "express";
import { TasksService } from "../service/tasks.service";
import { TasksController } from "./task.controller";
import { ICreateTaskDto, Task } from "../interface/tasks.interface";

jest.mock('../service/tasks.service');

describe('TaskController', () => {
    let tasksService: jest.Mocked<TasksService>;
    let taskController: TasksController;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        tasksService = new TasksService() as jest.Mocked<TasksService>;
        taskController = new TasksController();
        taskController.service = tasksService

        req = {}

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn(),
        }
    })

    describe('create', () => {
        it('should create task and return 201 with created task', async () => {
            const task: Task = { id: 1, title: 'example', created_at: new Date() };
            req.body = { title: 'example' };

            tasksService.createTasks.mockResolvedValue(task);

            await taskController.create(req as Request, res as Response);

            expect(tasksService.createTasks).toHaveBeenCalledWith(req.body);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(task);
        });
    });

    describe('findAllTask', () => {
        it('should return 200 and array tasks', async () => {
            const tasks: Task[] = [{ id: 1, title: 'example', created_at: new Date() }];

            tasksService.findAllTasks.mockResolvedValue(tasks);

            await taskController.findAllTask(req as Request, res as Response)

            expect(tasksService.findAllTasks).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(tasks);
        })
    })

    describe('delete', () => {
        it('should return 204 and delete task', async () => {
            req.params = { id: '1' };

            tasksService.delete.mockResolvedValue();

            await taskController.delete(req as Request, res as Response);

            expect(tasksService.delete).toHaveBeenCalledWith(1);
            expect(res.status).toHaveBeenCalledWith(204);
            expect(res.send).toHaveBeenCalled();
        })
    })
})