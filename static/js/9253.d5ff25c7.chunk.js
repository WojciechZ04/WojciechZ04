"use strict";(self.webpackChunkme_app=self.webpackChunkme_app||[]).push([[9253],{9253:function(r,t,e){e.r(t),e.d(t,{Absorbers:function(){return c}});var n=e(7762),a=e(4165),i=e(5861),s=e(5671),o=e(3144),u=e(4709),c=function(){function r(t){var e=this;(0,s.Z)(this,r),this.container=t,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],t.getAbsorber=function(r){return void 0===r||(0,u.hj)(r)?e.array[null!==r&&void 0!==r?r:0]:e.array.find((function(t){return t.name===r}))},t.addAbsorber=function(){var r=(0,i.Z)((0,a.Z)().mark((function r(t,n){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",e.addAbsorber(t,n));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}()}return(0,o.Z)(r,[{key:"addAbsorber",value:function(){var r=(0,i.Z)((0,a.Z)().mark((function r(t,n){var i,s,o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8959).then(e.bind(e,8959));case 2:return i=r.sent,s=i.AbsorberInstance,o=new s(this,this.container,t,n),this.array.push(o),r.abrupt("return",o);case 7:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()},{key:"draw",value:function(r){var t,e=(0,n.Z)(this.array);try{for(e.s();!(t=e.n()).done;){t.value.draw(r)}}catch(a){e.e(a)}finally{e.f()}}},{key:"handleClickMode",value:function(r){var t=this.absorbers,e=this.interactivityAbsorbers;if("absorber"===r){var n=(0,u.wA)(e),a=null!==n&&void 0!==n?n:(0,u.wA)(t),i=this.container.interactivity.mouse.clickPosition;this.addAbsorber(a,i)}}},{key:"init",value:function(){var r=(0,i.Z)((0,a.Z)().mark((function r(){var t,e=this;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers,t=(0,u.KH)(this.absorbers,function(){var r=(0,i.Z)((0,a.Z)().mark((function r(t){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.addAbsorber(t);case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()),!(t instanceof Array)){r.next=8;break}return r.next=6,Promise.all(t);case 6:r.next=10;break;case 8:return r.next=10,t;case 10:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"particleUpdate",value:function(r){var t,e=(0,n.Z)(this.array);try{for(e.s();!(t=e.n()).done;){if(t.value.attract(r),r.destroyed)break}}catch(a){e.e(a)}finally{e.f()}}},{key:"removeAbsorber",value:function(r){var t=this.array.indexOf(r);t>=0&&this.array.splice(t,1)}},{key:"resize",value:function(){var r,t=(0,n.Z)(this.array);try{for(t.s();!(r=t.n()).done;){r.value.resize()}}catch(e){t.e(e)}finally{t.f()}}},{key:"stop",value:function(){this.array=[]}}]),r}()}}]);
//# sourceMappingURL=9253.d5ff25c7.chunk.js.map