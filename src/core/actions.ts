import { Group, State } from "../scheme";

export function actionPlay(): void {}

export function actionStop(group: Group): void {
  group.state = State.Pause;
}

export function actionRepeat(group: Group): void {
  group.executed = 0;
}

export function action(group: Group): void {}
