"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestTimeout = void 0;
var common_1 = require("@nestjs/common");
var timeout_interceptor_1 = require("./timeout.interceptor");
function RequestTimeout(timeoutInMs) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(new timeout_interceptor_1.TimeoutInterceptor(timeoutInMs)));
}
exports.RequestTimeout = RequestTimeout;
