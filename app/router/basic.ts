/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-15 14:17:19
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-15 15:01:03
 * @Description: app/router/basic.ts
 */

import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.get('/', controller.basic.index);

  return router;
};
