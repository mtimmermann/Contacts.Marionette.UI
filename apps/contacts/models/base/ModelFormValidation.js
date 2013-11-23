define(function(require, exports, module) {

    return Backbone.Model.extend({

        initialize: function(attributes, options) {
            this._initValidationCallbacks();
        },

        validateItem: function(attrs) {
            var validation = this.isValid(attrs);
            return validation;
        },

        _initValidationCallbacks: function() {
            var self = this;
            _.extend(Backbone.Validation.callbacks, {
                valid: function(view, attr, selector) {
                    self._removeValidationError(attr);
                },
                invalid: function(view, attr, error, selector) {
                    self._addValidationError(attr, error);
                }
            });
        },

        _addValidationError: function (field, message) {
            var controlGroup = $('#' + field).parent().parent();
            controlGroup.addClass('error');
            $('.help-inline', controlGroup).html(message);
        },

        _removeValidationError: function (field) {
            //var isValid = this.validateItem(field);
            //if (isValid) {
            var controlGroup = $('#' + field).parent().parent();
            controlGroup.removeClass('error');
            $('.help-inline', controlGroup).html('');
            //}
        }

    });
});