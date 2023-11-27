function makeDraggable(element) {
  var offsetX, offsetY, isDragging = false;

  element.addEventListener("mousedown", function (event) {
    isDragging = true;
    offsetX = event.clientX - parseFloat(getComputedStyle(element).left);
    offsetY = event.clientY - parseFloat(getComputedStyle(element).top);
  });

  document.addEventListener("mousemove", function (event) {
    if (isDragging) {
      event.preventDefault();
      event.stopPropagation();
      var x = event.clientX - offsetX;
      var y = event.clientY - offsetY;

      x = Math.min(window.innerWidth - element.width, Math.max(0, x));
      y = Math.min(window.innerHeight - element.height, Math.max(0, y));

      element.style.left = x + "px";
      element.style.top = y + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const draggables = document.querySelectorAll(".draggable");

    draggables.forEach((draggable) => {
      let initialX;
      let initialY;

      let offsetX = 0;
      let offsetY = 0;

      draggable.addEventListener("touchstart", (e) => {
        e.preventDefault();

        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;

        const rect = draggable.getBoundingClientRect();
        offsetX = initialX - rect.left;
        offsetY = initialY - rect.top;
      });

      draggable.addEventListener("touchmove", (e) => {
        e.preventDefault();

        const currentX = e.touches[0].clientX - offsetX;
        const currentY = e.touches[0].clientY - offsetY;

        draggable.style.left = `${currentX}px`;
        draggable.style.top = `${currentY}px`;
      });
    });
  });
}
  var draggableElements = document.querySelectorAll(".draggable");
  draggableElements.forEach(function (element) {
    makeDraggable(element);
  });