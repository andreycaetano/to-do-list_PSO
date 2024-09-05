export interface Task {
    id: number;
    title: string;
    created_at: Date;
}

export interface ICreateTaskDto {
    title: string;
}