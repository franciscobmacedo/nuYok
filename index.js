const STEP = 20;
const button = document.getElementsByTagName("button")[0];
const drawCanvas = (img, canvas) => {
  canvas.width = img.width;
  canvas.height = img.height;

  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);
  let directionX = Math.random() < 0.5 ? -1 : 1;
  let directionY = Math.random() < 0.5 ? -1 : 1;
  const moveImage = (position) => {
    context.drawImage(
      img,
      position * STEP * directionX,
      position * STEP * directionY
    );
    if (position * STEP < img.height) {
      moveImage(position + 1);
    }
  };
  moveImage(1);
};

const drawAllCanvas = () => {
  const containers = document.getElementsByClassName("container");

  [...containers].forEach((container) => {
    const img = container.getElementsByTagName("img")[0];
    const canvas = container.getElementsByTagName("canvas")[0];
    drawCanvas(img, canvas);
  });
};

window.addEventListener("load", function () {
  drawAllCanvas();
});

button.addEventListener("click", () => {
  drawAllCanvas();
});
