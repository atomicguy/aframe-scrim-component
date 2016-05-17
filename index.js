if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Attach to an A-Frame element and it will fade in and out
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

});
