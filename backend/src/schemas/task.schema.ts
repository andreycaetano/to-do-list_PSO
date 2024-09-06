import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string().min(3, { message: 'the title must have at least 3 character' }).max(200, { message: 'The title must have a maximum of 200 characters'})
})

export const deleteTaskSchema = z.object({
    id: z.string().transform((val) => parseInt(val, 10)).refine((val) => !isNaN(val) && val > 0, {
        message: 'Id must be a positive number',
    }),
});