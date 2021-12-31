export class Challenge {
  static solution(number: number) {
    let result = 0;
    for (let i = number - 1; i > 0; i--) {
      if (i % 3 === 0 || i % 5 === 0) result += i;
    }
    return result;
  }
}
