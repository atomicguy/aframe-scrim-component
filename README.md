## aframe-scrim-component

[![Version](http://img.shields.io/npm/v/aframe-scrim-component.svg?style=flat-square)](https://npmjs.org/package/aframe-scrim-component)
[![License](http://img.shields.io/npm/l/aframe-scrim-component.svg?style=flat-square)](https://npmjs.org/package/aframe-scrim-component)

A Theatrical Scrim for A-Frame

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| easing   | type of easing to use | easeInOutCirc |
| durration | length of time (ms) for fading | 900 |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.9.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-scrim-component/dist/aframe-scrim-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity scrim="durration: 700"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-scrim-component
```

Then require and use.

```js
require('aframe');
require('aframe-scrim-component');
```
