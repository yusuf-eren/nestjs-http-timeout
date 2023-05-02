# nestjs-http-timeout
HTTP Decorator & Interceptor for NestJS

## Installation
```
npm install nestjs-http-timeout
```

## How to Implement?

Endpoint Based Timeout
```
import { RequestTimeout } from 'nestjs-http-timeout';

@RequestTimeout(5000)
@Get('hello')
async helloWorld() {
   ...
}
```

Global Timeout
```
// main.ts

import { TimeoutInterceptor } from 'nestjs-http-timeout';
...
app.useGlobalInterceptors(new TimeoutInterceptor(10000));
...

```