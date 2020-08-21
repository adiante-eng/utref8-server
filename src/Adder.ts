export class Adder {
  public static add(a: number, b: number): number {
    return a + b;
  }

  public static addAll(...values: number[]): number {
    return values.reduce(Adder.add, 0);
  }
}
