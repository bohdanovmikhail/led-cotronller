import { Color, Group, Strip, OutputConfig } from "../scheme";

import { effectSolid } from "./effects";
import { fillBy } from "./utils";

export function createGroup(name: string, length: number): Group {
  const defaultColor = [0, 0, 0];
  const leds = fillBy(Array(length), effectSolid, defaultColor);

  return {
    name,
    leds,

    defaultAction: null,
    currentAction: null
  };
}

function createOutput(config: OutputConfig) {
  const groups = config.groups.map((g) => createGroup(g.name, g.length));
  const leds = groups.reduce((all, group) => all.concat(group.leds), []);

  function push(colors: Color[]) {}

  function reset() {}

  return {
    push,
    reset,
    groups
  };
}
