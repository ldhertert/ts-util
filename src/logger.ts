import { Logger as tslog } from "tslog";

export interface Logger {
    debug: (...args: unknown[]) => void;
    info: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
}

export function getLogger(): Logger {
    const log = new tslog({ 
        prefix: ['app'], 
        displayDateTime: false, 
    });
    return log
}