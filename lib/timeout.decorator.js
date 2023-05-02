"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestTimeout = void 0;
const common_1 = require("@nestjs/common");
const timeout_interceptor_1 = require("./timeout.interceptor");
function RequestTimeout(timeoutInMs) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(new timeout_interceptor_1.TimeoutInterceptor(timeoutInMs)));
}
exports.RequestTimeout = RequestTimeout;
//# sourceMappingURL=timeout.decorator.js.map