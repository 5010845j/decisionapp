(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_Button = function(options) {
	this.initialize();
	this._element = new $.an.Button(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



// stage content:
(lib.developmentsoftwaresearch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1,9];
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var _this = this;
		ParseQuestion();
		
		
		function ParseQuestion(){
			if (!currentNode.isEnd){
				_this.question_text.text = currentNode.text1;
				$('#option1_btn').text(currentNode.text2);
				$('#option2_btn').text(currentNode.text3); } 
			else {
				_this.gotoAndStop(10);
				ParseAnswer();
			}
		}
		
		//$('#option1_btn').attr("text", "HELP1");
		//$('#option1_btn').attr("value", "HELP3");
		//_this.option1_btn.value = 'HELP4';
		
		function ParseAnswer(){
			_this.program_text.text = currentNode.text1;
			_this.description_text.text = currentNode.text2;
			_this.dl_link.text = currentNode.text3;
		}
		
		$('#dom_overlay_container').on('click', '#back_btn', function() {
		currentNode = q_start;
		_this.gotoAndStop(2);
		ParseQuestion();
		$('#option1_btn').text(currentNode.text2);
		$('#option2_btn').text(currentNode.text3);
		
		}.bind(_this));
		
		$('#dom_overlay_container').on('click', '#option1_btn', function() {
		currentNode = currentNode.children[0];
		ParseQuestion();	
		//_this.gotoAndStop(0);
			
		}.bind(_this));
		
		$('#dom_overlay_container').on('click', '#option2_btn', function() {
		
		
		currentNode = currentNode.children[1];
		ParseQuestion();	
		//_this.gotoAndStop(0);
			
		}.bind(_this));
	}
	this.frame_9 = function() {
		
		var _this = this;
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(11));

	// BackButton
	this.back_btn = new lib.an_Button({'id': 'back_btn', 'label':'Back', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.back_btn.name = "back_btn";
	this.back_btn.setTransform(250.6,454.4,1.1999,2.2727,0,0,0,50.5,11.1);
	this.back_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.back_btn).wait(9).to({_off:false},0).wait(11));

	// Styling
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/custom.css'});

	this.instance.setTransform(247,524,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Buttons
	this.option2_btn = new lib.an_Button({'id': 'option2_btn', 'label':'Frontend', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.option2_btn.name = "option2_btn";
	this.option2_btn.setTransform(375.2,442,2,3.1818,0,0,0,50.1,11);

	this.option1_btn = new lib.an_Button({'id': 'option1_btn', 'label':'Backend', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.option1_btn.name = "option1_btn";
	this.option1_btn.setTransform(125.2,442,2,3.1818,0,0,0,50.1,11);

	this.instance_1 = new lib.an_Button({'id': 'instance_1', 'label':'Button', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.instance_1.setTransform(375.2,442,2,3.1818,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.option1_btn},{t:this.option2_btn,p:{x:375.2}}]}).to({state:[{t:this.option2_btn,p:{x:125.2}},{t:this.instance_1}]},8).to({state:[]},1).wait(11));

	// Text
	this.question_text = new cjs.Text("Are you working with audio or visuals?", "39px 'Arial'", "#FFFFFF");
	this.question_text.name = "question_text";
	this.question_text.textAlign = "center";
	this.question_text.lineHeight = 46;
	this.question_text.lineWidth = 446;
	this.question_text.parent = this;
	this.question_text.setTransform(250,153.65);

	this.dl_link = new cjs.Text("https://blender.org", "18px 'Arial'", "#66FFFF");
	this.dl_link.name = "dl_link";
	this.dl_link.textAlign = "center";
	this.dl_link.lineHeight = 22;
	this.dl_link.lineWidth = 446;
	this.dl_link.parent = this;
	this.dl_link.setTransform(250,382.75);

	this.description_text = new cjs.Text("3D Modeling Software", "30px 'Arial'", "#FFFFFF");
	this.description_text.name = "description_text";
	this.description_text.textAlign = "center";
	this.description_text.lineHeight = 36;
	this.description_text.lineWidth = 446;
	this.description_text.parent = this;
	this.description_text.setTransform(250,331.75);

	this.program_text = new cjs.Text("Blender", "italic bold 58px 'Arial'", "#FFFFFF");
	this.program_text.name = "program_text";
	this.program_text.textAlign = "center";
	this.program_text.lineHeight = 67;
	this.program_text.lineWidth = 472;
	this.program_text.parent = this;
	this.program_text.setTransform(250,148);
	this.program_text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.question_text,p:{x:250,y:153.65,text:"Are you working with audio or visuals?",font:"39px 'Arial'",color:"#FFFFFF",lineHeight:45.55}}]}).to({state:[{t:this.program_text},{t:this.description_text},{t:this.dl_link},{t:this.question_text,p:{x:233.55,y:547.25,text:"https://blender.org",font:"28px 'Arial'",color:"#66FFFF",lineHeight:33.3}}]},9).wait(11));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#220D76","#157661"],[0,0.91],0,-250,0,249.9).s().p("EgnDgnCMBOGgABMAABBOGMhOGAABg");
	this.shape.setTransform(250,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(250,250,255,343.70000000000005);
// library properties:
lib.properties = {
	id: 'DA5E193C13FE8843B9A7F04C5DA6A088',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js", id:"an.CSS"},
		{src:"components/ui/src/button.js", id:"an.Button"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DA5E193C13FE8843B9A7F04C5DA6A088'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;