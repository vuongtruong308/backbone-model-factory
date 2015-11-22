/*!
 * backbone-model-factory
 * @version 1.2.0
 * @copyright 2015 Pat O'Neill <pgoneill@gmail.com>
 * @license MIT
 * @see {@link https://github.com/misteroneill/backbone-model-factory|GitHub}
 */
(function(e,t){"use strict";if(typeof exports!=="undefined"&&typeof module!=="undefined"&&module.exports){exports=module.exports=require("backbone");t(require("underscore"),exports)}else if(typeof define==="function"&&define.amd){define(["underscore","backbone"],t)}else{t(e._,e.Backbone)}})(this,function(e,t){"use strict";function r(e){return String(e.get(e.idAttribute))}t.ModelFactory=function(n,i){var o={};var s=function(t){var r=e.values(o);var n="wipe wipe:"+(r.length?"some":"all");u.trigger(n,u,t,r)};var u=function(t,n){t=e.isObject(t)?t:null;var i=a.prototype.idAttribute;var s=t!==null&&t.hasOwnProperty(i);var f=s&&String(t[i]);var c=f&&o.hasOwnProperty(f);var l=c?o[f]:new a(t,n);l.constructor=u;if(f&&!c){o[f]=l}else{if(n&&n.parse){t=l.parse(t,n)}l.set(t,n)}if(!s){l.once("change:"+i,function(e,t){var n=r(e);if(o.hasOwnProperty(n)){throw new Error("model idAttribute attribute value already exists in cache")}else{o[n]=e}})}return l};var a=u._Model=function(n,i){var u=typeof n==="function";i=e.extend({wipe:function(e){e=e||{};delete o[r(this)];if(!e.silent){this.trigger("wipe",this);if(!e._suppress){s([this])}}}},u?i:n);n=u?n._Model||n:t.Model;return n.extend(i)}(n,i);u._cache=o;u.prototype=a.prototype;u.wipe=function(r,n){n=n||{};if(r instanceof t.Collection){r=[].concat(r.models)}else if(!r){r=e.values(this._cache)}else if(!e.isArray(r)){r=[r]}if(!r.length){return}r=e.filter(r,function(e){return e instanceof this},this);if(r.length){e.invoke(r,"wipe",e.extend({_suppress:true},n));s(r)}else{throw new Error("invalid argument")}};e.extend(u,t.Events);return u};return t});