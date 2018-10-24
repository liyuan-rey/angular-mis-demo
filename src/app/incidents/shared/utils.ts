const LevelStyle = {
  1: ['level-urgent', '紧急'],
  2: ['', ''],
  3: ['level-normal ', '普通'],
  4: ['', '']
};

export function getLevelStyle(level: number): string {
  return LevelStyle[level + ''][0];
}

export function getLevelTitle(level: number): string {
  return LevelStyle[level + ''][1];
}
