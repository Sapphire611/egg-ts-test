/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-19 15:11:37
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 15:34:33
 * @Description: file content...
 */

import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

import paginate from 'mongoose-paginate-v2';

class BaseSchema extends Schema {
  public paginate = this.plugin(paginate);
}

export default class BaseModel extends mongoose.Model {
  public constructor(ctx: any) {
    super(ctx);
  }

  public Schema: BaseSchema;
}
