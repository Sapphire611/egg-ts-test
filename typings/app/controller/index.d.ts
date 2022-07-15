// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBasic from '../../../app/controller/basic';
import ExportHealth from '../../../app/controller/health';

declare module 'egg' {
  interface IController {
    basic: ExportBasic;
    health: ExportHealth;
  }
}
