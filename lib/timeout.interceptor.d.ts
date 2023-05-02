import { NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class TimeoutInterceptor implements NestInterceptor {
    private readonly timeoutInMs;
    constructor(timeoutInMs: number);
    intercept(context: ExecutionContext, next: CallHandler): Observable<RequestTimeoutException | Error>;
}
