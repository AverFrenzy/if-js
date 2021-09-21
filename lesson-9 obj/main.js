const obj1 = {
  a: ['a', 121],
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: ['a', 121],
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (obj1, obj2) => {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    for (let i = 0; i < obj1.length; i++) {
      if (obj1.length !== obj2.length || obj1[i] !== obj2[i]) {
        return false
      }
    }
  }
  if (obj1 === obj2) {
    return true;
  }
  if (obj1 == null || typeof obj1 !== "object" || obj2 == null || typeof obj2 !== "object") {
    return false
  }
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}
console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3));  // false
