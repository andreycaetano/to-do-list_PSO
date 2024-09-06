import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z.string({message: 'O titulo da tarefa é obrigatorio!'}).min(3)
})