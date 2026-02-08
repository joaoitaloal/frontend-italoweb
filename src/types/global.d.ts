export {};

declare global {
  interface Window {
    PIXI: typeof import("pixi.js");
  }
}