const getReadableMinutes = (minutes = 0) => {
  if (minutes > 1) {
    return `${minutes} minutos de leitura`;
  }

  return '1 minuto para leitura';
};

const timeToRead = (content = '') => {
  const WORDS_PER_MINUTE = 200;
  const words = content.split(' ');
  const minutes = parseInt(words.length / WORDS_PER_MINUTE, 10);

  return getReadableMinutes(minutes);
};

module.exports = timeToRead;
