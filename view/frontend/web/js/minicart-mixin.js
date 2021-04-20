define([], function () {
    return function (minicart) {
        return minicart.extend({
            getCartParam: function (name) {
                const value = this._super();
                if (name !== 'summary_count') {
                    return value;
                }

                if (value === 0) {
                    return value;
                }

                if (value === 1) {
                    return '1 item';
                }

                return value + ' items';
            }
        });
    }
});
