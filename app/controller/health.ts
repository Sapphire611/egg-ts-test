/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-14 11:14:29
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-15 15:25:47
 * @Description: controller health...
 */
import { Controller } from 'egg';

export default class HealthController extends Controller {
  /**
   * 获取健康状态列表  GET /api/v2/healths
   */
  public async list() {
    const { ctx } = this;
    const { query } = ctx.validateResult;
    const { pageable } = ctx.state;

    try {
      ctx.body = await ctx.service.health.list(pageable, query);
      ctx.status = 201;
    } catch (error: any) {
      this.logger.error('get assets List failed: ', error);
      ctx.status = 400;
      ctx.body = error.message;
    }
  }

  public async detail() {
    const { ctx } = this;
    ctx.body = 'Health Service works!\n\nVersion:0.0.1';
    ctx.status = 200;
  }

  public async add() {
    const { ctx } = this;
    ctx.body = 'Health Service works!\n\nVersion:0.0.1';
    ctx.status = 200;
  }

  public async update() {
    const { ctx } = this;
    ctx.body = 'Health Service works!\n\nVersion:0.0.1';
    ctx.status = 200;
  }

  public async delete() {
    const { ctx } = this;
    ctx.body = 'Health Service works!\n\nVersion:0.0.1';
    ctx.status = 200;
  }
}
