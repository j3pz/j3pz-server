export interface ServerError {
    id: string;
    code: number;
    title: string;
    detail?: string;
}

export class Resource<T> {
    public constructor(private id: number, private type: string, private attributes: T) {}
}
