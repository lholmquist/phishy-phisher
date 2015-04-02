import Ember from 'ember';
import layout from '../templates/components/track-listing';

export default Ember.Component.extend({
    layout: layout,
    tagName: 'li',
    classNames: ['collection-item', 'avatar'],
    isPlaying: false,
    toggle: function () {
        this.set('isPlaying', !this.get('isPlaying'));
    },
    click: function () {
        if (this.get('currentActive') === this.get('track') && this.get('isPlaying')) {
            this.toggle();
            this.set('currentActive', {});
            return;
        }

        this.set('currentActive', this.get('track'));
        this.send('currentTrackAction', this.get('track'));
        this.toggle();
    },
    watchCurrentActive: function () {
        if (this.get('currentActive') !== this.get('track')) {
            return this.set('isPlaying', false);
        }
    }.observes('currentActive')
});
