import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        return Ember.$.getJSON('http://phish.in/api/v1/shows/' + params.show_id + '.json').then(function (response) {
            console.log(response);
            return response.data;
        }).then(null, function (err) {
            console.log(err);
            return {};
        });
    },
    setupController: function (controller, model) {
        Ember.$.getJSON('http://phish.in/api/v1/shows/' + model.id + '.json').then(function (response) {
            return controller.set('model', response.data);
        }).then(null, function (err) {
            console.log(err);
            return controller.set('model', {});
        });
    }
});
