import { Color, EffectFn } from "../scheme";

export function fillBy<Arg>(
  arr: Color[],
  effect: EffectFn<Arg>,
  arg: Arg,
  timing: number = 0
): Color[] {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = effect(arg, timing, arr[i], i, arr);
  }

  return arr;
}
