export function generateReqId(): string {
    return `_${(
        Number(String(Math.random()).slice(2))
        + Date.now()
        + Math.round(Date.now())
    ).toString(36)}`;
}
