import { Service } from '@tsed/common';
import { createClientWithAutoPoll } from 'configcat-node';
import { IConfigCatClient } from 'configcat-common/lib/ConfigCatClient';
import { GlobalConfig } from '../model/GlobalConfig';
// const configcat = require('configcat-node');

const { CONFIG_CAT_KEY } = process.env;

// @Service()
export class ConfigService {
    private config: GlobalConfig;

    private configCatClient: IConfigCatClient;

    public constructor() {
        this.configCatClient = createClientWithAutoPoll(CONFIG_CAT_KEY);
        this.configCatClient.forceRefreshAsync().then((config) => {
            console.log(config.ConfigJSON);
        });
    }
}
