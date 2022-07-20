/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-19 16:42:04
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-20 12:29:20
 * @Description: schema global template...
 */

'use strict';

import Joi from 'joi';

export const getListNoSort = {
  page: Joi.number().integer().min(0),
  size: Joi.number().integer().min(1),
};

export const sort = {
  // column: Joi.string().default('updatedAt'),
  sort: Joi.string(),
};

export const getList = {
  ...exports.getListNoSort,
  ...exports.sort,
};
