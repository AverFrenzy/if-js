// Function paints paragraph in colors from array
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue']
// let currentColor = -1

const changeTextColor = (text) => {
  const range = {
    from: 0,
    to: 4,
    colors: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (this.current === undefined) {
        this.current = this.from;
      }
      text.style.color = this.colors[this.current]
      this.current++
      if (this.current >= this.colors.length) {
        this.current = this.from
      }
    }
  }
  return () => {
    range.next()
  }
};

text1.addEventListener('click', changeTextColor(text1))
text2.addEventListener('click', changeTextColor(text2))
text3.addEventListener('click', changeTextColor(text3))

