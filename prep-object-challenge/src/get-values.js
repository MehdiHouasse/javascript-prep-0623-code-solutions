function getValues(object) {
  const result = [];
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
}
getValues();
