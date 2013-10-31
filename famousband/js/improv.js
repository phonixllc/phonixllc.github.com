var w = window.innerWidth;
var h = window.outerHeight;
var Background_COLOR = '#000000';
var BASE_SPEED = 111;
var NUM = 1000;
var ctx;
var line;
var canvas;
animation = function(){};

//クラス定義
animation.EN = function(){
    this.initialize.apply(this, arguments);
};
//クラスの初期設定
animation.EN.prototype.initialize = function(){
    this.x = w * Math.random();
    this.y = h * Math.random();
    this.speed = {x:BASE_SPEED * Math.random(), y:BASE_SPEED * Math.random()};
    var r = Math.floor(550 * Math.random());
    var g = Math.floor(550 * Math.random());
    var b = Math.floor(550 * Math.random());
    var a = Math.random();
    this.color = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
};
//クラスの挙動設定
animation.EN.prototype.Frame = function(){
    var speed = this.speed;
    this.x = this.x + speed.x;
    this.y = this.y + speed.y;
    if(this.x < 0 || this.x > w) this.speed.x *= -1;
    if(this.y < 0 || this.y > h) this.speed.y *= -1;

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(w/2, this.y);
    ctx.lineTo(this.x, h/2);
    ctx.strokeStyle = this.color;
    ctx.stroke();
};

//初期処理
animation.init = function(){
   canvas = document.getElementById('main');
   if (!canvas || !canvas.getContext) {
   return false;
    }  
    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);
    canvas.style.backgroundColor = Background_COLOR;
    ctx = canvas.getContext('2d');
    for(var i=0;i<NUM;i++){
        line = new animation.EN();
    }  
    setTimeout(animation.init, 	2000);
};

//繰り返し処理
animation.Frame = function(){
    ctx.clearRect(0,0,w,h);
    for(var i=0;i<NUM;i++){
        line.Frame();
    }
};
//アニメーション設定
var requestAnimationFrame = ( function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(f){
                window.setTimeout(f, 1000.0 / 60.0 );
            };
} )();

var now = window.performance && (
    performance.now || 
    performance.mozNow || 
    performance.msNow || 
    performance.oNow || 
    performance.webkitNow );

var getTime = function() {
    return ( now && now.call( performance ) ) || ( new Date().getTime() );
}

var startTime = getTime();
var fps = 30.0;
var frameLength = 8.0;

( function loop(){
    requestAnimationFrame(loop);
    var lastTime = getTime();
    var frame = Math.floor( ( lastTime - startTime ) / ( 1000.0 / fps ) % frameLength );
    window.onload = animation.init;
    requestAnimationFrame(animation.Frame);
} )();