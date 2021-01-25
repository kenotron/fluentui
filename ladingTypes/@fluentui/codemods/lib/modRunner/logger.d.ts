export interface LogFunction {
    (...args: any[]): void;
}
export interface Logger {
    log: LogFunction;
    warn: LogFunction;
    error: LogFunction;
}
