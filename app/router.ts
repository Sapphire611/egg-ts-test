/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-15 14:17:19
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 16:48:48
 * @Description: app/router.ts
 */

import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.prefix('/api/v2'); // prefix for all routes
  // egg.js提供了 app.resources('routerName', 'pathMatch', controller) 来简化开发。
  // 你只需要在 Controller 里面按需提供对应的方法即可，框架会自动映射
  router.resources('basic', '/', controller.basic); // /api/v2/healths
  router.resources('health', '/healths', controller.health); // /api/v2/healths
  return router;
};
