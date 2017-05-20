(function(app) {
  var Component = ng.core.Component;
  var HoraAtualService = app.HoraAtualService;

  app.CurrentTimeComponent = Component({
    selector: 'current-time',
    template: '<p>{{current_time}}</p>'
    // template: '<p><em>alo</em></p>'
  })
  .Class({
    constructor: [HoraAtualService, function CurrentTimeComponent(horaAtualService) {
      var self = this;
      horaAtualService.generateCurrentTime(1000, function(hora_atual) {
        self.current_time = hora_atual;
      });
    }]
  });

})(window.app || (window.app = {}));
