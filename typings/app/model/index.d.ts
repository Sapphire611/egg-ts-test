// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHealth from '../../../app/model/Health';

declare module 'egg' {
  interface IModel {
    Health: ReturnType<typeof ExportHealth>;
  }
}
