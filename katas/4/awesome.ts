export const dashatize = (num: number) => {
  return String(Math.abs(num))
    .split(/([13579])/)
    .filter((s) => s !== "")
    .join("-");
};
