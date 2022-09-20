export default class Ball {
  x = 0;
  y = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    const ctx = document.getElementById("canvas").getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "cornflowerblue";
    ctx.arc(this.x, this.y, 12, 0, 2 * Math.PI);
    ctx.fill();
  }
}
