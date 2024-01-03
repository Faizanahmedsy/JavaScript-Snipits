import _ from "lodash";

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  a: 1,
  b: 4,
  d: 5,
};

const difference = _.differenceWith(obj1, obj2, _.isEqual);

console.log(difference); // { b: 4, d: 5 }
