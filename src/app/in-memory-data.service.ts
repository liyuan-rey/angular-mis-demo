import { InMemoryDbService } from 'angular-in-memory-web-api';
import { default as uniqueId } from 'lodash-es/uniqueId';

// TODO 作为调试服务用途，也许不必指定数据类型，因为这会导致 import 导入形成
// 从 app 到 module 的模块依赖
import { Incident } from './incidents/shared/incident';
import { User } from './shared/user';
import { NavigationItem } from './sidebar/shared/navigation-item';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const navigationSettings: NavigationItem[] = [
      {
        id: uniqueId(),
        label: '警情管理',
        children: [
          { id: uniqueId(), label: '当前警情', uri: '/incidents/pending-list' },
          { id: uniqueId(), label: '历史警情', uri: '' }
        ]
      },
      {
        id: uniqueId(),
        label: '资源管理',
        children: [
          { id: uniqueId(), label: '资源人', uri: '/forces/ground-forces' },
          { id: uniqueId(), label: '资源车', uri: '' },
          { id: uniqueId(), label: '资源物资', uri: '' }
        ]
      }
    ];

    const incidents: Incident[] = [
      {
        id: uniqueId(),
        title: '滨湖路积水交通堵塞',
        reportTime: new Date('2018-04-01T01:29:53Z'),
        level: 1,
        description:
          '5月6日晚事发地区普降暴雨，降水量达到50毫米，加之地势低洼、排涝设施设计不科学，周边水量聚集在路面，最深处积水达到 1.1米。晚上光线较暗，过往车辆多数引擎进水熄火。同时引起周边路段交通堵塞长达2.5公里，需要及时上报市、区政府协同相关部门紧急处置。'
      } as Incident,
      {
        id: uniqueId(),
        title: '关山口2人争吵引围观',
        reportTime: new Date('2018-04-01T08:05:27Z'),
        level: 3,
        description: '关山口1男子与1女子发生争执，引起群众围观。'
      } as Incident
    ];

    const loginUser: User = {
      id: uniqueId(),
      username: 'John Patrick'
    };

    return {
      'navigation-settings': navigationSettings,
      'login-user': loginUser,
      'notice-count': incidents.length,
      incidents
    };
  }
}
