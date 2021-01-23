exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

    return arr.indexOf(item);
  },

  sum: function(arr) {

    return arr.reduce((a,b) => a + b, 0);
  },

  remove: function(arr, item) {
    return arr.filter(value => value === item);
  },

  removeWithoutCopy: function(arr, item) {
    arr.filter(value => value === item);
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop()
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    return arr.map(function (x) {
      return Math.pow(x, 2);
    });
  },

  findAllOccurrences: function(arr, target) {

  }
};
