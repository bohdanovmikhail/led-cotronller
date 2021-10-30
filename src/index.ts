import { createGroup } from "./core/initial-data";
import { log, measureStart, measureEnd } from "./core/debug";
import { Color } from "./scheme";

import "./styles.css";

function makeFromHTML(html: string): Element {
  const creator = document.createElement("div");
  creator.innerHTML = html;

  return creator.children[0];
}

function makeBox(): Element {
  return makeFromHTML('<div class="box"></box>');
}

function makeBoxes(length: number) {
  return Array(length).fill(null).map(makeBox);
}

const container = makeFromHTML('<div id="boxes"></div>');
document.body.append(container);

const boxes: any = makeBoxes(10);
boxes.forEach((box) => container.append(box));

function colorToString([red, green, blue]) {
  return `rgb(${red}, ${green}, ${blue})`;
}

function effectGradient(from: Color, to: Color) {
  return function (leds: Color[]) {
    return function (timing: number) {};
  };
}
