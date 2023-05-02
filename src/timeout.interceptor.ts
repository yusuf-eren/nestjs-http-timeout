import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
import { Observable, throwError, TimeoutError, catchError, timeout } from 'rxjs';
@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  constructor(private readonly timeoutInMs: number) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<RequestTimeoutException | Error> {
    return next.handle().pipe(
      timeout(this.timeoutInMs),
      catchError((error) => {
        if (error instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => error);
      }),
    );
  }
}
