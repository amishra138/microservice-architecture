export class GenericResponse<T> {
    Data?: T;
    message?: string;
    statusCode?: number;
    successful?: boolean
}