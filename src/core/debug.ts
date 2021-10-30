const MEASURES_DATA = {};

export function log(message: string) {
  console.log(message);
}

export function measureStart(name: string): void {
  MEASURES_DATA[name] = performance.now();
}

export function measureEnd(name: string): void {
  const end = performance.now();
  const difference = end - MEASURES_DATA[name];

  log(`Measure "${name}" executed in ${difference}ms`);
}
