var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", 'aurelia-validation', "aurelia-validatejs", 'validate.js'], function (require, exports, aurelia_framework_1, aurelia_validation_1, aurelia_validatejs_1, validate_js_1) {
    "use strict";
    var UIValidationRenderer = (function () {
        function UIValidationRenderer(boundaryElement) {
            this.boundaryElement = boundaryElement;
        }
        UIValidationRenderer.prototype.render = function (error, target) {
            if (!target || !(this.boundaryElement === target || this.boundaryElement.contains(target))) {
                return;
            }
            var formGroup = getParentByClass(target, 'ui-input-group');
            formGroup.classList.add('ui-invalid');
            formGroup.classList.remove('ui-valid');
            if (formGroup.lastElementChild !== null)
                formGroup = formGroup.lastElementChild;
            var helpBlock = formGroup.lastElementChild;
            if (helpBlock) {
                if (!helpBlock.classList) {
                    helpBlock = null;
                }
                else if (!helpBlock.classList.contains('ui-input-error')) {
                    helpBlock = null;
                }
            }
            if (!helpBlock) {
                helpBlock = aurelia_framework_1.DOM.createElement('div');
                helpBlock.classList.add('ui-input-help');
                helpBlock.classList.add('ui-input-error');
                formGroup.appendChild(helpBlock);
            }
            helpBlock.error = error;
            helpBlock.textContent = error ? error.message : 'Invalid';
        };
        UIValidationRenderer.prototype.unrender = function (error, target) {
            if (!target || !(this.boundaryElement === target || this.boundaryElement.contains(target))) {
                return;
            }
            var formGroup = getParentByClass(target, 'ui-input-group');
            formGroup.classList.remove('ui-invalid');
            formGroup.classList.add('ui-valid');
            var messages = formGroup.querySelectorAll('.ui-input-error');
            var i = messages.length;
            while (i--) {
                var message = messages[i];
                if (message.error !== error) {
                    continue;
                }
                message.error = null;
                message.remove();
            }
        };
        UIValidationRenderer = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_validation_1.validationRenderer, 
            __metadata('design:paramtypes', [Element])
        ], UIValidationRenderer);
        return UIValidationRenderer;
    }());
    exports.UIValidationRenderer = UIValidationRenderer;
    var validator = new aurelia_validatejs_1.Validator();
    validate_js_1.validate.validators.map = function (map) {
        var errors = [];
        map.forEach(function (v, k) {
            console.log(v, validator.validateObject(v));
            if (validator.validateObject(v).length > 0)
                errors.push(k);
        });
        return errors.length > 0 ? errors.join(',') + " has invalid values" : null;
    };
    function mapRule(config) {
        return new aurelia_validatejs_1.ValidationRule('map', config);
    }
    function validatemap(targetOrConfig, key, descriptor) {
        return aurelia_validatejs_1.base(targetOrConfig, key, descriptor, mapRule);
    }
    exports.validatemap = validatemap;
});
