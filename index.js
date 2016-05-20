if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Attach to an A-Frame element and it will fade in and out
 */
AFRAME.registerComponent('scrim', {
    schema: {
        timer: { type: 'int', default: 700 }
    },

    init: function() {
        document.querySelector('a-scene').addEventListener('enter-vr', this.pause(this));
        document.querySelector('a-scene').addEventListener('exit-vr', this.play);

        // var thisEl = this.el;
        // var scrim = document.createElement('a-animation');
        //
        // var timing = this.data.timer;
        //
        // thisEl.appendChild(scrim);
        //
        // scrim.setAttribute('attribute', 'material.opacity');
        // scrim.setAttribute('dur', timing);
        // scrim.setAttribute('direction', 'alternate');
        // scrim.setAttribute('ease', 'ease-in-out');
        // scrim.setAttribute('fill', 'forwards');
        // scrim.setAttribute('from', '0');
        // scrim.setAttribute('to', '1');
        // scrim.setAttribute('repeat', 'indefinite');
    },

    remove: function() {
        this.el.removeElement('a-animation');
    },

    play: function() {
        // var target = document.querySelector('a-entity');
        // var animation = document.createElement('a-animation');
        //
        // target.appendChild(animation);

        var thisEl = this.el;
        var scrim = document.createElement('a-animation');

        var timing = this.data.timer;

        thisEl.appendChild(scrim);

        scrim.setAttribute('attribute', 'material.opacity');
        scrim.setAttribute('ease', 'ease-in-out');
        scrim.setAttribute('direction', 'alternate');
        scrim.setAttribute('dur', timing);
        scrim.setAttribute('fill', 'forwards');
        scrim.setAttribute('from', '1');
        scrim.setAttribute('to', '0');
        scrim.setAttribute('repeat', 'indefinite');
    },

    pause: function() {
        // var animation = document.querySelector('a-animation');
        // var target = animation.parentNode;

        var scrim = this.el.children;

        console.log(scrim);


        // var thisEl = this;
        // console.log('pause triggered');
        // console.log(thisEl);

    },

});
