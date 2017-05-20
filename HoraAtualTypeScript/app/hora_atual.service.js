//import { CurrentTime } from './current_time.model';
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HoraAtualService;
    return {
        setters:[],
        execute: function() {
            HoraAtualService = (function () {
                function HoraAtualService() {
                }
                HoraAtualService.prototype.getHoraAtual = function () {
                    var today = new Date();
                    this.hora_atual = today.toUTCString();
                    return this.hora_atual;
                };
                HoraAtualService.prototype.generateHoraAtual = function (delay, callback) {
                    var _this = this;
                    callback(this.getHoraAtual());
                    setInterval(function () { return callback(_this.getHoraAtual()); }, delay);
                };
                return HoraAtualService;
            }());
            exports_1("HoraAtualService", HoraAtualService);
        }
    }
});
