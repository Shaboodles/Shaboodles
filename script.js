const comics = [
  "comics/1.png",
  "comics/2.png"
];

let current = 0;
const img = document.getElementById("comic");

function showComic(index) {
  if(index >= 0 && index < comics.length){
    img.src = comics[index];
  }
}

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight") {
    current = Math.min(current + 1, comics.length - 1);
    showComic(current);
  }
  if(e.key === "ArrowLeft") {
    current = Math.max(current - 1, 0);
    showComic(current);
  }
});

