"use strict";(self.webpackChunkme_app=self.webpackChunkme_app||[]).push([[7294],{7294:function(e,i,a){a.r(i),a.d(i,{BaseMover:function(){return l}});var n=a(5671),t=a(3144),o=a(4709),r=1;function s(e,i,a,n,t,s){!function(e,i){var a,n=e.options,t=n.move.path;if(!t.enable)return;if(e.lastPathTime<=e.pathDelay)return void(e.lastPathTime+=i.value);var s=null===(a=e.pathGenerator)||void 0===a?void 0:a.generate(e,i);s&&e.velocity.addTo(s);t.clamp&&(e.velocity.x=(0,o.uZ)(e.velocity.x,-r,r),e.velocity.y=(0,o.uZ)(e.velocity.y,-r,r));e.lastPathTime-=e.pathDelay}(e,s);var l=e.gravity,c=null!==l&&void 0!==l&&l.enable&&l.inverse?-r:r;t&&a&&(e.velocity.x+=t*s.factor/(60*a)),null!==l&&void 0!==l&&l.enable&&a&&(e.velocity.y+=c*(l.acceleration*s.factor)/(60*a));var v=e.moveDecay;e.velocity.multTo(v);var p=e.velocity.mult(a);null!==l&&void 0!==l&&l.enable&&n>0&&(!l.inverse&&p.y>=0&&p.y>=n||l.inverse&&p.y<=0&&p.y<=-n)&&(p.y=c*n,a&&(e.velocity.y=p.y/a));var y=e.options.zIndex,u=Math.pow(r-e.zIndexFactor,y.velocityRate);p.multTo(u);var d=e.position;d.addTo(p),i.vibrate&&(d.x+=Math.sin(d.x*Math.cos(d.y)),d.y+=Math.cos(d.y*Math.sin(d.x)))}var l=function(){function e(){(0,n.Z)(this,e)}return(0,t.Z)(e,[{key:"init",value:function(e){var i=e.options.move.gravity;e.gravity={enable:i.enable,acceleration:(0,o.Gu)(i.acceleration),inverse:i.inverse},function(e){var i,a=e.container,n=e.options.move.spin;if(n.enable){var t=null!==(i=n.position)&&void 0!==i?i:{x:50,y:50},r={x:.01*t.x*a.canvas.size.width,y:.01*t.y*a.canvas.size.height},s=e.getPosition(),l=(0,o.Sp)(s,r),c=(0,o.Gu)(n.acceleration);e.retina.spinAcceleration=c*a.retina.pixelRatio,e.spin={center:r,direction:e.velocity.x>=0?"clockwise":"counter-clockwise",angle:e.velocity.angle,radius:l,acceleration:e.retina.spinAcceleration}}}(e)}},{key:"isEnabled",value:function(e){return!e.destroyed&&e.options.move.enable}},{key:"move",value:function(e,i){var a,n,t,l,c,v=e.options,p=v.move;if(p.enable){var y=e.container,u=y.retina.pixelRatio;null!==(n=(a=e.retina).moveSpeed)&&void 0!==n||(a.moveSpeed=(0,o.Gu)(p.speed)*u),null!==(l=(t=e.retina).moveDrift)&&void 0!==l||(t.moveDrift=(0,o.Gu)(e.options.move.drift)*u);var d=function(e){return e.slow.inRange?e.slow.factor:r}(e),x=e.retina.moveSpeed*y.retina.reduceFactor,f=e.retina.moveDrift,m=(0,o.KI)(v.size.value)*u,h=x*(p.size?e.getRadius()/m:1)*d*(i.factor||1)/2,b=null!==(c=e.retina.maxSpeed)&&void 0!==c?c:y.retina.maxSpeed;p.spin.enable?function(e,i){var a=e.container;if(e.spin){var n={x:"clockwise"===e.spin.direction?Math.cos:Math.sin,y:"clockwise"===e.spin.direction?Math.sin:Math.cos};e.position.x=e.spin.center.x+e.spin.radius*n.x(e.spin.angle),e.position.y=e.spin.center.y+e.spin.radius*n.y(e.spin.angle),e.spin.radius+=e.spin.acceleration;var t=Math.max(a.canvas.size.width,a.canvas.size.height),o=.5*t;e.spin.radius>o?(e.spin.radius=o,e.spin.acceleration*=-r):e.spin.radius<0&&(e.spin.radius=0,e.spin.acceleration*=-r),e.spin.angle+=.01*i*(r-e.spin.radius/t)}}(e,h):s(e,p,h,b,f,i),function(e){var i,a,n=e.initialPosition,t=(0,o.oW)(n,e.position),r=t.dx,s=t.dy,l=Math.abs(r),c=Math.abs(s),v=e.retina.maxDistance,p=v.horizontal,y=v.vertical;if(p||y){var u=null!==(a=y&&c>=y)&&void 0!==a&&a;if((null!==(i=p&&l>=p)&&void 0!==i&&i||u)&&!e.misplaced)e.misplaced=!!p&&l>p||!!y&&c>y,p&&(e.velocity.x=.5*e.velocity.y-e.velocity.x),y&&(e.velocity.y=.5*e.velocity.x-e.velocity.y);else if((!p||l<p)&&(!y||c<y)&&e.misplaced)e.misplaced=!1;else if(e.misplaced){var d=e.position,x=e.velocity;p&&(d.x<n.x&&x.x<0||d.x>n.x&&x.x>0)&&(x.x*=-(0,o.sZ)()),y&&(d.y<n.y&&x.y<0||d.y>n.y&&x.y>0)&&(x.y*=-(0,o.sZ)())}}}(e)}}}]),e}()}}]);
//# sourceMappingURL=7294.5e954fe3.chunk.js.map