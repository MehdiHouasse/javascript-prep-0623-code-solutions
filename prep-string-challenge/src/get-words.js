function getWords(str) {
  if (str === '') {
    return [];
  } else {
    return str.split(' ');
  }
}
getWords();
