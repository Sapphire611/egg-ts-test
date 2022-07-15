/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-14 11:14:29
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-15 15:05:13
 * @Description: test for egg-ts...
 */
import { Controller } from 'egg';

export default class BasicController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = 'Health Service works!\n\nVersion:0.0.1';
    ctx.status = 200;
  }
}
