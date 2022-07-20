/*
 * @Author: Sapphire Liu
 * @Date: 2022-07-19 15:46:53
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-07-19 16:32:20
 * @Description: middleware for validate...
 */
'use strict';

import Joi from 'joi';

// 校验器封装
export default function validate(schema: any) {
  const validateFunctions: any = {};
  if (schema.query) {
    const realSchema = Joi.object().keys(schema.query);
    validateFunctions.query = (ctx: any) => realSchema.validate(ctx.query);
  }
  if (schema.body) {
    const realSchema = Joi.object().keys(schema.body);
    validateFunctions.body = (ctx: any) => realSchema.validate(ctx.request.body);
  } else if (schema.arrBody) {
    const realSchema = Joi.array().items(Joi.object(schema.arrBody));
    validateFunctions.body = (ctx: any) => realSchema.validate(ctx.request.body);
  }
  if (schema.params) {
    const realSchema = Joi.object().keys(schema.params);
    validateFunctions.params = (ctx: any) => realSchema.validate(ctx.params);
  }
  return async function (ctx: any, next: any) {
    ctx.validateResult = {};
    for (const fk of Object.keys(validateFunctions)) {
      const validateResult = validateFunctions[fk](ctx);
      if (validateResult.error) {
        ctx.throw(400, 'validate error', {
          debug: validateResult,
        });
      }
      ctx.validateResult[fk] = validateResult.value;
    }
    return next();
  };
}
