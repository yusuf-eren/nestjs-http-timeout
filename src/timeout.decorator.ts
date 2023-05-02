import { UseInterceptors, applyDecorators } from '@nestjs/common';
import { TimeoutInterceptor } from './timeout.interceptor';

export function RequestTimeout(timeoutInMs: number) {
  return applyDecorators(UseInterceptors(new TimeoutInterceptor(timeoutInMs)));
}
