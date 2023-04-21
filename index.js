const { v4: uuidv4 } = require('uuid');
const lodash = require('lodash')

console.log(uuidv4())
console.log(lodash.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
