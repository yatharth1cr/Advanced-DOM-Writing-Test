const allLines = document.querySelectorAll(".container p");
const container = document.querySelector(".container");

allLines.forEach((line) => {
  // dragstart event
  line.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.innerHTML);
    event.target.classList.add("dragging");
  });
});

// dragover event
container.addEventListener("dragover", (event) => {
  event.preventDefault();
});

// drop event
container.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.querySelector(".dragging");
  draggedElement.innerHTML = event.target.innerHTML;
  event.target.innerHTML = data;
  draggedElement.classList.remove("dragging");
});
