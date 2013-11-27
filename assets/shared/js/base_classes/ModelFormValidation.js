var BaseClasses = BaseClasses || {};

/**
 * BaseClasses.ModelFormValidation class
 *
 * Extends the Backbone.Model class. Provides basic
 * form validation.
 */
BaseClasses.ModelFormValidation = Backbone.Model.extend({

    _currentValidation: {
        isSingleItemValidation: true,
        field: ''
    },

    initialize: function(attributes, options) {
        this._initValidationCallbacks();
    },

    // Single item validation
    validateItem: function(field) {
        //this._setCurrentValidation(true, field)
        var validation = this.isValid(field);
        return validation;
    },
    setSingleItemValidation: function(field) {
        this._setCurrentValidation(true, field);
    },

    change: function (e) {
        // Apply the change to the model
        var target = e.target;
        var change = {};
        var property = target.name;
        change[property] = target.value;

        // Setup the base validation model for the validation call backs.
        this.model.setSingleItemValidation(property);

        // Set validate: true to update validation with the model change
        this.model.set(property, target.value);
        this.model.set(change, {'validate': true});

        // Trigger the item validation.
        // Note: Form input error handling is performed within the model
        //       class with the Backbone.Validation callback listener
        var check = this.model.validateItem(property);
    },

    isModelValid: function() {
        this._setCurrentValidation(false, '');
        var validation = this.isValid(true) || false;
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

    _setCurrentValidation: function (isSingleItemValidation, field) {
        this._currentValidation.isSingleItemValidation = isSingleItemValidation;
        this._currentValidation.field = field;
    },

    _addValidationError: function (field, message) {
        if (this._currentValidation.isSingleItemValidation &&
            field !== this._currentValidation.field) {
                return;
        }
        var formGroup = $('#'+ field).parent('.form-group');
        formGroup.addClass('error');
        $('.help-inline', formGroup).html(message);
    },

    _removeValidationError: function (field) {
        if (this._currentValidation.isSingleItemValidation &&
            field !== this._currentValidation.field) {
                return;
        }
        var formGroup = $('#'+ field).parent('.form-group');
        formGroup.removeClass('error');
        $('.help-inline', formGroup).html('');
        //}
    }

});