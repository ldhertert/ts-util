import { Logger } from "tslog";

const log = new Logger({ 
    prefix: ['app'], 
    displayDateTime: false, 
});

export class App {
    version: any;
    logger: Logger;

    constructor(version: any) {
        this.version = version
        this.logger = log.getChildLogger({ prefix: ['child'] })
    }

    async init() {
        this.logger.warn('Initializing')
    }

    async run() {
        this.logger.debug('Running')
    }

    async exit() {
        this.logger.debug('Exiting')
        process.exit(0)
    }
}