export interface ITask {
    id: number;
    title: string;
    created_at: Date;
}

export interface ICreateTask {
    title: string;
}