import Ball from "./ball.js";
import Player from "./player.js";

const canvas = document.getElementById("canvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

const ball = new Ball(width / 2, height / 2);
const player1 = new Player("Itachi", "left");
const player2 = new Player("Kakashi", "right");
const racket1 = player1.racket;
const racket2 = player2.racket;

function update() {
  ctx.clearRect(0, 0, width, height);

  ball.draw();
  racket1.draw();
  racket2.draw();

  requestAnimationFrame(update);
}

update();
