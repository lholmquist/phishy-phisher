import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        return Ember.$.getJSON('http://phish.in/api/v1/years/' + params.year_id + '.json').then(function (response) {
            console.log(response);
            return response.data;
        }).then(null, function (err) {
            console.log(err);
            return {};
        });
    }
});
