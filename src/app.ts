import { Logger, getLogger } from './logger';

export class App {
    version: string;
    logger: Logger;

    constructor(version: string) {
        this.version = version
        this.logger = getLogger(); //.getChildLogger({ prefix: ['child'] })
    }

    async init(): Promise<void> {
        this.logger.info('Initializing')
    }

    async run(): Promise<void> {
        this.logger.debug('Running')
    }

    async exit(): Promise<void> {
        this.logger.debug('Exiting')
    }
}