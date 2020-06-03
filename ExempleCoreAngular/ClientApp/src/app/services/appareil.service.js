"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppareilService = /** @class */ (function () {
    function AppareilService() {
        this.appareils = [
            {
                id: 1,
                name: 'Machine à laver',
                status: 'éteint'
            },
            {
                id: 2,
                name: 'Télévision',
                status: 'allumé'
            },
            {
                id: 3,
                name: 'Ordinateur',
                status: 'éteint'
            }
        ];
    }
    AppareilService.prototype.getAppareilById = function (id) {
    };
    AppareilService.prototype.switchOnAll = function () {
        for (var _i = 0, _a = this.appareils; _i < _a.length; _i++) {
            var appareil = _a[_i];
            appareil.status = 'allumé';
        }
    };
    AppareilService.prototype.switchOffAll = function () {
        for (var _i = 0, _a = this.appareils; _i < _a.length; _i++) {
            var appareil = _a[_i];
            appareil.status = 'éteint';
        }
    };
    AppareilService.prototype.switchOnOne = function (index) {
        this.appareils[index].status = 'allumé';
    };
    AppareilService.prototype.switchOffOne = function (index) {
        this.appareils[index].status = 'éteint';
    };
    return AppareilService;
}());
exports.AppareilService = AppareilService;
//# sourceMappingURL=appareil.service.js.map