import Ember from 'ember';
import layout from '../templates/components/show-listing';

export default Ember.Component.extend({
    layout: layout,
    currentActive: {},
    didInsertElement: function () {
        this.set('audioPlayer', this.$('audio')[0]);
    }//,
    // audioThing: function () {
    //     // Not a great solution
    //     this.get('audioPlayer').src = this.get('currentActive.mp3');
    //     this.get('audioPlayer').play();
    // }.observes('currentActive')
});
