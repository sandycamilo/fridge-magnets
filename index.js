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
}

var draggableElements = document.querySelectorAll(".draggable");
draggableElements.forEach(function (element) {
  makeDraggable(element);
});