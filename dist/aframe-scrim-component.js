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


/***/ }
/******/ ]);