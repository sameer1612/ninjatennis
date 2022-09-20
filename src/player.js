import Racket, { height } from "./racket.js";

export default class Player {
  racket = null;

  constructor(name, side) {
    this.name = name;
    const x = side === "right" ? window.innerWidth - 10 : 0;
    const y = window.innerHeight / 2 - height / 2;
    const color = side === "right" ? "violet" : "aqua";
    this.racket = new Racket(x, y, color);
  }
}
