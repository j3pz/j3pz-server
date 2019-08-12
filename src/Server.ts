import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from '@tsed/common';
import '@tsed/typeorm';
import { config } from 'dotenv-flow';
import { resolve } from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';

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
        // eslint-disable-next-line no-template-curly-in-string
        '/api': '${rootDir}/controllers/**/*.ts',
    },
    typeorm: [
        {
            name: 'resources',
            type: 'mysql',
            host: process.env.MYSQL_DB_HOST,
            port: 3306,
            synchronize: true,
            username: process.env.MYSQL_DB_USER,
            password: process.env.MYSQL_DB_PASS,
            database: process.env.MYSQL_DB_NAME,
            entities: [
                `${__dirname}/entities/*.ts`,
            ],
        },
    ],
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