interface ServerError {
    id: string;
    status: string;
    code?: string;
    title?: string;
    detail?: string;
}

export interface ServerResponse<T> {
    data?: T;
    errors?: ServerError[];
}

export class Resource<T> {
    public constructor(private id: number, private type: string, private attributes: T) {}
}
