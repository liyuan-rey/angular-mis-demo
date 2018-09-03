import uniqueId from 'lodash/uniqueId';

import { NavigationItem } from './navigation-item';

export const NAVIGATION_CONFIG: NavigationItem[] = [
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
