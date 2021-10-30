export type Color = [number, number, number];
export type TickFn = () => void;
export type EffectFn<Arg> = (
  arg: Arg,
  timing: number,
  color: Color,
  index: number,
  array: Color[]
) => Color;

export enum GroupType {
  Initial,
  TurnLeft,
  TurnRight,
  Stop
}

export type Strip = Record<GroupType, Group[]>;

export interface Group {
  name: string;
  leds: Color[];
  currentAction: TickFn;
  defaultAction: TickFn;
}

export interface OutputInstance {
  push(colors: Color[]): void;
  // push(index: number, color: Color): void; // TODO: next feature
  reset(): void;
  groups: Group[];
}

export interface GroupConfig {
  name: string;
  length: number;
  // indexes?: number[]; // TODO: next feature
}

export interface OutputConfig {
  groups: GroupConfig[];
}

export type OutputFactory = (config: OutputConfig) => OutputInstance;
