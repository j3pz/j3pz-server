export class MailTemplate<T> {
    public constructor(protected options: T) {}

    public text: () => string;

    public html: () => string;
}
