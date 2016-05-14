/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	/**
	 * Example component for A-Frame.
	 */
	AFRAME.registerComponent('wiggledemo', {
	  schema: { default: true },

	  init: function () {
	      var scene = document.querySelector('a-scene');

	       if (scene.hasLoaded) {
	           startDemo();
	       } else {
	           scene.addEventListener('loaded', this.startDemo);
	           scene.addEventListener('enter-vr', this.stopDemo);
	           scene.addEventListener('exit-vr', this.startDemo);
	       }
	   },

	   startDemo: function(){
	         var scene = document.querySelector('a-scene');
	         var animations = scene.querySelector('a-animation.right_eye');
	         var camera = scene.querySelector('a-camera');

	         animations.setAttribute('begin', '2');
	         animations.setAttribute('dur', '700');
	         animations.setAttribute('direction', 'alternate');
	         animations.setAttribute('ease', 'ease-in-out');
	         animations.setAttribute('fill', 'forwards');
	         animations.setAttribute('from', '0');
	         animations.setAttribute('to', '1');
	         animations.setAttribute('repeat', 'indefinite');

	         camera.setAttribute('touch-controls', {enabled: false});

	       },

	       stopDemo: function() {
	         var scene = document.querySelector('a-scene');
	         var animations = scene.querySelector('a-animation.right_eye');
	         var camera = scene.querySelector('a-camera');

	         animations.setAttribute('dur', '1');
	         animations.setAttribute('repeat', '0');
	         animations.setAttribute('from', '1');
	         animations.setAttribute('to', '1');

	         camera.setAttribute('touch-controls', {enabled: true});
	       },

	       tick: function(time) {
	           var scene = document.querySelector('a-scene');

	           scene.addEventListener('loaded', scene.startDemo);
	           scene.addEventListener('enter-vr', scene.stopDemo);
	           scene.addEventListener('exit-vr', scene.startDemo);
	       },
	});


/***/ }
/******/ ]);