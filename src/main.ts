import { log, measureStart, measureEnd } from "./core/debug";
import { createGroup } from "./core/initial-data";

// Main code
(function () {
  const SNAPS_PER_SECOND = 30;
  const SNAP_TIME = 1000 / SNAPS_PER_SECOND;

  const group = createGroup("test", 10);
  let prevTime = performance.now();
  let currTime = performance.now();

  setTimeout(() => {
    // <debug-info>
    measureEnd("waiting");
    log("before");
    measureStart("calculations");
    // </debug-info>

    // <execution>
    currTime = performance.now();

    prevTime = currTime;
    // </execution>

    // <debug-info>
    measureEnd("calculations");
    log("after");
    measureStart("waiting");
    // </debug-info>
  }, SNAP_TIME);
})();
