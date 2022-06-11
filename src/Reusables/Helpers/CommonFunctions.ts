export const isEmpty = (val: any): boolean => {
  for (const prop in val) {
    if (Object.prototype.hasOwnProperty.call(val, prop)) return false;
  }
  return true;
};
