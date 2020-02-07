/* eslint-disable no-template-curly-in-string */
import {
    ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware, $log,
} from '@tsed/common';
import '@tsed/passport';
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
        `${rootDir}/middlewares/**/*.{ts,js}`,
        `${rootDir}/services/**/*.{ts,js}`,
        `${rootDir}/converters/**/*.{ts,js}`,
        `${rootDir}/protocols/**/*.{ts,js}`,
    ],
    typeorm: [
        {
            name: 'resources',
            type: 'mysql',
            host: process.env.MYSQL_DB_HOST,
            port: +process.env.MYSQL_DB_PORT,
            synchronize: false,
            username: process.env.MYSQL_DB_USER,
            password: process.env.MYSQL_DB_PASS,
            database: process.env.MYSQL_DB_NAME,
            entities: [
                `${__dirname}/entities/resources/*.{ts,js}`,
            ],
        },
        {
            name: 'users',
            type: 'mongodb',
            // eslint-disable-next-line max-len
            url: `${process.env.MONGO_DB_PROTOCOL}://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_NAME}?${process.env.MONGO_DB_PARAMETERS}`,
            entities: [
                `${__dirname}/entities/users/*.{ts,js}`,
            ],
            synchronize: true,
        },
    ],
    swagger: [
        {
            path: '/api-docs',
        },
    ],
    logger: {
        reqIdBuilder: generateReqId,
        logRequest: false,
        level: process.env.LOG_LEVEL as ('debug' | 'info' | 'warn' | 'error' | 'off'),
    },
    passport: {},
})
export class Server extends ServerLoader {
    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
    */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public $beforeRoutesInit(): void | Promise<any> {
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

    public $onReady(): void {
        $log.info('Server started...');
    }

    public $onServerInitError(err): void {
        $log.error(err);
    }
}
