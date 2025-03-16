(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"КартаКофемашины_atlas_1", frames: [[0,0,577,1280]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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



(lib.frontSide = function() {
	this.initialize(ss["КартаКофемашины_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.шейкер_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("шейкер");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,153,0.2)").s().p("AB9JzIhOidQgYgwgUgyQgCgFgBgHQgHgvgEgzIAPgOIADgCQgchWgnhNQgWgrgNgzQgbhogthVQgTgjgVghQgVghgXgfIgQgwQgEgLgHgIIAAgBIAAjTIBUgWIACAAIA3BLIALAPQAFAPAEAQIADAQQgLAEgOACIAAAAQADAXAGAVQACAKAEAKIgMAQQgCADgDABQAqBLAmBQQArBbAoBdQAoBbAlBhQARArAOAtIAGANQASANAYAIIAEADQAKgDAJACQAMA1AKA2IAAAJQgDAcAIAZQAPAtAMAvIAYBdQgYAXgnAIQgTAEgTAAQgaAAgbgHg");
	this.shape.setTransform(0.475,0.0179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,153,0.8)").s().p("AB9JzIhOidQgYgwgUgyQgCgFgBgHQgHgvgEgzIAPgOIADgCQgchWgnhNQgWgrgNgzQgbhogthVQgTgjgVghQgVghgXgfIgQgwQgEgLgHgIIAAgBIAAjTIBUgWIACAAIA3BLIALAPQAFAPAEAQIADAQQgLAEgOACIAAAAQADAXAGAVQACAKAEAKIgMAQQgCADgDABQAqBLAmBQQArBbAoBdQAoBbAlBhQARArAOAtIAGANQASANAYAIIAEADQAKgDAJACQAMA1AKA2IAAAJQgDAcAIAZQAPAtAMAvIAYBdQgYAXgnAIQgTAEgTAAQgaAAgbgHg");
	this.shape_1.setTransform(0.475,0.0179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-63.3,55.8,126.69999999999999);


(lib.поднос_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("поднос");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(28,25,169,0.098)").s().p("AA+ExIgEAAIgBAAIgRAAIgBAAIgFAAIAAAAIgKgBIgBAAIgGAAIAAAAIgJgBIgBAAIgGAAIAAAAIgJgBIgBAAIgFAAIAAAAIgKgBIgBAAIgGAAIAAAAQgFgBgEAAIgBAAIgGAAIAAAAIgJgBIgBAAIgGAAIAAAAIgKgBIgBAAIgGAAIAAAAIgJgBIgBAAIgFAAIAAAAIgJgBIgBAAIgFAAIgJAAIgBAAIgGAAIAAgBQgFgBgEABIgBgBIgFABIAAgBIgJAAIgBgBIgFABIAAgBIgJAAIgBAAIgFAAIAAgBQgFgBgEABIgBAAIgGAAIAAgBIgJAAIgBAAIgFAAIAAgBQgFgBgEABIgBAAIgFAAIAAgBIgJAAIgBAAIgFAAIAAgBIgJAAIgBAAIgGAAIAAgBIgJAAIhUgcQg8gUg5gcQg5gcgwgsQgFgEgEgGQgagngYgrQgJgQgHgUIgNgnQgNgogGg2IAAgBIAAgBIABAAIAAgBIB0gyIB0gyIB0gzQAkgQAmgKQAKgCALAAIAUAAQAIABALAAIABAAIAfAAIABAAIArAAIABAAQAJABAKAAIABgBIAeAAIABAAIArAAIABAAQAJACAJAAIABgBIAfAAIABAAIArAAIABAAQAJACAKgBIABAAIAeAAIACAAIAqAAIABAAQAJACAKgBIACAAIAfAAIABAAIArAAIABAAQAEADAGgCIABAAIBuBAIBtA/IBuBAIA7AiIAAAdIAAABIgaBBQggBNgmA+IgEAFQgxAog0AhIgHAEQguAQgwAKIiBAZIgBAAIgHAAIAAABIgBAAIgFAAIgCAAIgGAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgFAAIAAAAIgJAAIAAAAIgBABIgEgBIgBABIgIgBIAAABIgBAAIgEAAIgBABIgHgBIAAABIgCAAIgDAAIgCAAIgIAAIAAABIAAAAIgFAAIAAAAIgJAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAg");
	this.shape.setTransform(0.475,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(14,13,89,0.533)").s().p("AAaACIAJAAIgBABIgCAAIgGgBgAgigBQAFgBAEABIAAABIgBAAIgCAAIgGgBg");
	this.shape_1.setTransform(-14.15,29.3979);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(14,12,86,0.518)").s().p("AATABIAKAAIAAABIgBAAIgDAAIgGgBgAgcgBIAJAAIAAABIgBAAIgCAAQgDAAgDgBg");
	this.shape_2.setTransform(-7.175,29.8167);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(13,12,83,0.498)").s().p("ABRAFQAEgBAFABIAAABIgBAAIgDAAIgFgBgAgcgBIAJABIAAAAIgBAAIgCAAIgGgBgAhZgFQAEAAAFABIAAAAIgBAAIgDAAIgFgBg");
	this.shape_3.setTransform(-11.725,29.5333);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(14,13,89,0.529)").s().p("AgEAAIAIAAIAAAAIgBAAIgCABIgFgBg");
	this.shape_4.setTransform(-23.3,28.8063);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(13,12,80,0.482)").s().p("AA5ADQAEAAAFABIAAAAIgBAAIgDABIgFgCgAgEAAIAIAAIAAAAIgBAAIgCABIgFgBgAhBgEIAJABIAAAAIgBAAIgCABIgGgCg");
	this.shape_5.setTransform(-18.8,29.1063);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(16,14,96,0.573)").s().p("AAAADIgBgGIABADIACABIAAABIgCAAIAAABIAAABIAAgBg");
	this.shape_6.setTransform(-66.7,-12.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(15,13,89,0.529)").s().p("AgDAAIAGAAIABAAIAAAAIgHAAIAAAAg");
	this.shape_7.setTransform(24.05,29.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(15,13,89,0.533)").s().p("AgDAAIAFAAIACAAIAAAAIgHAAIAAAAg");
	this.shape_8.setTransform(22.65,29.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(14,12,86,0.514)").s().p("AB5AHIAKABIAAAAIgBAAIgEABQgDAAgCgCgAg9gCIgIgBIAJAAIAAABIgBAAgAiCgHIAJAAIAAABIgBAAIgDAAIgFgBg");
	this.shape_9.setTransform(-9.175,29.6833);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(13,12,82,0.49)").s().p("AAkACIAKAAIAAABIgBAAIgDAAIgGgBgAgtgCIAJAAIAAABIgBAAIgCAAQgDAAgDgBg");
	this.shape_10.setTransform(-3.975,30.0167);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(13,12,81,0.486)").s().p("AgIAAIAQAAIABAAIAAAAIgIABIgJgBg");
	this.shape_11.setTransform(5.4,30.5571);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(14,12,85,0.51)").s().p("AAoABIAHAAIACAAIAAAAIgJABIAAgBgAgvgBIAKAAIAAABIgBAAIgEAAQgDAAgCgBg");
	this.shape_12.setTransform(2.85,30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(14,12,85,0.506)").s().p("AgLAAIAJAAIAAAAIAAAAIgJABIAAgBgAADAAIAIAAIABAAIAAAAIgJAAIAAAAg");
	this.shape_13.setTransform(9.35,30.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(14,12,84,0.506)").s().p("ABOABIAIAAIABAAIAAAAIgJABIAAgBgABcAAIAIAAIABAAIAAABIgJAAIAAgBgAhkgBIAKABIAAAAIgBAAIgDAAQgEAAgCgBg");
	this.shape_14.setTransform(3.2,30);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(14,12,83,0.498)").s().p("AgSAAIAIABIABgBIAAABIgJAAIAAgBgAgEAAIAIAAIgIAAgAAKAAIAIAAIABAAIAAAAIgJAAIAAAAg");
	this.shape_15.setTransform(19.875,29.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(14,12,84,0.502)").s().p("AhQACIAJABIAAAAIgBAAIgDABIgFgCgAAsgBIAJAAIAAAAIAAABIgJAAIAAgBgAA6gBIAAgBIAIAAIABAAIAAABIgGAAIgDAAgABIgDIAIABIABgBIAAABIgJAAIAAgBg");
	this.shape_16.setTransform(9.4,30.0667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(12,11,78,0.471)").s().p("AAAAPIAAgBIAAgcQABANgBAQg");
	this.shape_17.setTransform(67.6667,-6.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(18,16,111,0.667)").s().p("ABWAAIATAAIABAAIAAABIgBAAIgHABIgMgCgAhpAAIATAAIABAAIAAAAIgBAAIgFAAIgOAAg");
	this.shape_18.setTransform(-0.075,-30.3208);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(10,9,67,0.4)").s().p("AAOAAIgdAAIAAAAIAfAAIAAAAIgCAAg");
	this.shape_19.setTransform(12.075,-30.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(19,16,112,0.671)").s().p("AC1ABIATAAIACAAIAAABIgCAAIgHABIgMgCgAgJAAIASAAIABAAIAAAAIgBABIgEAAQgHAAgHgBgAjJgBIATAAIABAAIAAABIgBAAIgFAAIgOgBg");
	this.shape_20.setTransform(-0.1,-30.3208);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(10,9,66,0.4)").s().p("ACwACIAAgBIAfABIAAAAIgBAAIgPAAIgPAAgAgPAAIAAAAIAfAAIAAAAIgBAAIgPAAIgPAAgAhuAAIAAAAIAdAAIgdAAgAivAAIggAAIAAgBQAQgBARABIAAABIgBAAg");
	this.shape_21.setTransform(2.5,-30.3208);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(20,17,119,0.71)").s().p("AgFAAIAKAAIAAAAIgBAAIgDABQgDAAgDgBg");
	this.shape_22.setTransform(28.2,-30.0219);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(28,25,169,0.2)").s().p("AA+ExIgEAAIgBAAIgRAAIgBAAIgFAAIAAAAIgKgBIgBAAIgGAAIAAAAIgJgBIgBAAIgGAAIAAAAIgJgBIgBAAIgFAAIAAAAIgKgBIgBAAIgGAAIAAAAQgFgBgEAAIgBAAIgGAAIAAAAIgJgBIgBAAIgGAAIAAAAIgKgBIgBAAIgGAAIAAAAIgJgBIgBAAIgFAAIAAAAIgJgBIgBAAIgFAAIgJAAIgBAAIgGAAIAAgBQgFgBgEABIgBgBIgFABIAAgBIgJAAIgBgBIgFABIAAgBIgJAAIgBAAIgFAAIAAgBQgFgBgEABIgBAAIgGAAIAAgBIgJAAIgBAAIgFAAIAAgBQgFgBgEABIgBAAIgFAAIAAgBIgJAAIgBAAIgFAAIAAgBIgJAAIgBAAIgGAAIAAgBIgJAAIhUgcQg8gUg5gcQg5gcgwgsQgFgEgEgGQgagngYgrQgJgQgHgUIgNgnQgNgogGg2IAAgBIAAgBIABAAIAAgBIB0gyIB0gyIB0gzQAkgQAmgKQAKgCALAAIAUAAQAIABALAAIABAAIAfAAIABAAIArAAIABAAQAJABAKAAIABgBIAeAAIABAAIArAAIABAAQAJACAJAAIABgBIAfAAIABAAIArAAIABAAQAJACAKgBIABAAIAeAAIACAAIAqAAIABAAQAJACAKgBIACAAIAfAAIABAAIArAAIABAAQAEADAGgCIABAAIBuBAIBtA/IBuBAIA7AiIAAAdIAAABIgaBBQggBNgmA+IgEAFQgxAog0AhIgHAEQguAQgwAKIiBAZIgBAAIgHAAIAAABIgBAAIgFAAIgCAAIgGAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgFAAIAAAAIgJAAIAAAAIgBABIgEgBIgBABIgIgBIAAABIgBAAIgEAAIgBABIgHgBIAAABIgCAAIgDAAIgCAAIgIAAIAAABIAAAAIgFAAIAAAAIgJAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAg");
	this.shape_23.setTransform(0.475,-0.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(28,25,169,0.8)").s().p("AA+ExIgEAAIgBAAIgRAAIgBAAIgFAAIAAAAIgKgBIgBAAIgGAAIAAAAIgJgBIgBAAIgGAAIAAAAIgJgBIgBAAIgFAAIAAAAIgKgBIgBAAIgGAAIAAAAQgFgBgEAAIgBAAIgGAAIAAAAIgJgBIgBAAIgGAAIAAAAIgKgBIgBAAIgGAAIAAAAIgJgBIgBAAIgFAAIAAAAIgJgBIgBAAIgFAAIgJAAIgBAAIgGAAIAAgBQgFgBgEABIgBgBIgFABIAAgBIgJAAIgBgBIgFABIAAgBIgJAAIgBAAIgFAAIAAgBQgFgBgEABIgBAAIgGAAIAAgBIgJAAIgBAAIgFAAIAAgBQgFgBgEABIgBAAIgFAAIAAgBIgJAAIgBAAIgFAAIAAgBIgJAAIgBAAIgGAAIAAgBIgJAAIhUgcQg8gUg5gcQg5gcgwgsQgFgEgEgGQgagngYgrQgJgQgHgUIgNgnQgNgogGg2IAAgBIAAgBIABAAIAAgBIB0gyIB0gyIB0gzQAkgQAmgKQAKgCALAAIAUAAQAIABALAAIABAAIAfAAIABAAIArAAIABAAQAJABAKAAIABgBIAeAAIABAAIArAAIABAAQAJACAJAAIABgBIAfAAIABAAIArAAIABAAQAJACAKgBIABAAIAeAAIACAAIAqAAIABAAQAJACAKgBIACAAIAfAAIABAAIArAAIABAAQAEADAGgCIABAAIBuBAIBtA/IBuBAIA7AiIAAAdIAAABIgaBBQggBNgmA+IgEAFQgxAog0AhIgHAEQguAQgwAKIiBAZIgBAAIgHAAIAAABIgBAAIgFAAIgCAAIgGAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgFAAIAAAAIgJAAIAAAAIgBABIgEgBIgBABIgIgBIAAABIgBAAIgEAAIgBABIgHgBIAAABIgCAAIgDAAIgCAAIgIAAIAAABIAAAAIgFAAIAAAAIgJAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAIgEAAIgBAAIgIAAIAAABIgBAAg");
	this.shape_24.setTransform(0.475,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_23}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_24}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,-30.6,134.6,61.2);


(lib.корпус_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("корпус");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,0,51,0.098)").s().p("AFQRMIgRgFQgkgOgggVIAAgBIgaAAIgBAAIgqAAIAAgBIgRAAIgFAAIgBAAIgQAAIgCAAIgCAAIgVAAIgTAAIAAgBIgVAAIgBAAIgRAAIgBAAIgeAAIgCAAIgLAAIAAgBIgPAAIgBAAIgFAAIgBAAIgEAAIgCAAIgJAAIgCAAIgSAAIgYAAIAAgBIgXAAIgBAAIgQAAIgBAAIgpAAIAAgBIgXAAIgBAAIgRAAIgBAAIgrAAQgEgBgGAAIgBAAIgWAAIAAABIiXAtQgEABgEgBQgugOgtgYQgogWgkgdIgJgJQgrgzgpg6IgShWQgVhjgPhtQgOhsgQhqIggjWIgfjUIghjWIAAgBIAAgCIABAAIAAgBIAAgBQABgFgCgBIAAgBQgIg/gGhDQABgEAAgIIAAgBIAAgBIAAgMQABgEAAgJIAAgBIAAgBIAAgNQACgEgBgJIAAgBIAAgBIAAgGQAehRAsg5IAVgaQAjgoAkgjQAwgvA0grQAJgHAJgLQAggpAoggIANgKQAwgvA2gnQAZgSAfgMIA8gYQA+gYA/gUQAYgIAagCQA6gFA3gGIAYAAIASAAIACAAIAEAAIACAAQAFACAGgBIABAAIAKAAIAAAAIAYAAIABAAQAEACAFgBIABAAIALAAIABAAIAYAAIAAAAQAEACAFgBIABAAICMASQAVADARAKQAcASAdAPQApAVAlAeIATAQQAwAwAqA9QAUAeAcATQAbARAYAaQAvAyAsA4QAsA4AmBCQAOAYALAdIABAFIAAAHIABABIAAAHIAAABIAAAHIABAAIAAAHIAAABIAAAIIAAAAIAAAHIAAABIABAIIABAAIAAAHIAAABIABAHIAAAAIAAAHIAAABIABAIIAAAAIgEAWIgGAtQgJAsgMAoIgCAKQgJB3gMBvIgZDeIgVDCIgRClIgQCMQgCAagFAYQgLBIgOBDIgBAFQgjBJgvAxIgQAPQgTAQgVANQgdARgkAGIgkAIQghAHghAAQgkAAgkgJg");
	this.shape.setTransform(0.5,0.0446);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(8,7,55,0.333)").s().p("AgPAAIAdAAIACAAIAAAAIgCAAIgKABIgTgBg");
	this.shape_1.setTransform(-17.25,105.5667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(9,8,55,0.333)").s().p("AgOAAIARAAIABAAIAJAAIACAAIAAAAIgCAAIgKABIgRgBg");
	this.shape_2.setTransform(-2.125,105.6667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(17,15,104,0.62)").s().p("AAAADIgBgFQABgBAAABQAAAAAAAAQAAAAABABQAAABAAAAIABAAIAAAAIgCABIAAACIAAABIAAgBg");
	this.shape_3.setTransform(-157.15,-26.0031);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(9,8,57,0.341)").s().p("AACAEQAAgBAAgBQgBgBAAAAQAAAAgBgBQAAAAAAAAIgCAAIAAgBQABABAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIAAgBQADABgBADIAAACg");
	this.shape_4.setTransform(-157.2375,-26.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(12,11,75,0.455)").s().p("AAAAFIAAgKIAAAAIAAABQACAGgCAEIAAgBg");
	this.shape_5.setTransform(-159.7,-40.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(13,11,79,0.475)").s().p("AAAAGIAAgMIABAAIAAABQABAIgCAEIAAgBg");
	this.shape_6.setTransform(-159.5275,-43.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(13,11,79,0.478)").s().p("AAAAGIAAgMIABAAIAAABQABAIgCAEIAAgBg");
	this.shape_7.setTransform(-159.3275,-45.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(15,14,95,0.569)").s().p("AgNAAIAAAAIAKAAIACAAIAOAAIAAAAIgaAAg");
	this.shape_8.setTransform(0.75,105.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(12,11,76,0.459)").s().p("AAAADIAAgGQACABgBAFIAAABIgBgBg");
	this.shape_9.setTransform(160.6125,-40.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(12,11,77,0.459)").s().p("AAAAEIAAgHQACACgBAEIAAABg");
	this.shape_10.setTransform(160.4225,-42.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(12,11,77,0.463)").s().p("AABAMIgBgIQADABgBAGIAAABgAAAgDIgBgIQACABgBAGIAAABIAAAAg");
	this.shape_11.setTransform(160.1475,-44.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(12,11,78,0.467)").s().p("AAAAEIAAgHQACACgBAEIAAABg");
	this.shape_12.setTransform(159.8625,-46.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(13,11,78,0.471)").s().p("AAAADIAAgGQACABgBAFIAAABIgBgBg");
	this.shape_13.setTransform(159.6625,-48.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(16,14,96,0.576)").s().p("AhDQ6IARAAIABAAIAFAAIgDAAIgUAAgAAzw5QAIgBAJABIAAABIgCAAIgFAAIgKgBg");
	this.shape_14.setTransform(21.525,-2.4204);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(16,14,96,0.573)").s().p("AiIQ6IAAgBIAoABIAAAAIgCAAIgTAAIgTAAgAByw5IAVAAIACAAIAAABIgCAAIgGAAIgPgBg");
	this.shape_15.setTransform(-1.95,-2.6125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(8,7,54,0.325)").s().p("AAHABIgPAAIAAgBQAIAAAKAAIAAABIgDAAg");
	this.shape_16.setTransform(12.7,-110.8083);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(16,14,99,0.596)").s().p("AgIAAIAPAAIADAAIAAAAIgDAAIgGABIgJgBg");
	this.shape_17.setTransform(19,-110.6833);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(9,8,59,0.353)").s().p("AAJABIgTAAIAAgBIAVAAIAAABIgCAAg");
	this.shape_18.setTransform(21.075,-110.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(12,11,75,0.451)").s().p("AAUAAIgTAAIgWAAIAAAAIArAAIAAAAIgCAAg");
	this.shape_19.setTransform(2.725,-110.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(153,0,51,0.2)").s().p("AFQRMIgRgFQgkgOgggVIAAgBIgaAAIgBAAIgqAAIAAgBIgRAAIgFAAIgBAAIgQAAIgCAAIgCAAIgVAAIgTAAIAAgBIgVAAIgBAAIgRAAIgBAAIgeAAIgCAAIgLAAIAAgBIgPAAIgBAAIgFAAIgBAAIgEAAIgCAAIgJAAIgCAAIgSAAIgYAAIAAgBIgXAAIgBAAIgQAAIgBAAIgpAAIAAgBIgXAAIgBAAIgRAAIgBAAIgrAAQgEgBgGAAIgBAAIgWAAIAAABIiXAtQgEABgEgBQgugOgtgYQgogWgkgdIgJgJQgrgzgpg6IgShWQgVhjgPhtQgOhsgQhqIggjWIgfjUIghjWIAAgBIAAgCIABAAIAAgBIAAgBQABgFgCgBIAAgBQgIg/gGhDQABgEAAgIIAAgBIAAgBIAAgMQABgEAAgJIAAgBIAAgBIAAgNQACgEgBgJIAAgBIAAgBIAAgGQAehRAsg5IAVgaQAjgoAkgjQAwgvA0grQAJgHAJgLQAggpAoggIANgKQAwgvA2gnQAZgSAfgMIA8gYQA+gYA/gUQAYgIAagCQA6gFA3gGIAYAAIASAAIACAAIAEAAIACAAQAFACAGgBIABAAIAKAAIAAAAIAYAAIABAAQAEACAFgBIABAAIALAAIABAAIAYAAIAAAAQAEACAFgBIABAAICMASQAVADARAKQAcASAdAPQApAVAlAeIATAQQAwAwAqA9QAUAeAcATQAbARAYAaQAvAyAsA4QAsA4AmBCQAOAYALAdIABAFIAAAHIABABIAAAHIAAABIAAAHIABAAIAAAHIAAABIAAAIIAAAAIAAAHIAAABIABAIIABAAIAAAHIAAABIABAHIAAAAIAAAHIAAABIABAIIAAAAIgEAWIgGAtQgJAsgMAoIgCAKQgJB3gMBvIgZDeIgVDCIgRClIgQCMQgCAagFAYQgLBIgOBDIgBAFQgjBJgvAxIgQAPQgTAQgVANQgdARgkAGIgkAIQghAHghAAQgkAAgkgJg");
	this.shape_20.setTransform(0.5,0.0446);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(153,0,51,0.8)").s().p("AFQRMIgRgFQgkgOgggVIAAgBIgaAAIgBAAIgqAAIAAgBIgRAAIgFAAIgBAAIgQAAIgCAAIgCAAIgVAAIgTAAIAAgBIgVAAIgBAAIgRAAIgBAAIgeAAIgCAAIgLAAIAAgBIgPAAIgBAAIgFAAIgBAAIgEAAIgCAAIgJAAIgCAAIgSAAIgYAAIAAgBIgXAAIgBAAIgQAAIgBAAIgpAAIAAgBIgXAAIgBAAIgRAAIgBAAIgrAAQgEgBgGAAIgBAAIgWAAIAAABIiXAtQgEABgEgBQgugOgtgYQgogWgkgdIgJgJQgrgzgpg6IgShWQgVhjgPhtQgOhsgQhqIggjWIgfjUIghjWIAAgBIAAgCIABAAIAAgBIAAgBQABgFgCgBIAAgBQgIg/gGhDQABgEAAgIIAAgBIAAgBIAAgMQABgEAAgJIAAgBIAAgBIAAgNQACgEgBgJIAAgBIAAgBIAAgGQAehRAsg5IAVgaQAjgoAkgjQAwgvA0grQAJgHAJgLQAggpAoggIANgKQAwgvA2gnQAZgSAfgMIA8gYQA+gYA/gUQAYgIAagCQA6gFA3gGIAYAAIASAAIACAAIAEAAIACAAQAFACAGgBIABAAIAKAAIAAAAIAYAAIABAAQAEACAFgBIABAAIALAAIABAAIAYAAIAAAAQAEACAFgBIABAAICMASQAVADARAKQAcASAdAPQApAVAlAeIATAQQAwAwAqA9QAUAeAcATQAbARAYAaQAvAyAsA4QAsA4AmBCQAOAYALAdIABAFIAAAHIABABIAAAHIAAABIAAAHIABAAIAAAHIAAABIAAAIIAAAAIAAAHIAAABIABAIIABAAIAAAHIAAABIABAHIAAAAIAAAHIAAABIABAIIAAAAIgEAWIgGAtQgJAsgMAoIgCAKQgJB3gMBvIgZDeIgVDCIgRClIgQCMQgCAagFAYQgLBIgOBDIgBAFQgjBJgvAxIgQAPQgTAQgVANQgdARgkAGIgkAIQghAHghAAQgkAAgkgJg");
	this.shape_21.setTransform(0.5,0.0446);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_21}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.8,-110.9,320.5,221.9);


(lib.выпускнойагрегат_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("выпускнойагрегат");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(28,25,169,0.098)").s().p("AgMGOIgugEQgXgCgUgGQg1gRgpgkIAAgBQgGgLgDgNIAAgBQABgFgCgCIAAgBIAAgFIAAAAQABgHgDgBIAAgBIAAgFIAAgBQABgGgCgBIAAgBIAAgFIAAgBQABgFgCgCIAAgBIAAgFIAAgBQABgFgCgCIAAgBIAAgEIAAgBQABgHgCgBIAAgBIAAgFIAAgBQAAgFgBgCIAAgBIAAgFIAAgBQAAgFgBgCIAAgBIAAgFIAAgBQABgFgCgBIAAgBIAAgFIAAgBQAAgHgCgBIAAgBIAAgFIAAgBQABgFgCgCIAAgDQgLgjgMggQgjhWgqhHIgBgBIgKhXIANg2IAAABQAGABADgLQAJgZAMgTQA1hGBLghQAigOAmgKIAHgBIAAgBIAqgGIACAAIASAAIAAgBIAoAAIABAAQAFACAFgBIACAAIABAAQADACAFgBIABAAQBNAJA6AlQAWAOASATQACAEADABIABABQAqAkAdA7IACAKQAIAkANAcQgBAGABACQAEAPADARIAAACQAAAFgCADIAAACQgBAGgDADIgCAMIgNA5QgHAPgHARQggBUgvA6IAAAIIAAABIgBAAIAAANIAAABIAAASIAAABIAAAXIAAABIgBAAIAAANIAAABIAAASIAAABIAAAXIAAABIgBAAIAAALIAAABIAAAUIAAABQABAGgCACQgfAggnATQgKAEgKACQg9AMg+ADIgBAAIgFABIgEgBg");
	this.shape.setTransform(0.45,-0.0375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(14,12,82,0.494)").s().p("AAAAEIAAgHQABABgBAFIAAABIAAAAg");
	this.shape_1.setTransform(-20.1333,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(14,13,88,0.525)").s().p("AAAAEIAAgHQABABgBAFIAAABg");
	this.shape_2.setTransform(-20.3437,27.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(14,12,85,0.51)").s().p("AABASIgBgJQACACAAAGIgBABgAAAgKIgBgHQABACAAAFIAAABIAAgBg");
	this.shape_3.setTransform(-20.345,27.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(14,12,88,0.525)").s().p("AAAAEIAAgHQABACgBAEIAAABg");
	this.shape_4.setTransform(-20.7937,21.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(14,12,84,0.506)").s().p("AACAgIAAgJQACACgBAHIAAABIgBgBgAAAAEIAAgHQABACAAAEIAAABIgBAAgAgBgWIgBgJQACABgBAHIAAABg");
	this.shape_5.setTransform(-20.9083,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(14,12,87,0.522)").s().p("AAAADIAAgGQABABAAAFIAAABIgBgBg");
	this.shape_6.setTransform(-21.27,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(22,20,133,0.792)").s().p("AgCACIAAgBQAGgJgBAIIAAAAQgBAFgCAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBgBg");
	this.shape_7.setTransform(-31.2937,-21.7163);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(14,13,89,0.533)").s().p("AgIAAIAQAAIABAAIAAAAIgRABIAAgBg");
	this.shape_8.setTransform(-2.175,-39.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(12,11,78,0.467)").s().p("AgDAAIAGAAIABAAIAAAAIgHABIAAgBg");
	this.shape_9.setTransform(-7.825,-39.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(10,9,64,0.384)").s().p("AAAAKIAAgTIAAAAIAAABQABALgBAHg");
	this.shape_10.setTransform(21.7563,30.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(19,17,114,0.678)").s().p("AAAAGIAAgBIAAgKIAAAAIAAAKIAAABg");
	this.shape_11.setTransform(21.75,29.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(12,11,77,0.463)").s().p("AgEAAIAHAAIACAAIgBAAIgEAAIgEAAg");
	this.shape_12.setTransform(-0.325,39.845);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(10,9,63,0.38)").s().p("AAAAJIAAgSIAAAAIAAABQABALgBAHIAAgBg");
	this.shape_13.setTransform(21.8667,25.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(19,16,113,0.675)").s().p("AAAAHIAAgBIAAgMIAAAAIAAAMIAAABIAAAAg");
	this.shape_14.setTransform(21.85,23.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(10,9,64,0.388)").s().p("AAAAJIAAgSIAAAAIAAABQABALgBAHIAAgBg");
	this.shape_15.setTransform(21.9667,19.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(19,17,114,0.682)").s().p("AAAAHIAAgBIAAgMIAAAAIAAAMIAAABIAAAAg");
	this.shape_16.setTransform(21.95,17.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(13,12,82,0.494)").s().p("AgEAAIAIAAIAAAAIgBAAIgDABIgEgBg");
	this.shape_17.setTransform(4.7,-39.7333);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(11,9,66,0.396)").s().p("AgFAAIALAAIAAAAIgCAAIgDABIgGgBg");
	this.shape_18.setTransform(3.55,-39.8417);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(13,12,82,0.49)").s().p("AjYEdIAAgIQACACgBAFIAAABgAjcDlIgBgHQACABgBAFIAAABgADdkXQgDgBgCgEQADABADAEIAAABIgBgBg");
	this.shape_19.setTransform(1.075,-3.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(28,25,169,0.2)").s().p("AgMGOIgugEQgXgCgUgGQg1gRgpgkIAAgBQgGgLgDgNIAAgBQABgFgCgCIAAgBIAAgFIAAAAQABgHgDgBIAAgBIAAgFIAAgBQABgGgCgBIAAgBIAAgFIAAgBQABgFgCgCIAAgBIAAgFIAAgBQABgFgCgCIAAgBIAAgEIAAgBQABgHgCgBIAAgBIAAgFIAAgBQAAgFgBgCIAAgBIAAgFIAAgBQAAgFgBgCIAAgBIAAgFIAAgBQABgFgCgBIAAgBIAAgFIAAgBQAAgHgCgBIAAgBIAAgFIAAgBQABgFgCgCIAAgDQgLgjgMggQgjhWgqhHIgBgBIgKhXIANg2IAAABQAGABADgLQAJgZAMgTQA1hGBLghQAigOAmgKIAHgBIAAgBIAqgGIACAAIASAAIAAgBIAoAAIABAAQAFACAFgBIACAAIABAAQADACAFgBIABAAQBNAJA6AlQAWAOASATQACAEADABIABABQAqAkAdA7IACAKQAIAkANAcQgBAGABACQAEAPADARIAAACQAAAFgCADIAAACQgBAGgDADIgCAMIgNA5QgHAPgHARQggBUgvA6IAAAIIAAABIgBAAIAAANIAAABIAAASIAAABIAAAXIAAABIgBAAIAAANIAAABIAAASIAAABIAAAXIAAABIgBAAIAAALIAAABIAAAUIAAABQABAGgCACQgfAggnATQgKAEgKACQg9AMg+ADIgBAAIgFABIgEgBg");
	this.shape_20.setTransform(0.45,-0.0375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(28,25,169,0.8)").s().p("AgMGOIgugEQgXgCgUgGQg1gRgpgkIAAgBQgGgLgDgNIAAgBQABgFgCgCIAAgBIAAgFIAAAAQABgHgDgBIAAgBIAAgFIAAgBQABgGgCgBIAAgBIAAgFIAAgBQABgFgCgCIAAgBIAAgFIAAgBQABgFgCgCIAAgBIAAgEIAAgBQABgHgCgBIAAgBIAAgFIAAgBQAAgFgBgCIAAgBIAAgFIAAgBQAAgFgBgCIAAgBIAAgFIAAgBQABgFgCgBIAAgBIAAgFIAAgBQAAgHgCgBIAAgBIAAgFIAAgBQABgFgCgCIAAgDQgLgjgMggQgjhWgqhHIgBgBIgKhXIANg2IAAABQAGABADgLQAJgZAMgTQA1hGBLghQAigOAmgKIAHgBIAAgBIAqgGIACAAIASAAIAAgBIAoAAIABAAQAFACAFgBIACAAIABAAQADACAFgBIABAAQBNAJA6AlQAWAOASATQACAEADABIABABQAqAkAdA7IACAKQAIAkANAcQgBAGABACQAEAPADARIAAACQAAAFgCADIAAACQgBAGgDADIgCAMIgNA5QgHAPgHARQggBUgvA6IAAAIIAAABIgBAAIAAANIAAABIAAASIAAABIAAAXIAAABIgBAAIAAANIAAABIAAASIAAABIAAAXIAAABIgBAAIAAALIAAABIAAAUIAAABQABAGgCACQgfAggnATQgKAEgKACQg9AMg+ADIgBAAIgFABIgEgBg");
	this.shape_21.setTransform(0.45,-0.0375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_21}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-39.9,65.9,79.8);


(lib.бакотходов_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("бакотходов");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,153,0.098)").s().p("Aj9JAIABAAIAFgRIABgFQADgIgCgNIAAgBIAAgBIAAgBQAJgLABgSIAAgBQADgLgBgQIAAgBIAAgBIAAgBQAOgSAMgWIABAAQAKgTAAgfIgBgJIANgRQABgGADgFIABgCQAJgKADgRIAAgCQAEgCgCgHIAAgBIAAgBIAAgYQAFgFAAgKIAAgBQACggAAglIAAgBIAAgBIAAgBQAMgOALgQIABgBQAEgLABgNIAAgGQAEgMgBgRIAAgBIAAgBQAfgPARgcIABgBQALglgEg1QgBgKgEgJQAggoAXgwQAEgIABgMQACgXAKgPIANgVQAxhbBAhNQARgUASgSQBGhBAshYQAFgKADgLIABAAIAAABIgRB6QgSB1gVB0QgVBzgYBxQgYBugcBsQgdBrgsBeQgrBchUAzQhVA0h8AJQASgKAKgSg");
	this.shape.setTransform(63.65,353.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(9,8,58,0.353)").s().p("AAAAKIAAgUIAAAAIAAABQACAMgCAIIAAgBg");
	this.shape_1.setTransform(39.05,407.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(11,10,71,0.424)").s().p("AAAANIAAgaIABAAIAAABQABAPgCALIAAgBg");
	this.shape_2.setTransform(40.1725,402.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(10,9,64,0.384)").s().p("AAAAEIAAgIIABAAIAAABQABAGgCACIAAgBg");
	this.shape_3.setTransform(47.0225,384.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(7,6,47,0.286)").s().p("AAAAiIAAhEIABAAIAAABQABAkgCAgIAAgBg");
	this.shape_4.setTransform(47.6125,376.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(13,11,80,0.482)").s().p("AAAAOIAAgcIABAAIAAABQABAQgCAMIAAgBg");
	this.shape_5.setTransform(50.8225,364.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(10,9,64,0.388)").s().p("AAAADIgBAAIAAgBIAAgCQAEgIgCALIgBABg");
	this.shape_6.setTransform(91.7786,292.8616);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,153,0.2)").s().p("Aj9JAIABAAIAFgRIABgFQADgIgCgNIAAgBIAAgBIAAgBQAJgLABgSIAAgBQADgLgBgQIAAgBIAAgBIAAgBQAOgSAMgWIABAAQAKgTAAgfIgBgJIANgRQABgGADgFIABgCQAJgKADgRIAAgCQAEgCgCgHIAAgBIAAgBIAAgYQAFgFAAgKIAAgBQACggAAglIAAgBIAAgBIAAgBQAMgOALgQIABgBQAEgLABgNIAAgGQAEgMgBgRIAAgBIAAgBQAfgPARgcIABgBQALglgEg1QgBgKgEgJQAggoAXgwQAEgIABgMQACgXAKgPIANgVQAxhbBAhNQARgUASgSQBGhBAshYQAFgKADgLIABAAIAAABIgRB6QgSB1gVB0QgVBzgYBxQgYBugcBsQgdBrgsBeQgrBchUAzQhVA0h8AJQASgKAKgSg");
	this.shape_7.setTransform(63.65,353.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,153,0.8)").s().p("Aj9JAIABAAIAFgRIABgFQADgIgCgNIAAgBIAAgBIAAgBQAJgLABgSIAAgBQADgLgBgQIAAgBIAAgBIAAgBQAOgSAMgWIABAAQAKgTAAgfIgBgJIANgRQABgGADgFIABgCQAJgKADgRIAAgCQAEgCgCgHIAAgBIAAgBIAAgYQAFgFAAgKIAAgBQACggAAglIAAgBIAAgBIAAgBQAMgOALgQIABgBQAEgLABgNIAAgGQAEgMgBgRIAAgBIAAgBQAfgPARgcIABgBQALglgEg1QgBgKgEgJQAggoAXgwQAEgIABgMQACgXAKgPIANgVQAxhbBAhNQARgUASgSQBGhBAshYQAFgKADgLIABAAIAAABIgRB6QgSB1gVB0QgVBzgYBxQgYBugcBsQgdBrgsBeQgrBchUAzQhVA0h8AJQASgKAKgSg");
	this.shape_8.setTransform(63.65,353.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.5,292.5,56.5,121.5);


(lib.бакводы_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("бакводы");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,153,0.098)").s().p("ADuKvQgpgFgigNQgigKgdgRQhQgtgrhQIgBAAIgHgPQgIgOgGgPQgihcgXhlQgXhngThrQgThogPhvQgIgugHgxIgcjcQgOhwgLhyQAcBgA1BIQAkAyAiA0QAZAmAVAsQAhBHAdBLQgDAbALAZIABABQATAjASAcIAAgBQgGgKAGAEQAFAMAAAJQgBgDgCAMQgGAhAEAnQAAAEgCADQAJA1AoAeQgCA/AZAjQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQADARABALQgEAKAEAIQgDAHADAHQgCAEACAEQgCAPADAWQACAJACAEQgEAWAJAZQAJAYAMATQgDAwAVAmIABAAQADAPAJAJQAAAaAGAdQAGAcAEAdQADAPAHAMQAIANAPAFQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgHAAg");
	this.shape.setTransform(-77.969,33.7281);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,153,0.2)").s().p("ADuKvQgpgFgigNIgygcIgHgEQhEg5g9g/IgBAAIgHgPQgEgTgFgQQgehggWhnIgrjPIgrjOQgIgugHgxIgcjcQgOhwgLhyQAcBgA1BIQAkAyAiA0QAZAmAVAsQAhBHAdBLQgDAbALAZIABABQATAjASAcIAAgBQgGgKAGAEQAFAMAAAJQgBgDgCAMQgGAhAEAnQAAAEgCADQAJA1AoAeQgCA/AZAjQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQADARABALQgEAKAEAIQgDAHADAHQgCAEACAEQgCAPADAWQACAJACAEQgEAWAJAZQAJAYAMATQgDAwAVAmIABAAQADAPAJAJQAAAaAGAdQAGAcAEAdQADAPAHAMQAIANAPAFQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgHAAg");
	this.shape_1.setTransform(-77.969,33.7281);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A61A1D").s().p("AA7EnQgihcgXhlQgVhmgUhrQgThpgOhvIAqDPIAqDOQAWBnAfBgQAFAQADATQgIgOgGgPg");
	this.shape_2.setTransform(-88.525,51.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A71A1C").s().p("AAeAxQhOgtgthPQA/A/BDA4IAHAEIAyAcQgjgKgdgRg");
	this.shape_3.setTransform(-71.025,93.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,153,0.8)").s().p("ADuKvQgpgFgigNIgygcIgHgEQhEg5g9g/IgBAAIgHgPQgEgTgFgQQgehggWhnIgrjPIgrjOQgIgugHgxIgcjcQgOhwgLhyQAcBgA1BIQAkAyAiA0QAZAmAVAsQAhBHAdBLQgDAbALAZIABABQATAjASAcIAAgBQgGgKAGAEQAFAMAAAJQgBgDgCAMQgGAhAEAnQAAAEgCADQAJA1AoAeQgCA/AZAjQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQADARABALQgEAKAEAIQgDAHADAHQgCAEACAEQgCAPADAWQACAJACAEQgEAWAJAZQAJAYAMATQgDAwAVAmIABAAQADAPAJAJQAAAaAGAdQAGAcAEAdQADAPAHAMQAIANAPAFQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgHAAg");
	this.shape_4.setTransform(-77.969,33.7281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.7,-35,49.5,137.5);


// stage content:
(lib.КартаКофемашины = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_6
	this.instance = new lib.бакотходов_1();
	this.instance.setTransform(191.15,-177.25,0.8672,1.3214,0,0,0,0.1,-0.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.instance_1 = new lib.выпускнойагрегат_1();
	this.instance_1.setTransform(133.7,275.7,1.4659,1.3692);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.поднос_1();
	this.instance_2.setTransform(136.5,400.7,1.6278,1.3559);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой_4
	this.instance_3 = new lib.шейкер_1();
	this.instance_3.setTransform(34.85,283.75,0.9445,1.372,0,0,0,11.5,6.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой_3
	this.instance_4 = new lib.бакводы_1();
	this.instance_4.setTransform(123.15,274);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой_5
	this.instance_5 = new lib.корпус_1();
	this.instance_5.setTransform(141.95,164.15,1.5689,1.3876,0,0,0,0.5,-44.8);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// BG
	this.instance_6 = new lib.frontSide();
	this.instance_6.setTransform(0,-22,0.5199,0.4299);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(40.5,203,352.8,325.29999999999995);
// library properties:
lib.properties = {
	id: 'B3CB0619F6256740A89488380403870A',
	width: 300,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/КартаКофемашины_atlas_1.png?1740923063109", id:"КартаКофемашины_atlas_1"},
		{src:"sounds/бакводы_.mp3?1740923063143", id:"бакводы"},
		{src:"sounds/бакотходов_.mp3?1740923063143", id:"бакотходов"},
		{src:"sounds/выпускнойагрегат_.mp3?1740923063143", id:"выпускнойагрегат"},
		{src:"sounds/корпус_.mp3?1740923063143", id:"корпус"},
		{src:"sounds/поднос_.mp3?1740923063143", id:"поднос"},
		{src:"sounds/шейкер_.mp3?1740923063143", id:"шейкер"}
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
an.compositions['B3CB0619F6256740A89488380403870A'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;