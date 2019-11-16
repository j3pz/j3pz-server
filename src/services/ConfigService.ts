import { Service, $log } from '@tsed/common';
import { createClientWithAutoPoll } from 'configcat-node';
import { IConfigCatClient } from 'configcat-common/lib/ConfigCatClient';
import { User } from 'configcat-common/lib/RolloutEvaluator';
import { GlobalConfig } from '../model/GlobalConfig';

const { CONFIG_CAT_KEY } = process.env;

@Service()
export class ConfigService {
    private config: GlobalConfig;

    private configCatClient: IConfigCatClient;

    public constructor() {
        this.config = new GlobalConfig();
        this.configCatClient = createClientWithAutoPoll(CONFIG_CAT_KEY, {
            configChanged: async () => {
                const rawConfig = await this.configCatClient.forceRefreshAsync();
                this.config.update(rawConfig.ConfigJSON);
                $log.info('Global Config Updated');
                $log.debug('Global Config Updated to:', rawConfig.ConfigJSON);
            },
        });
    }

    public getConfig(): GlobalConfig {
        return this.config;
    }

    public evaluateConfig<T>(key: string, defaultValue: T, user: User): Promise<T> {
        return this.configCatClient.getValueAsync(key, defaultValue, user);
    }
}
