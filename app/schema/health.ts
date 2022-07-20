/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-19 16:43:13
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 16:43:27
 * @Description: file content...
 */
'use strict';

import Joi from 'joi';
import { getList } from './globalTemplate';

/**
 * healths 前端数据校验
 */

exports.list = {
  query: {
    // search: Joi.string().trim(),
    ...getList,
  },
};

exports.detail = {
  params: {
    id: Joi.string().required(), // ceibsId
  },
};

exports.add = {
  body: {
    ceibsId: Joi.string().required(),
    isGreen: Joi.string().required().valid('00', '11', '01', '10'),
  },
};

exports.update = {
  params: {
    id: Joi.string().required(),
  },
  body: {
    // ceibsId: Joi.string(),
    isGreen: Joi.string(),
  },
};

exports.delete = {
  params: {
    id: Joi.string().required(), // ceibsId
  },
};
