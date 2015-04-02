import Ember from 'ember';
import layout from '../templates/components/audio-player';

// Audio Player Component

/*
    track - the track to play

    playlist - an array of tracks that include the track from above

    actions
    * play
    * pause
    * timeupdate
    * loadmetadata
    * ended
*/

export default Ember.Component.extend({
    layout: layout,
    playing: false,
    didInsertElement: function () {
        var audio = this.$('audio');
        audio.on('play pause loadmetadata timeupdate ended', this.mediaEvents.bind( this ));
        this.set('audio-player', audio);
    },
    updateTrack: function () {
        this.get('audio-player').src = this.get('track');
        this.get('audio-player').play();
    }.observes('track'),
    mediaEvents: function (event) {
        var type = event.type;//,
            //target = event.target;

        switch( type ) {
        case 'play':
            this.set('playing', true);
            break;
        case 'pause':
            this.set('playing', false);
            break;
        case 'timeupdate':
            //this.set('timePosition', target.currentTime);
            //this.set( "time", target.currentTime );
            break;
        case 'loadedmetadata':
            console.log('metadata loaded');
            break;
        case 'ended':
            console.log('ended');
            //this.send('nextTrack', target);
            break;
        }
    },
    actions: {
        nextTrack: function () {
            // checks the playlist and then adds the track
        },
        previousTrack: function () {
            // checks the playlist and then adds the track
        },
        play: function () {
            // toggle play on the audio thing
            this.get('audio-player').play();
        },
        pause: function () {
            // toggle pause on the audio thing
            this.get('audio-player').pause();
        }
    }
});
