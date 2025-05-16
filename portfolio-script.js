const tiles = document.querySelectorAll(".project-tile");

tiles.forEach((tile) => {
  tile.addEventListener("pointerenter", () => {
    tile.style.opacity = 0.5;
  });

  tile.addEventListener("pointerleave", () => {
    tile.style.opacity = 1;
  });
});

tiles.forEach((tile) => {
  const heading = tile.querySelector("h2");

  tile.addEventListener("pointerenter", () => {
    heading.classList.add("visible");
  });

  tile.addEventListener("pointerleave", () => {
    heading.classList.remove("visible");
  });
});
