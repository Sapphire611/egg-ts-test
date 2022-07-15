/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-14 11:14:29
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-15 15:02:56
 * @Description: file content...
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { router } = app;

  router.prefix('/api/v2');

};
