/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-19 14:33:17
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 14:43:03
 * @Description: file content...
 */

import { Service } from 'egg';
import * as mongoose from 'mongoose'; // tslint:disable-line

interface option4pageable {
  pagenation?: boolean;
  page?: number;
  limit?: number;
  sort?: string;
  populate?: Array<object>;
  select?: object;
}

export default class BaseService extends Service {
  /**
   * service对应的mongoose模型
   */

  public model: mongoose.Model<any>;

  public options: option4pageable;
}
