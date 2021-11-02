// https://codepen.io/rachsmith/post/how-to-move-elements-on-scroll-in-a-way-that-doesn-t-suck-too-bad
// thanks, rachel smith. :>

console.log("scroll.js");

var _containerHeight = 2000;
var _width, _height, _scrollHeight;
var letters = document.getElementsByTagName('span');
var _movingElements = [];
var _scrollPercent = 0;
var pre = prefix();
var _jsPrefix  = pre.lowercase;
if(_jsPrefix == 'moz') _jsPrefix = 'Moz'
var _cssPrefix = pre.css;
var _positions = [
  {
    name: 'logo', 
    start: {
      percent: 0, x: 0, y: 0
    },
    end: {
      percent: 100, x: 0, y: -420
    }
  },
  {
    name: 'maire', 
    start: {
      percent: 0, x: 0, y: 0
    },
    end: {
      percent: 100, x: 0, y: -20
    }
  },
  {
    name: 'comet', 
    start: {
      percent: 0, x: 0, y: 0
    },
    end: {
      percent: 100, x: 60, y: 30
    }
  },
]

resize();
initMovingElements();

function initMovingElements() {
  for (var i = 0; i < _positions.length; i++) {
    _positions[i].diff = {
      percent: _positions[i].end.percent - _positions[i].start.percent,
      x: _positions[i].end.x - _positions[i].start.x,
      y: _positions[i].end.y - _positions[i].start.y,
    }
    _positions[i].target = {};
    _positions[i].current = {};
    var el = document.getElementsByClassName('layer '+_positions[i].name)[0];
    console.log(el.className);
    _movingElements.push(el);
  }
}

function resize() {
  var box = document.querySelector('.parallaxContainer');
  _width = window.innerWidth;
  _height = window.innerWidth;
  _scrollHeight = document.body.scrollHeight; // box.offsetHeight * 400; //  _containerHeight-_height;
  //console.log(`box: ${box.offsetHeight}, scroll: ${_scrollHeight}, document.scrl: ${document.body.scrollHeight}`);
}

function rotateLetters() {
  for (var i = 0; i < letters.length; i++) {
    letters[i].style[_jsPrefix+'Transform'] = 'rotateY('+(_scrollPercent*500)+'deg)'
  }
}

function updateElements() {
  for (var i = 0; i < _movingElements.length; i++) {
    var p = _positions[i];
    if(_scrollPercent <= p.start.percent) {
      p.target.x = p.start.x*_width;
      p.target.y = p.start.y*_height;
    } else if(_scrollPercent >= p.end.percent) {
      p.target.x = p.end.x*_width;
      p.target.y = p.end.y*_height;
    } else {
      p.target.x = p.start.x*_width + (p.diff.x*(_scrollPercent-p.start.percent)/p.diff.percent*_width);
      p.target.y = p.start.y*_height + (p.diff.y*(_scrollPercent-p.start.percent)/p.diff.percent*_height);
    }
    
    // lerp
    if(!p.current.x) {
      p.current.x = p.target.x;
      p.current.y = p.target.y;
    } else {
      p.current.x = p.current.x + (p.target.x - p.current.x)*0.5;
      p.current.y = p.current.y + (p.target.y - p.current.y)*0.5;
    }
    _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+p.current.x+'px, '+
        p.current.y+'px, 0px)';
  }
}



function loop() {
  _scrollOffset = window.pageYOffset || window.scrollTop || 0;
  //console.log(_scrollOffset);
  _scrollPercent = _scrollOffset/_scrollHeight || 0;
  rotateLetters();
  updateElements();
  
  requestAnimationFrame(loop);
}

loop();

window.addEventListener('resize', resize);

/* prefix detection http://davidwalsh.name/vendor-prefix */

function prefix() {
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('') 
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
}