/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Scrim component for A-Frame.
 */
AFRAME.registerComponent('scrim', {
  schema: {
    durration: {default: '900'},
    easing: {default: 'easeInOutCirc'}
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var thisEl = this.el;
    var data = this.data

    var properties = 'property: material.opacity; from: 0; to: 1; dir: alternate; loop: true'
    properties = properties.concat(properties,'; dur: ', data.durration, '; easing: ', data.easing)

    thisEl.setAttribute('animation', properties)
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { }
});
