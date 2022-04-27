export const isLoginValid = (obj) => {
  return Object
  .values(obj)
  .map(value => value.length >= 6 && !/\s/.test(obj))
};
