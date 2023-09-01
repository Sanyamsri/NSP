let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.getElementsByClassName("items");
let scrollIndex = 1;

prevButton.addEventListener("click", () => {
  nextButton.style.display = "revert";
  if (scrollIndex === 0) {
    prevButton.style.display = "none";
  }
  scrollIndex = Math.max(scrollIndex - 1, 0);
  Array.prototype.map.call(
    container,
    (card) => (card.style.translate = `-${scrollIndex * card.offsetWidth}px`)
  );
});

nextButton.addEventListener("click", () => {
  prevButton.style.display = "revert";
  if (scrollIndex === container.length) {
    nextButton.style.display = "none";
  }
  scrollIndex = Math.min(container.length, scrollIndex + 1);
  Array.prototype.map.call(
    container,
    (card) => (card.style.translate = `-${scrollIndex * card.offsetWidth}px`)
  );
});
