!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(i=i||self).VuePingPong=t()}(this,function(){"use strict";var i={name:"VuePingPong",props:{ballSize:{type:Number,default:24},ballSpeed:{type:Number,default:800},color:{type:String,default:"#000"},fps:{type:Number,default:60},paddleHeight:{type:Number,default:18},paddleWidth:{type:Number,default:82}},data:function(){return{ballDirection:Math.random()*Math.PI*2,ballOriginXRelative:0,ballOriginYRelative:0,paddle1OriginYRelative:0,paddle2OriginYRelative:0,sizeX:0,sizeY:0}},computed:{ballDirectionX:{get:function(){return Math.sin(this.ballDirection)},set:function(i){this.ballDirection=Math.atan2(i,this.ballDirectionY)}},ballDirectionY:{get:function(){return Math.cos(this.ballDirection)},set:function(i){this.ballDirection=Math.atan2(this.ballDirectionX,i)}},ballMovementX:function(){return this.ballSpeed*this.ballDirectionX},ballMovementY:function(){return this.ballSpeed*this.ballDirectionY},ballOriginX:{get:function(){return this.halfSizeX*(1+this.ballOriginXRelative)},set:function(i){this.ballOriginXRelative=i/this.halfSizeX-1}},ballOriginXMax:function(){return this.sizeX-this.ballOriginXMin},ballOriginXMin:function(){return this.ballRadius+this.paddleHeight},ballOriginY:{get:function(){return this.halfSizeY*(1+this.ballOriginYRelative)},set:function(i){this.ballOriginYRelative=i/this.halfSizeY-1}},ballOriginYMax:function(){return this.sizeY-this.ballOriginYMin},ballOriginYMin:function(){return this.ballRadius},ballRadius:function(){return this.ballSize/2},delta:function(){return 1/this.fps},halfSizeX:function(){return this.sizeX/2},halfSizeY:function(){return this.sizeY/2},interval:function(){return 1e3/this.fps},paddle1OriginY:{get:function(){return this.halfSizeY*(1+this.paddle1OriginYRelative)},set:function(i){this.paddle1OriginYRelative=i/this.halfSizeY-1}},paddle1PositionX:function(){return 0},paddle1PositionY:function(){return this.paddle1OriginY-this.paddleSizeY/2},paddle2OriginY:{get:function(){return this.halfSizeY*(2+this.paddle2OriginYRelative)},set:function(i){this.paddle2OriginYRelative=i/this.halfSizeY-2}},paddle2PositionX:function(){return this.sizeX-this.paddleSizeX},paddle2PositionY:function(){return this.paddle2OriginY-this.paddleSizeY/2},paddleSizeX:function(){return this.paddleHeight},paddleSizeY:function(){return this.paddleWidth}},methods:{redraw:function(){var i=this,t=i.$refs,e=i.ballOriginX,n=i.ballOriginY,l=i.ballRadius,a=i.color,r=i.paddle1PositionX,s=i.paddle1PositionY,h=i.paddle2PositionX,o=i.paddle2PositionY,d=i.paddleSizeX,u=i.paddleSizeY,f=t.canvas;if(f){var b=f.getContext("2d");b.clearRect(0,0,f.width,f.height),b.fillStyle=a,b.beginPath(),b.arc(e,n,l,0,2*Math.PI),b.fill(),b.beginPath(),b.rect(r,s,d,u),b.fill(),b.beginPath(),b.rect(h,o,d,u),b.fill()}},step:function(){for(this.ballOriginX+=this.delta*this.ballMovementX,this.ballOriginY+=this.delta*this.ballMovementY;;){var i=!0;if(this.ballOriginX<this.ballOriginXMin&&(this.ballOriginX=2*this.ballOriginXMin-this.ballOriginX,this.ballDirectionX*=-1,i=!1),this.ballOriginX>this.ballOriginXMax&&(this.ballOriginX=2*this.ballOriginXMax-this.ballOriginX,this.ballDirectionX*=-1,i=!1),this.ballOriginY<this.ballOriginYMin&&(this.ballOriginY=2*this.ballOriginYMin-this.ballOriginY,this.ballDirectionY*=-1,i=!1),this.ballOriginY>this.ballOriginYMax&&(this.ballOriginY=2*this.ballOriginYMax-this.ballOriginY,this.ballDirectionY*=-1,i=!1),i)break}this.ballMovementX<0?this.paddle1OriginY=this.ballOriginY:this.ballMovementX>0&&(this.paddle2OriginY=this.ballOriginY)},updateSize:function(){var i=this.$el,t=this.$refs.canvas;i&&t&&(this.sizeX=t.width=i.offsetWidth,this.sizeY=t.height=i.offsetHeight)}},mounted:function(){var i,t,e,n,l=this;this.updateSize(),this.redraw(),i=function(){if(l._isDestroyed)return!1;l.updateSize(),l.step(),l.redraw()},t=this.interval,(e=function(e){requestAnimationFrame(function(){!1!==i()&&setTimeout(e,t)})},n=function(){for(var i=[],t=arguments.length;t--;)i[t]=arguments[t];return e.call.apply(e,[this,n].concat(i))})()},render:function(i){return i("div",{style:{overflow:"hidden",position:"relative"}},[i("canvas",{style:{bottom:0,left:0,margin:"auto",position:"absolute",right:0,top:0},ref:"canvas"})])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(i.name,i),i});
