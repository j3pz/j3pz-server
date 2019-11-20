/* eslint-disable no-template-curly-in-string */
import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from '@tsed/common';
import '@tsed/typeorm';
import '@tsed/swagger';
import '@tsed/ajv';
import { config } from 'dotenv-flow';
import { resolve } from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import { generateReqId } from './utils/RequestId';

config({
    path: resolve(__dirname, '../env'),
    // eslint-disable-next-line @typescript-eslint/camelcase
    default_node_env: 'development',
});

const rootDir = __dirname;

@ServerSettings({
    rootDir,
    acceptMimes: ['application/json'],
    mount: {
        '/api': '${rootDir}/controllers/**/*.{ts,js}',
    },
    componentsScan: [
        '${rootDir}/middlewares/**/*.{ts,js}',
        '${rootDir}/services/**/*.{ts,js}',
        '${rootDir}/converters/**/*.{ts,js}',
    ],
    typeorm: [
        {
            name: 'resources',
            type: 'mysql',
            host: process.env.MYSQL_DB_HOST,
            port: +process.env.MYSQL_DB_PORT,
            synchronize: true,
            username: process.env.MYSQL_DB_USER,
            password: process.env.MYSQL_DB_PASS,
            database: process.env.MYSQL_DB_NAME,
            entities: [
                `${__dirname}/entities/*.{ts,js}`,
            ],
        },
    ],
    swagger: [
        {
            path: '/api-docs',
        },
    ],
    logger: {
        reqIdBuilder: generateReqId,
        level: process.env.LOG_LEVEL as ('debug' | 'info' | 'warn' | 'error' | 'off'),
    },
})
export class Server extends ServerLoader {
    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
    */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public $onMountingMiddlewares(): void|Promise<any> {
        this
            .use(GlobalAcceptMimesMiddleware)
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true,
            }));

        return null;
    }
}
