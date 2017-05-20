(function(app) {
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>Current time</h1>' +
      '<current-time></current-time>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

})(window.app || (window.app = {}));
