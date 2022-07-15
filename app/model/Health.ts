/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-15 11:57:00
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-15 13:55:39
 * @Description: model for health...
 */
import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  /** 健康状态 Schema */
  const HealthSchema = new Schema({
    // 人员唯一标识 中欧人员ID
    ceibsId: { type: String, required: true },
    // isGreen true-绿码 false-非绿码
    isGreen: { type: String }, // 修改后，直接存具体内容:("00"/"11"/"01"/"10"/null)
  });

  return mongoose.model('Health', HealthSchema, 'healths');
};
