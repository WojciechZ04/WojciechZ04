"use strict";(self.webpackChunkme_app=self.webpackChunkme_app||[]).push([[9003],{9003:function(e,n,a){a.r(n),a.d(n,{WobbleUpdater:function(){return v}});var i=a(5671),o=a(3144),l=a(4709),t=function(){function e(){(0,i.Z)(this,e),this.angle=50,this.move=10}return(0,o.Z)(e,[{key:"load",value:function(e){e&&(void 0!==e.angle&&(this.angle=(0,l.Cs)(e.angle)),void 0!==e.move&&(this.move=(0,l.Cs)(e.move)))}}]),e}(),s=function(){function e(){(0,i.Z)(this,e),this.distance=5,this.enable=!1,this.speed=new t}return(0,o.Z)(e,[{key:"load",value:function(e){if(e&&(void 0!==e.distance&&(this.distance=(0,l.Cs)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,l.hj)(e.speed))this.speed.load({angle:e.speed});else{var n=e.speed;void 0!==n.min?this.speed.load({angle:n}):this.speed.load(e.speed)}}}]),e}(),d=2*Math.PI;var u=2*Math.PI,v=function(){function e(n){(0,i.Z)(this,e),this.container=n}return(0,o.Z)(e,[{key:"init",value:function(e){var n,a=e.options.wobble;null!==a&&void 0!==a&&a.enable?e.wobble={angle:(0,l.sZ)()*u,angleSpeed:(0,l.Gu)(a.speed.angle)/360,moveSpeed:(0,l.Gu)(a.speed.move)/10}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,l.Gu)(null!==(n=null===a||void 0===a?void 0:a.distance)&&void 0!==n?n:0)*this.container.retina.pixelRatio}},{key:"isEnabled",value:function(e){var n;return!e.destroyed&&!e.spawning&&!(null===(n=e.options.wobble)||void 0===n||!n.enable)}},{key:"loadOptions",value:function(e){e.wobble||(e.wobble=new s);for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];for(var o=0,l=a;o<l.length;o++){var t=l[o];e.wobble.load(null===t||void 0===t?void 0:t.wobble)}}},{key:"update",value:function(e,n){this.isEnabled(e)&&function(e,n){var a,i=e.options.wobble,o=e.wobble;if(null!==i&&void 0!==i&&i.enable&&o){var t=o.angleSpeed*n.factor,s=o.moveSpeed*n.factor*((null!==(a=e.retina.wobbleDistance)&&void 0!==a?a:0)*n.factor)/(l.X5/60),u=d,v=e.position;o.angle+=t,o.angle>u&&(o.angle-=u),v.x+=s*Math.cos(o.angle),v.y+=s*Math.abs(Math.sin(o.angle))}}(e,n)}}]),e}()}}]);
//# sourceMappingURL=9003.ff9e3d88.chunk.js.map