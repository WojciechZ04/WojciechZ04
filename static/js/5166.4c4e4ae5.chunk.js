"use strict";(self.webpackChunkme_app=self.webpackChunkme_app||[]).push([[5166],{5166:function(e,t,a){a.r(t),a.d(t,{EmojiDrawer:function(){return p}});var n=a(4165),i=a(5861),o=a(9439),r=a(7762),c=a(5671),l=a(3144),u=a(4709);var f=a(1792),s='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"',p=function(){function e(){(0,c.Z)(this,e),this._emojiShapeDict=new Map}return(0,l.Z)(e,[{key:"destroy",value:function(){var e,t=(0,r.Z)(this._emojiShapeDict);try{for(t.s();!(e=t.n()).done;){var a=(0,o.Z)(e.value,2),n=a[0],i=a[1];i instanceof ImageBitmap&&(null===i||void 0===i||i.close(),this._emojiShapeDict.delete(n))}}catch(c){t.e(c)}finally{t.f()}}},{key:"draw",value:function(e){!function(e){var t=e.context,a=e.particle,n=e.radius,i=e.opacity,o=a.emojiData,r=2*n,c=t.globalAlpha;o&&(t.globalAlpha=i,t.drawImage(o,-n,-n,r,r),t.globalAlpha=c)}(e)}},{key:"init",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var a,i,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.actualOptions,f.h.find((function(e){return(0,u.dB)(e,a.particles.shape.type)}))){e.next=3;break}return e.abrupt("return");case 3:return i=[(0,u.mx)(s)],(o=f.h.map((function(e){return a.particles.shape.options[e]})).find((function(e){return!!e})))&&(0,u.KH)(o,(function(e){e.font&&i.push((0,u.mx)(e.font))})),e.next=7,Promise.all(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"particleDestroy",value:function(e){delete e.emojiData}},{key:"particleInit",value:function(e,t){var a,n=t.shapeData;if(null!==n&&void 0!==n&&n.value){var i=(0,u.wA)(n.value,t.randomIndexData),o=null!==(a=n.font)&&void 0!==a?a:s;if(i){var r="".concat(i,"_").concat(o),c=this._emojiShapeDict.get(r);if(c)t.emojiData=c;else{var l,f=2*(0,u.KI)(t.size.value),p=(0,u.KI)(t.size.value);if("undefined"!==typeof OffscreenCanvas){var m=new OffscreenCanvas(f,f),v=m.getContext("2d");if(!v)return;v.font="400 ".concat(2*p,"px ").concat(o),v.textBaseline="middle",v.textAlign="center",v.fillText(i,p,p),l=m.transferToImageBitmap()}else{var h=document.createElement("canvas");h.width=f,h.height=f;var d=h.getContext("2d");if(!d)return;d.font="400 ".concat(2*p,"px ").concat(o),d.textBaseline="middle",d.textAlign="center",d.fillText(i,p,p),l=h}this._emojiShapeDict.set(r,l),t.emojiData=l}}}}}]),e}()}}]);
//# sourceMappingURL=5166.4c4e4ae5.chunk.js.map