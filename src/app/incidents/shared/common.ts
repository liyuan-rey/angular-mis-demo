const LevelStyle = {
  1: ['level-urgent', '紧急'],
  2: ['', ''],
  3: ['level-normal ', '普通'],
  4: ['', '']
};

function getLevelStyle(level) {
  return LevelStyle[level + ''][0];
}

function getLevelTitle(level) {
  return LevelStyle[level + ''][1];
}

export default {
  getLevelStyle: getLevelStyle,
  getLevelTitle: getLevelTitle
};
