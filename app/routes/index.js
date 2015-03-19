import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON('http://phish.in/api/v1/years').then(function (response) {
            console.log(response);
            return response.data;
        }).then(null, function (err) {
            console.log(err);
            return {};
        });
    }
});
