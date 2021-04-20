define(['jquery'], function($) {
    const dropdownDialogExtension = {
        open: function() {
            this.options.closeOnMouseLeave = false;
            this._super();
        }
    };

    return function(dropdownDialog) {
        $.widget('mage.dropdownDialog', dropdownDialog, dropdownDialogExtension);
        return $.mage.dropdownDialog;
    }
});
