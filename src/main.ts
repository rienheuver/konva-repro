import { Layer } from "konva/lib/Layer";
import { Stage } from "konva/lib/Stage";
import { Circle } from "konva/lib/shapes/Circle";
import "./style.css";

let width = window.innerWidth;
let height = window.innerHeight;

window.addEventListener("load", () => {
  const stage = new Stage({
    container: document.querySelector(".canvas-container") as HTMLDivElement,
    width,
    height,
    draggable: false,
  });

  const layer = new Layer();

  const circle = new Circle({
    x: width / 2 - 20,
    y: height / 2 - 20,
    radius: 40,
    fill: "red",
  });
  layer.add(circle);
  stage.add(layer);
});
