(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var HoraAtualService = app.HoraAtualService;
  var CurrentTimeComponent = app.CurrentTimeComponent;
  var AppComponent = app.AppComponent;

  app.AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, CurrentTimeComponent],
    providers: [HoraAtualService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

})(window.app || (window.app = {}));
