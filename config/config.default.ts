/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-14 11:14:29
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 16:30:15
 * @Description: default config for egg.js...
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1657768449273_3636';

  // add your egg config in here
  // eslint-disable-next-line array-bracket-spacing
  config.middleware = ['validator'];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // config for mongoose
  config.mongoose = {
    client: {
      url: 'db: mongodb://172.16.10.58:27017/s365-health',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
