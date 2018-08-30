import uniqueId from 'lodash/uniqueId';

import { User } from './user';

export const CURRENT_LOGIN_USER: User = {
  id: uniqueId(),
  username: 'John Patrick'
};
