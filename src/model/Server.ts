export interface ServerError {
    code: number;
    title: string;
    detail?: string;
}

export class Resource<T> {
    public constructor(private id: number | string, private type: string, private attributes: T) {}
}
