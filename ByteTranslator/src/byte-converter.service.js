"use strict";
var ByteConverterService = (function () {
    function ByteConverterService() {
        this.supportedByteConverter = ['byte', 'bit'];
        this.convertValue = {
            "byte/bit": 8,
            "bit/byte": 0.125
        };
    }
    ByteConverterService.prototype.getConvertValue = function (base, target) {
        if (base === target) {
            return 1;
        }
        return this.convertValue[base + '/' + target];
    };
    return ByteConverterService;
}());
exports.ByteConverterService = ByteConverterService;
