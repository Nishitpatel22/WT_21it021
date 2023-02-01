function changeBackground() {
    var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  setInterval(changeBackground, 60000);