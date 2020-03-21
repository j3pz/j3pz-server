export interface ServerError {
    code: number;
    title: string;
    detail?: string;
}

const BASE_URL = 'https://j3pz.com/api';

export class Resource<T> {
    private link: string;

    public constructor(
        private id: number | string,
        private type: string,
        private attributes: T,
        link?: string,
    ) {
        if (link) {
            this.link = `${BASE_URL}/${link}`;
        }
    }
}

export class Status {
    public status: 'success' | 'failed';

    public constructor(flag: boolean) {
        this.status = flag ? 'success' : 'failed';
    }
}
