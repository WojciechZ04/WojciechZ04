"use strict";(self.webpackChunkme_app=self.webpackChunkme_app||[]).push([[5579],{5579:function(e,l,n){n.r(l),n.d(l,{RollUpdater:function(){return d}});var a=n(5671),o=n(3144),t=n(4709),i=2*Math.PI;var r=function(){function e(){(0,a.Z)(this,e),this.enable=!1,this.value=0}return(0,o.Z)(e,[{key:"load",value:function(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.value&&(this.value=(0,t.Cs)(e.value)))}}]),e}(),u=function(){function e(){(0,a.Z)(this,e),this.darken=new r,this.enable=!1,this.enlighten=new r,this.mode="vertical",this.speed=25}return(0,o.Z)(e,[{key:"load",value:function(e){e&&(void 0!==e.backColor&&(this.backColor=t.Oz.create(this.backColor,e.backColor)),this.darken.load(e.darken),void 0!==e.enable&&(this.enable=e.enable),this.enlighten.load(e.enlighten),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.speed&&(this.speed=(0,t.Cs)(e.speed)))}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,[{key:"getTransformValues",value:function(e){var l,n=(null===(l=e.roll)||void 0===l?void 0:l.enable)&&e.roll,a=n&&n.horizontal,o=n&&n.vertical;return{a:a?Math.cos(n.angle):void 0,d:o?Math.sin(n.angle):void 0}}},{key:"init",value:function(e){!function(e){var l=e.options.roll;if(null!==l&&void 0!==l&&l.enable)if(e.roll={enable:l.enable,horizontal:"horizontal"===l.mode||"both"===l.mode,vertical:"vertical"===l.mode||"both"===l.mode,angle:(0,t.sZ)()*i,speed:(0,t.Gu)(l.speed)/360},l.backColor)e.backColor=(0,t.lN)(l.backColor);else if(l.darken.enable&&l.enlighten.enable){var n=(0,t.sZ)()>=t.vq?"darken":"enlighten";e.roll.alter={type:n,value:(0,t.Gu)("darken"===n?l.darken.value:l.enlighten.value)}}else l.darken.enable?e.roll.alter={type:"darken",value:(0,t.Gu)(l.darken.value)}:l.enlighten.enable&&(e.roll.alter={type:"enlighten",value:(0,t.Gu)(l.enlighten.value)});else e.roll={enable:!1,horizontal:!1,vertical:!1,angle:0,speed:0}}(e)}},{key:"isEnabled",value:function(e){var l=e.options.roll;return!e.destroyed&&!e.spawning&&!(null===l||void 0===l||!l.enable)}},{key:"loadOptions",value:function(e){e.roll||(e.roll=new u);for(var l=arguments.length,n=new Array(l>1?l-1:0),a=1;a<l;a++)n[a-1]=arguments[a];for(var o=0,t=n;o<t.length;o++){var i=t[o];e.roll.load(null===i||void 0===i?void 0:i.roll)}}},{key:"update",value:function(e,l){this.isEnabled(e)&&function(e,l){var n=e.options.roll,a=e.roll;if(a&&null!==n&&void 0!==n&&n.enable){var o=a.speed*l.factor,t=i;a.angle+=o,a.angle>t&&(a.angle-=t)}}(e,l)}}]),e}()}}]);
//# sourceMappingURL=5579.da47fa61.chunk.js.map