/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-15 14:17:19
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 17:47:50
 * @Description:  service 4 health
 */

import BaseService from '../core/BaseService';
import Health from '../model/Health';
// interface Query {
//   sort?: string;
// }

export default class HealthService extends BaseService {
  public constructor(ctx: any) {
    super(ctx);
  }

  async list(pageable, query) {
    this.logger.info(`method start HealthService.list query = ${JSON.stringify(query)}`);

    // const { ctx } = this;
    // page和size在pageable中已有,sort单独提出，删除这三个属性，剩下的作为query
    const realQuery = { ...query };
    const sortStr = realQuery.sort;

    const condition = {};
    const options: any = {};

    // 分页参数
    if (pageable?.size < 0) {
      options.pagination = false;
    } else {
      options.page = pageable?.page;
      options.limit = pageable?.size;
    }
    options.sort = sortStr;
    // options.populate = this.populate;
    options.select = { _id: 0 };

    this.logger.info('query option is ', options);

    const result = await Health.find(condition);

    this.logger.info(`method end HealthService.list result = ${JSON.stringify(result)}`);

    return result;
  }

  async create() {
    return 'create';
  }
  async detail() {
    return 'detail';
  }
  async update() {
    return 'update';
  }
  async delete() {
    return 'delete';
  }
}
