const SPACE = " ";

function reverseWord(word: string): string {
  return word.split("").reduceRight((prev, cur) => prev + cur);
}

export function spinWords(words: string): string {
  return words
    .split(SPACE)
    .map((word) => (word.length > 4 ? reverseWord(word) : word))
    .join(SPACE);
}
