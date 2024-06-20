function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: 'John', age: 30 };
const obj2 = { city: 'New York' };

const mergedObj = merge(obj1, obj2);

console.log(mergedObj);