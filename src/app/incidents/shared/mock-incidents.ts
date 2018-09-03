import uniqueId from 'lodash/uniqueId';

import { Incident } from './incident';

export const INCIDENTS: Incident[] = [
  {
    id: uniqueId(),
    title: '滨湖路积水交通堵塞',
    reportTime: new Date('2018-04-01T01:29:53Z'),
    level: 1,
    description:
      '5月6日晚事发地区普降暴雨，降水量达到50毫米，加之地势低洼、排涝设施设计不科学，周边水量聚集在路面，最深处积水达到 1.1米。晚上光线较暗，过往车辆多数引擎进水熄火。同时引起周边路段交通堵塞长达2.5公里，需要及时上报市、区政府协同相关部门紧急处置。'
  },
  {
    id: uniqueId(),
    title: '关山口2人争吵引围观',
    reportTime: new Date('2018-04-01T08:05:27Z'),
    level: 3,
    description: '关山口1男子与1女子发生争执，引起群众围观。'
  }
];