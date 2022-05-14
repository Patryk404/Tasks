// 1. Please write a function that shows the usage of closures
const outerFunc = () => {
  console.log("Function outer");
  const innerFunc = () => {
    console.log("Function inner");
  };

  innerFunc();
};

outerFunc();

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const arraySum = (array) => {
  let sum = 0;
  array.map((number) => {
    sum += number;
  });

  return sum;
};

console.log(arraySum([9, 1, 22, 0, 2]));

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flatArray = (array) => {
  const flat = [];

  array.forEach((value) => {
    if (Array.isArray(value)) {
      flat.push(...flatArray(value));
    } else {
      flat.push(value);
    }
  });

  return flat;
};

console.log(flatArray([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]));

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const findCommonElements = (array1, array2) => {
  const similar = [];
  array1.map((value1) => {
    array2.map((value2) => {
      if (value1 === value2) {
        similar.push(value1);
      }
    });
  });

  return similar;
};

console.log(
  findCommonElements(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])
);

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const findDifferentElements = (array1, array2) => {
  const different = [];
  const similar = findCommonElements(array1, array2);
  const array3 = array1.concat(array2);
  array3.map((value) => {
    let similarity = false;
    similar.map((similarValue) => {
      if (similarValue === value) {
        similarity = true;
      }
    });
    if (!similarity) {
      different.push(value);
    }
  });
  return different;
};

console.log(
  findDifferentElements(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])
);

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const makeTuples = (array1, array2) => {
  const tuples = [];
  for (let i = 0; i < array1.length; i++) {
    const temp = [array1[i], array2[i]];
    tuples.push(temp);
  }

  return tuples;
};

console.log(makeTuples([1, 2, 3], [4, 5, 6, 7]));

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const findPath = (array, object) => {
  let objectValue = object;
  array.map((value) => {
    objectValue = objectValue[value];
  });

  return objectValue;
};

console.log(findPath(["a", "b", "c", "d"], { a: { b: { c: { d: "23" } } } }));

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compareObjects = (object1, object2) => {
  const keys = [];
  Object.keys(object1).map((value1) => {
    let key = false;
    Object.keys(object2).map((value2) => {
      if (value1 == value2) {
        key = true;
      }
    });
    keys.push(key);
  });

  const values = [];
  Object.values(object1).map((value1) => {
    let value = false;
    Object.values(object2).map((value2) => {
      if (value1 == value2) {
        value = true;
      }
    });
    values.push(value);
  });

  for (const value of values) {
    if (!value) {
      return false;
    }
  }
  for (const key of keys) {
    if (!key) {
      return false;
    }
  }
  return true;
};

console.log(
  compareObjects({ a: "b", c: "d" }, { c: "d", a: "b" }),
  compareObjects({ a: "c", c: "a" }, { c: "d", a: "b", q: "s" })
);

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const returnObjectNoMatchKeys = (array, object) => {
  noMatchKeys = [];
  Object.keys(object).map((key) => {
    let similar = false;
    array.map((value) => {
      if (key === value) {
        similar = true;
      }
    });
    if (!similar) {
      noMatchKeys.push(key);
    }
  });

  let output = {};
  noMatchKeys.map((key) => {
    output = { ...output, [key]: object[key] };
  });

  return output;
};

console.log(
  returnObjectNoMatchKeys(["color", "size"], {
    color: "Blue",
    id: "22",
    size: "xl",
  })
);

// returnObjectNoMatchKeys(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' });
