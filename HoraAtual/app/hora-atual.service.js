(function(app) {
  var Class = ng.core.Class;

  app.HoraAtualService = Class({
    constructor: function HoraAtualService() {

    },
    getCurrentTime: function() {
      var today = new Date();
      return today;
    },
    generateCurrentTime: function(delay, callback) {
      var self = this;
      callback(this.getCurrentTime());
      setInterval(function() {
        callback(self.getCurrentTime());
      }, delay);
    }
  });

})(window.app || (window.app = {}));
