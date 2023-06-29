function isVowel(char) {
  const lowercaseChar = char.toLowerCase();
  return (
    lowercaseChar === 'a' ||
    lowercaseChar === 'e' ||
    lowercaseChar === 'i' ||
    lowercaseChar === 'o' ||
    lowercaseChar === 'u'
  );
}
isVowel();
