webpackJsonp([35783957827783],{9:function(e,t,n){!function(t,r){e.exports=r(n(1))}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(6)(o,!0)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e){return e in i?i[e]:i[e]=e.replace(o,"-$&").toLowerCase().replace(a,"-ms-")}var o=/[A-Z]/g,a=/^ms-/,i={};e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=a.default.oneOfType([a.default.string,a.default.number]),u={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:i,deviceHeight:i,width:i,deviceWidth:i,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:i},c=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:i,maxHeight:i,minDeviceHeight:i,maxDeviceHeight:i,minWidth:i,maxWidth:i,minDeviceWidth:i,maxDeviceWidth:i,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:i,maxResolution:i},u),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},s=r({},l,c);u.type=Object.keys(l),t.default={all:s,types:l,matchers:u,features:c},e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n=l({},e);return t.forEach(function(e){return delete n[e]}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.toQuery=t.default=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(5),f=r(s),d=n(0),p=r(d),m=n(9),h=r(m),v=n(2),y=r(v),b=n(3),g=r(b),w=n(11),j=r(w),x={component:p.default.node,query:p.default.string,values:p.default.shape(g.default.matchers),children:p.default.oneOfType([p.default.node,p.default.func]),onChange:p.default.func,onBeforeChange:p.default.func},O=Object.keys(g.default.all),E=Object.keys(x),_=E.concat(O),C=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={matches:!1},r.updateMatches=function(){r._mql.matches!==r.state.matches&&r.setState({matches:r._mql.matches})},r.removeMql=function(){r._mql&&(r._mql.removeListener(r.updateMatches),r._mql.dispose())},i=n,a(r,i)}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.updateQuery(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.updateQuery(e)}},{key:"updateQuery",value:function(e){var t=void 0,n=!1;if(e.query?this.query=e.query:this.query=(0,j.default)(u(e,E)),!this.query)throw new Error("Invalid or missing MediaQuery!");e.values&&(t=Object.keys(e.values).reduce(function(t,n){return t[(0,y.default)(n)]=e.values[n],t},{}),0!==Object.keys(t).length&&(n=!0)),this.removeMql(),this._mql=(0,h.default)(this.query,t,n),this._mql.addListener(this.updateMatches),this.updateMatches()}},{key:"componentWillUpdate",value:function(e,t){this.props.onBeforeChange&&this.state.matches!==t.matches&&this.props.onBeforeChange(this.state.matches)}},{key:"componentDidUpdate",value:function(e,t){this.props.onChange&&t.matches!==this.state.matches&&this.props.onChange(this.state.matches)}},{key:"componentWillUnmount",value:function(){this.removeMql()}},{key:"render",value:function(){if("function"==typeof this.props.children)return this.props.children(this.state.matches);if(!1===this.state.matches)return null;var e=u(this.props,_),t=Object.keys(e).length>0,n=f.default.Children.count(this.props.children);return this.props.component||null==this.props.children||t&&n>1?f.default.createElement(this.props.component||"div",e,this.props.children):t?f.default.cloneElement(this.props.children,e):n?this.props.children:null}}]),t}(f.default.Component);C.displayName="MediaQuery",C.defaultProps={values:{}},t.default=C,t.toQuery=j.default},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(){return null}var o=n(7),a=n(1),i=n(8),u=function(){};u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){function n(e){var t=e&&(_&&e[_]||e[C]);if("function"==typeof t)return t}function c(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function s(e){function n(n,i,c,s,f,d,p){if(s=s||k,d=d||c,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var h=s+":"+c;!r[h]&&o<3&&(u("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[h]=!0,o++)}}return null==i[c]?n?new l(null===i[c]?"The "+f+" `"+d+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+f+" `"+d+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(i,c,s,f,d)}var r={},o=0,i=n.bind(null,!1);return i.isRequired=n.bind(null,!0),i}function f(e){function t(t,n,r,o,a,i){var u=t[n];return j(u)!==e?new l("Invalid "+o+" `"+a+"` of type `"+x(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}return s(t)}function d(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u))return new l("Invalid "+o+" `"+i+"` of type `"+j(u)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<u.length;c++){var s=e(u,c,r,o,i+"["+c+"]",a);if(s instanceof Error)return s}return null}return s(t)}function p(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||k;return new l("Invalid "+o+" `"+a+"` of type `"+E(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return s(t)}function m(e){function t(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(c(i,e[u]))return null;return new l("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?s(t):(u("Invalid argument supplied to oneOf, expected an instance of array."),r)}function h(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=j(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(u.hasOwnProperty(s)){var f=e(u,s,r,o,i+"."+s,a);if(f instanceof Error)return f}return null}return s(t)}function v(e){function t(t,n,r,o,i){for(var u=0;u<e.length;u++)if(null==(0,e[u])(t,n,r,o,i,a))return null;return new l("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+O(o)+" at index "+n+"."),r}return s(t)}function y(e){function t(t,n,r,o,i){var u=t[n],c=j(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var d=f(u,s,r,o,i+"."+s,a);if(d)return d}}return null}return s(t)}function b(e){function t(t,n,r,i,u){var c=t[n],s=j(c);if("object"!==s)return new l("Invalid "+i+" `"+u+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=o({},t[n],e);for(var d in f){var p=e[d];if(!p)return new l("Invalid "+i+" `"+u+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,d,r,i,u+"."+d,a);if(m)return m}return null}return s(t)}function g(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(g);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!g(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!g(i[1]))return!1}return!0;default:return!1}}function w(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}function j(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":w(t,e)?"symbol":t}function x(e){if(void 0===e||null===e)return""+e;var t=j(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function O(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function E(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var _="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",k="<<anonymous>>",M={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:function(){return s(r)}(),arrayOf:d,element:function(){function t(t,n,r,o,a){var i=t[n];return e(i)?null:new l("Invalid "+o+" `"+a+"` of type `"+j(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return s(t)}(),instanceOf:p,node:function(){function e(e,t,n,r,o){return g(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return s(e)}(),objectOf:h,oneOf:m,oneOfType:v,shape:y,exact:b};return l.prototype=Error.prototype,M.checkPropTypes=i,M.PropTypes=M,M}},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var s in n)a.call(n,s)&&(c[s]=n[s]);if(o){u=o(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}},function(e,t,n){"use strict";function r(e,t,n,r,u){for(var c in e)if(e.hasOwnProperty(c)){var l;try{if("function"!=typeof e[c]){var s=Error((r||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw s.name="Invariant Violation",s}l=e[c](t,c,r,n,null,a)}catch(e){l=e}if(!l||l instanceof Error||o((r||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var f=u?u():"";o("Failed "+n+" type: "+l.message+(null!=f?f:""))}}}var o=function(){},a=n(1),i={};o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=r},function(e,t,n){"use strict";function r(e,t,n){function r(e){s&&s.addListener(e)}function o(e){s&&s.removeListener(e)}function u(e){l.matches=e.matches,l.media=e.media}function c(){s&&s.removeListener(u)}var l=this;if(i&&!n){var s=i.call(window,e);this.matches=s.matches,this.media=s.media,s.addListener(u)}else this.matches=a(e,t),this.media=e;this.addListener=r,this.removeListener=o,this.dispose=c}function o(e,t,n){return new r(e,t,n)}var a=n(10).match,i="undefined"!=typeof window?window.matchMedia:null;e.exports=o},function(e,t,n){"use strict";function r(e,t){return o(e).some(function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every(function(e){var n=e.feature,r=e.modifier,o=e.value,c=t[n];if(!c)return!1;switch(n){case"orientation":case"scan":return c.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),c=u(c);break;case"resolution":o=i(o),c=i(c);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=a(o),c=a(c);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,c=parseInt(c,10)||0}switch(r){case"min":return c>=o;case"max":return c<=o;default:return c===o}});return o&&!n||!o&&n})}function o(e){return e.split(",").map(function(e){e=e.trim();var t=e.match(c),n=t[1],r=t[2],o=t[3]||"",a={};return a.inverse=!!n&&"not"===n.toLowerCase(),a.type=r?r.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(e){var t=e.match(l),n=t[1].toLowerCase().match(s);return{modifier:n[1],feature:n[2],value:t[2]}}),a})}function a(e){var t,n=Number(e);return n||(t=e.match(/^(\d+)\s*\/\s*(\d+)$/),n=t[1]/t[2]),n}function i(e){var t=parseFloat(e);switch(String(e).match(d)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=r,t.parse=o;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,l=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,s=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,d=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=(0,u.default)(e);return"number"==typeof t&&(t+="px"),!0===t?e:!1===t?s(e):"("+n+": "+t+")"}function a(e){return e.join(" and ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return Object.keys(l.default.all).forEach(function(n){var r=e[n];null!=r&&t.push(o(n,r))}),a(t)};var i=n(2),u=r(i),c=n(3),l=r(c),s=function(e){return"not "+e};e.exports=t.default}])})},142:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(9),u=r(i),c=n(119),l=r(c),s=n(6),f=n(24),d=r(f),p=function(e){var t=e.project;return a.default.createElement(o.Fragment,null,a.default.createElement(u.default,{key:"_mW767",maxWidth:574},a.default.createElement(d.default,{to:"/"+t.slug,className:l.default.projectItem},t.name,a.default.createElement(s.FAChevronRight,{size:20,color:"#c1c1c1"}))),a.default.createElement(u.default,{key:"_mW768",minWidth:575},a.default.createElement(d.default,{to:"/"+t.slug,className:l.default.projectItem},a.default.createElement("span",{className:l.default.projectNameTag},t.name),a.default.createElement("div",{className:l.default.imgContainer},a.default.createElement("img",{src:t.img.url,alt:t.name})))))};t.default=p,e.exports=t.default},143:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(142),u=r(i),c=n(119),l=r(c),s=function(e){var t=e.projects;return a.default.createElement("ul",{className:l.default.projectContainer},t.map(function(e){var t=e.node;return a.default.createElement(u.default,{key:t.id,project:t})}))};t.default=s,e.exports=t.default},119:function(e,t){e.exports={projectContainer:"src-components----Projects-module---projectContainer---20VLL",projectItem:"src-components----Projects-module---projectItem---U_e4t",imgContainer:"src-components----Projects-module---imgContainer---dfkeA",projectNameTag:"src-components----Projects-module---projectNameTag---rmMdq"}},6:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.FAClock=t.FAChevronRight=t.FALink=t.FAUser=t.FABriefcase=t.Mail=t.Twitter=t.LinkedIn=t.GitHub=t.ArrowLeft=void 0;var o=n(1),a=r(o);t.ArrowLeft=function(e){var t=e.color;return a.default.createElement("svg",{viewBox:"0 0 500 500",width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg"},a.default.createElement("path",{fill:t||"#EC644B",d:"M 282.455 439.1 L 260.255 461.3 C 250.855 470.7 235.655 470.7 226.355 461.3 L 31.955 267 C 22.555 257.6 22.555 242.4 31.955 233.1 L 226.355 38.7 C 235.755 29.3 250.955 29.3 260.255 38.7 L 282.455 60.9 C 291.955 70.4 291.755 85.9 282.055 95.2 L 161.555 210 L 448.955 210 C 462.255 210 472.955 220.7 472.955 234 L 472.955 266 C 472.955 279.3 462.255 290 448.955 290 L 161.555 290 L 282.055 404.8 C 291.855 414.1 292.055 429.6 282.455 439.1 Z"}))},t.GitHub=function(e){var t=e.size;return a.default.createElement("svg",{viewBox:"0 0 496 512",width:t,height:t},a.default.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))},t.LinkedIn=function(e){var t=e.size;return a.default.createElement("svg",{viewBox:"0 0 448 512",width:t,height:t},a.default.createElement("path",{fill:"currentColor",d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}))},t.Twitter=function(e){var t=e.size;return a.default.createElement("svg",{viewBox:"0 0 512 512",width:t,height:t},a.default.createElement("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))},t.Mail=function(e){var t=e.size;return a.default.createElement("svg",{viewBox:"0 0 512 512",width:t,height:t},a.default.createElement("path",{fill:"currentColor",d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}))},t.FABriefcase=function(e){var t=e.size,n=e.color;return a.default.createElement("svg",{viewBox:"0 0 512 512",width:t,height:t},a.default.createElement("path",{fill:n,d:"M320 288h192v144c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V288h192v20c0 6.627 5.373 12 12 12h104c6.627 0 12-5.373 12-12v-20zm192-112v80H0v-80c0-26.51 21.49-48 48-48h80V80c0-26.51 21.49-48 48-48h160c26.51 0 48 21.49 48 48v48h80c26.51 0 48 21.49 48 48zM320 96H192v32h128V96z"}))},t.FAUser=function(e){var t=e.size,n=e.color;return a.default.createElement("svg",{viewBox:"0 0 448 512",width:t,height:t},a.default.createElement("path",{fill:n,d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}))},t.FALink=function(e){var t=e.size,n=e.color;return a.default.createElement("svg",{viewBox:"0 0 512 512",width:t,height:t},a.default.createElement("path",{fill:n,d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}))},t.FAChevronRight=function(e){var t=e.color,n=e.size;return a.default.createElement("svg",{viewBox:"0 0 256 512",color:t,width:n,height:n},a.default.createElement("path",{fill:"currentColor",d:"M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"}))},t.FAClock=function(e){var t=e.size;return a.default.createElement("svg",{viewBox:"0 0 512 512",width:t,height:t},a.default.createElement("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"}))}},150:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(1),a=r(o),i=n(24),u=(r(i),n(143)),c=r(u),l=function(e){var t=e.data,n=t.allProject.edges;return a.default.createElement("div",null,a.default.createElement(c.default,{projects:n}))};t.query="** extracted graphql fragment **";t.default=l}});
//# sourceMappingURL=component---src-pages-index-js-c06b2dc40464e585457d.js.map