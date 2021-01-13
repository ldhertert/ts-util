import { Logger, getLogger } from './logger';

export class App {
    version: any;
    logger: Logger;

    constructor(version: any) {
        this.version = version
        this.logger = getLogger(); //.getChildLogger({ prefix: ['child'] })
    }

    async init() {
        this.logger.info('Initializing')
    }

    async run() {
        this.logger.debug('Running')
    }

    async exit() {
        this.logger.debug('Exiting')
    }
}