import { Router } from "express";
import { ValidateRequest } from "../middleware/task.middleware";
import { TasksController } from "../controller/task.controller";
import { createTaskSchema, deleteTaskSchema } from "../schemas/task.schema";

export const mainRoutes = Router();

const validate = new ValidateRequest();
const controller = new TasksController();

mainRoutes.get('/tasks', 
    (req, res) => controller.findAllTask(req, res)
)

mainRoutes.post('/tasks',
    validate.validateBody({ body: createTaskSchema }),
    (req, res) => controller.create(req, res)
)

mainRoutes.delete('/tasks/:id',
    validate.validateBody({ params: deleteTaskSchema}),
    (req, res) => controller.delete(req, res)
)