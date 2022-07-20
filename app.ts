/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-15 13:06:47
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 14:53:45
 * @Description: app.ts
 */
import { Application } from 'egg';

export default (app: Application) => {
  app.beforeStart(async () => {
    console.log('beforeStart ...');
  });

  app.on('server', async () => {
    console.log(' >> egg.js is Running...!');
  });
};
