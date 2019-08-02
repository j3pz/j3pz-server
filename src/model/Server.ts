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

export interface Resource {
    id: number;
    type: string;
}
