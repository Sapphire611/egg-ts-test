// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportValidator from '../../../app/middleware/validator';

declare module 'egg' {
  interface IMiddleware {
    validator: typeof ExportValidator;
  }
}
