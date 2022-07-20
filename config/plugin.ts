/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-14 11:14:29
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 17:44:20
 * @Description: file content...
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // mongoose: {
  //   enable: true,
  //   package: 'egg-mongoose',
  // },

  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
};

export default plugin;
