const fruit = require('../data/data.js');
const index = () => {
    for (data of fruit) {
        console.log(data);
    }
}
const store = (data) => {
    fruit.push(data);
}
const update = (position, name) => {
    fruit[position] = name;
}
const destroy = (position) => {
    fruit.splice(position, 1)
}
module.exports = { index, store, update, destroy };