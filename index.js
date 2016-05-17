if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Example component for A-Frame.
 */
AFRAME.registerComponent('scrim', {
    schema: {
        default: true
    },

    init: function() {
        var thisEl = this.el;
        var scrim = document.createElement('a-animation');

        thisEl.appendChild(scrim);

        scrim.setAttribute('attribute', 'material.opacity');
        scrim.setAttribute('dur', '700');
        scrim.setAttribute('direction', 'alternate');
        scrim.setAttribute('ease', 'ease-in-out');
        scrim.setAttribute('fill', 'forwards');
        scrim.setAttribute('from', '0');
        scrim.setAttribute('to', '1');
        scrim.setAttribute('repeat', 'indefinite');
    },

    remove: function() {
        this.el.removeElement('a-animation');
    },

    play: function() {
        
    },

    pause: function() {

    },

    // startDemo: function() {
    //     var scene = document.querySelector('a-scene');
    //     var animations = scene.querySelector('a-animation.right_eye');
    //     var camera = scene.querySelector('a-camera');
    //
    //     animations.setAttribute('begin', '2');
    //     animations.setAttribute('dur', '700');
    //     animations.setAttribute('direction', 'alternate');
    //     animations.setAttribute('ease', 'ease-in-out');
    //     animations.setAttribute('fill', 'forwards');
    //     animations.setAttribute('from', '0');
    //     animations.setAttribute('to', '1');
    //     animations.setAttribute('repeat', 'indefinite');
    //
    //     camera.setAttribute('touch-controls', {
    //         enabled: false
    //     });
    //
    // },
    //
    // stopDemo: function() {
    //     var scene = document.querySelector('a-scene');
    //     var animations = scene.querySelector('a-animation.right_eye');
    //     var camera = scene.querySelector('a-camera');
    //
    //     animations.setAttribute('dur', '1');
    //     animations.setAttribute('repeat', '0');
    //     animations.setAttribute('from', '1');
    //     animations.setAttribute('to', '1');
    //
    //     camera.setAttribute('touch-controls', {
    //         enabled: true
    //     });
    // },
    //
    // tick: function(time) {},
});
