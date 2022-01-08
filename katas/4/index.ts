const BY_CHAR = "";

function isEven(n: number) {
  return n % 2 === 0;
}

export const dashatize = (num: any) => {
  if (isNaN(num)) return "NaN";
  if (typeof num != "number") return;

  let stringified = Math.abs(num).toString();
  if (stringified.length === 1) return stringified;

  stringified = stringified
    .split(BY_CHAR)
    .map((digit) => (isEven(parseInt(digit)) ? digit : `-${digit}-`))
    .join(BY_CHAR)
    .split("--")
    .join("-");

  if (stringified.startsWith("-")) stringified = stringified.substring(1);
  if (stringified.endsWith("-")) stringified = stringified.substring(0, stringified.length - 1);

  return stringified;
};
