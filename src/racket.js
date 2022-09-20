export const height = 100;

export default class Racket {
  x = 0;
  y = 0;
  color = "";

  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  setPosition(y) {
    this.y = y;
  }

  draw() {
    const ctx = document.getElementById("canvas").getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 10, height);
  }

  visible() {
    return this.y > 0 && this.y < window.innerHeight - height;
  }

  move(steps, direction) {
    const factor = direction === "up" ? -1 : 1;
    this.setPosition(this.y + steps * factor);
    this.draw();
  }
}
