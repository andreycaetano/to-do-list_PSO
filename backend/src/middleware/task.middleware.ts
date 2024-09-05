import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

interface IRequestSchemas {
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;
}

export class ValidateRequest {

    formatZodErrors(errors: ZodError) {
        return errors.issues.map((issue) => ({
            path: issue.path.join('.'),
            message: issue.message,
        }));
    }

    validateBody(schemas: IRequestSchemas) {
        return async (req: Request, res: Response, next: NextFunction) => {
            if (schemas.params) {
                const result = await schemas.params.safeParseAsync(req.params);
                if (!result.success) {
                    return res.status(400).json({ error: this.formatZodErrors(result.error)})
                }
            }

            if (schemas.body) {
                const result = await schemas.body.safeParseAsync(req.body);
                if (!result.success) {
                    return res.status(400).json({ error: this.formatZodErrors(result.error)})
                }
            }

            if (schemas.query) {
                const result = await schemas.query.safeParseAsync(req.query);
                if (!result.success) {
                    return res.status(400).json({ error: this.formatZodErrors(result.error)})
                }
            }
            next();
        };
    }
}