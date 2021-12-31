// This implementation has the advantage of having constant time to find solution
export class Challenge {
  static solution(number: number) {
    const fiveCoFactor = Math.floor((number - 1) / 5);
    const threeCoFactor = Math.floor((number - 1) / 3);
    const fifteenCoFactor = Math.floor((number - 1) / 15);

    const fiveSum = (5 * fiveCoFactor * (fiveCoFactor + 1)) / 2;
    const threeSum = (3 * threeCoFactor * (threeCoFactor + 1)) / 2;
    const fifteenSum = (15 * fifteenCoFactor * (fifteenCoFactor + 1)) / 2;

    return fiveSum + threeSum - fifteenSum;
  }
}
