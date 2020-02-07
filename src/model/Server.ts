export interface ServerError {
    code: number;
    title: string;
    detail?: string;
}

export class Resource<T> {
    public constructor(private id: number | string, private type: string, private attributes: T) {}
}

export class Status {
    public status: 'success' | 'failed';

    public constructor(flag: boolean) {
        this.status = flag ? 'success' : 'failed';
    }
}
