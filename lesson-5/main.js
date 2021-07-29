// Function paints paragraph in colors from array
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue']
let currentColor = -1

function changeTextColor(text) {
  currentColor++;
  if (currentColor >= 5) {
    currentColor = 0;
  }
  text.style.color = colors[currentColor];
}

text1.addEventListener('click', changeTextColor.bind(null, text1))
text2.addEventListener('click', changeTextColor.bind(null, text2))
text3.addEventListener('click', changeTextColor.bind(null, text3))

// Function that sum two numbers (made with closure)
const sum = (a) => (b) => a + b

console.log(sum(5)(2));