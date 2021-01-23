exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    var stringResult = '';
    var inputStringArr = str.split('');
    var charItem;
    var charCount = {};

    for (var i = 0, len = inputStringArr.length; i < len; i++) {

      charItem = inputStringArr[i];
      charCount[charItem] = typeof charCount[charItem] === 'undefined' ? 1 : charCount[charItem] + 1;

      if (charCount[charItem] <= amount) {
        stringResult += charItem;
      }
    }

    return stringResult;
  },

  wordWrap: function(str, cols) {
    var words = str.split(' ');
    var stringResult = '';
    var currentLength = 0;
    var item;
    var token;

    for (var i = 0, lgth = words.length; i < lgth; i++) {
      item = words[i];
      currentLength += item.length;

      if (i === 0) {
        token = '';
      } else if (currentLength > cols) {
        currentLength = item.length;
        token = '\n';
      } else {
        token = ' ';
      }
      stringResult+= token +item;
    }

    return stringResult;
  },

  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
