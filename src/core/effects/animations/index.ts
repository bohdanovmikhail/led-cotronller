import * as TIMING from "./_timingFunctions";

interface AnimationConfig {
  render: any;
  onEnd?: any;

  duration: number;
  timing: string | any;
}

export function animation({
  render,
  onEnd,
  duration = 300,
  timing = "linear"
}: AnimationConfig) {
  if (typeof timing === "string") {
    timing = TIMING[timing];
  }

  timing = timing || TIMING.linear;

  const startTime: number = performance.now();

  function animate(currentTime: number) {
    let fraction = (currentTime - startTime) / duration;

    if (fraction >= 1) {
      fraction = 1;
    } else if (fraction < 0) {
      fraction = 0;
    }

    const percent = timing(fraction);

    render(percent);

    if (percent < 1) {
      requestAnimationFrame(animate);
    } else if (onEnd) {
      onEnd();
    }
  }

  requestAnimationFrame(animate);
}
