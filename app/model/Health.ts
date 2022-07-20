/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-15 11:57:00
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 17:53:33
 * @Description: model for health...
 */

// import mongoose from 'mongoose';
// import paginate from 'mongoose-paginate-v2';

import { Schema, model } from 'mongoose';

export interface Health {
  ceibsId: string;
  isGreen?: string;
}

/** 健康状态 Schema */

const HealthSchema = new Schema<Health>({
  // 人员唯一标识 中欧人员ID
  ceibsId: { type: String, required: true },
  // isGreen true-绿码 false-非绿码
  isGreen: { type: String }, // 修改后，直接存具体内容:("00"/"11"/"01"/"10"/null)
});

const HealthModel = model<Health>('Health', HealthSchema);

export default HealthModel;

// // declare a mongoose document based on a Typescript interface representing your schema
// interface HealthDocument extends app.mongoose.Document, IUser {}

// create the paginated model
// return mongoose.model<HealthDocument, mongoose.PaginateModel<HealthDocument>>('Healths', HealthSchema, 'healths');

//   return mongoose.model('Health', HealthSchema, 'healths');
// };

// export default class Health extends BaseModel {
//   Schema = new this.Schema({
//     // 人员唯一标识 中欧人员ID
//     ceibsId: { type: String, required: true },
//     // isGreen true-绿码 false-非绿码
//     isGreen: { type: String }, // 修改后，直接存具体内容:("00"/"11"/"01"/"10"/null)
//   });

//   return mongoose.model('Health', HealthSchema, 'healths');
// }
