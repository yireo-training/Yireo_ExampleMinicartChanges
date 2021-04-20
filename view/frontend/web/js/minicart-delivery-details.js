define([
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function (Component, customerData) {
    return Component.extend({
        showDeliveryDetails: function () {

            const cart = customerData.get('cart');
            //for(var i = 0; cart().items

            console.log('minicart delivery details', cart());

            return true;
        }
    });
});
