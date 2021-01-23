exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {

  async: function(value) {
    var deferred = $.Deferred();
    setTimeout(function() {
      deferred.resolve(value);
    }, 5);

    return deferred.promise();
  },

  manipulateRemoteData: function(url) {
    var deferred = $.Deferred();

    $.ajax(url).then(function(response) {
      var someone = $.map(
        response.people, function(people) {
          return people.name;
        }
      );
      // deferred.resolve(someone);
      deferred.resolve(someone.sort());
    });

    return deferred.promise();
  }
};
