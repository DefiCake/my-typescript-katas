const SPACE = " ";
const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");
export const high = (str: string): string => {
  const words = str.split(SPACE);
  let bestWord = words[0];

  words
    .map((word) =>
      word
        .split("")
        .map((character) => LETTERS.indexOf(character) + 1)
        .reduce((prev, cur) => prev + cur)
    )
    .reduce((prev, cur, index) => {
      if (cur > prev) {
        bestWord = words[index];
        return cur;
      } else return prev;
    });

  return bestWord;
};
