/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-14 11:14:29
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 16:58:03
 * @Description: controller 4 health...
 */
import { Controller } from 'egg';

export default class HealthController extends Controller {
  /**
   * 获取健康状态列表  GET /api/v2/healths
   */
  public async index() {
    const { ctx } = this;
    const query = ctx.request.query;
    const { pageable } = ctx.state;

    // console.log(ctx.request.query);
    try {
      ctx.body = await ctx.service.health.list(pageable, query);
      ctx.status = 201;
    } catch (error: any) {
      this.logger.error('get health List failed: ', error);
      ctx.status = 400;
      ctx.body = error.message;
    }
  }

  /**
   * 添加健康状态  POST /api/v2/healths
   */
  // public async create() {
  //   const { ctx } = this;
  //   const { body } = ctx.validateResult;
  //   const realBody = {
  //     ...body,
  //   };

  //   try {
  //     ctx.body = await ctx.service.health.create(realBody);
  //     ctx.status = 201;
  //   } catch (error: any) {
  //     this.logger.error('create health failed: ', error);
  //     ctx.status = 400;
  //     ctx.body = error.message;
  //   }
  // }

  // /**
  //  * 获取指定健康状态   GET /api/v2/healths/:id
  //  */
  // // show = detail = fineOne
  // public async show() {
  //   const { ctx } = this;
  //   const { params } = ctx.validateResult;
  //   const realQuery = {
  //     ceibsId: params.id,
  //   };

  //   const realAttributes = { _id: 0 };

  //   let result = null;
  //   try {
  //     result = await ctx.service.health.detail(realQuery, realAttributes);

  //     if (!result) {
  //       ctx.throw(400, 'can not find specific health');
  //     }

  //     ctx.status = 201;
  //     ctx.body = result;
  //   } catch (error: any) {
  //     this.logger.error('show health failed: ', error);
  //     ctx.status = 400;
  //     ctx.body = error.message;
  //   }
  // }

  // /**
  //  * 编辑健康状态  PATCH /api/v2/healths/:id
  //  */
  // // router.resource >> update HTTP Method: PUT
  // public async update() {
  //   const { ctx } = this;
  //   const { params, body } = ctx.validateResult;
  //   const realQuery = {
  //     _id: params.id,
  //   };

  //   const realAttributes = { _id: 0 };

  //   let dtc = null;
  //   try {
  //     dtc = await ctx.service.health.detail(realQuery, realAttributes);

  //     if (!dtc) {
  //       ctx.throw(400, 'can not find specific health');
  //     }

  //     ctx.status = 204;
  //     ctx.body = await ctx.service.health.update(realQuery, body);
  //   } catch (error: any) {
  //     this.logger.error('show health failed: ', error);
  //     ctx.status = 400;
  //     ctx.body = error.message;
  //   }
  // }

  // /**
  //  * 删除健康状态 DELETE /api/v2/healths/:id
  //  */
  // public async destroy() {
  //   const { ctx } = this;
  //   const { params } = ctx.validateResult;
  //   const realQuery = {
  //     ceib_idsId: params.id,
  //   };

  //   const realAttributes = { _id: 0 };

  //   let dtc = null;
  //   try {
  //     dtc = await ctx.service.health.detail(realQuery, realAttributes);

  //     if (!dtc) {
  //       ctx.throw(400, 'can not find specific health');
  //     }

  //     ctx.status = 204;
  //     ctx.body = await ctx.service.health.delete(realQuery);
  //   } catch (error: any) {
  //     this.logger.error('delete health failed: ', error);
  //     ctx.status = 400;
  //     ctx.body = error.message;
  //   }
  // }
}
