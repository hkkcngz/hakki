/* BG SELECTOR by HC */
const removeElements = (elms) => elms.forEach(el => el.remove());

function postbgreset () {
	let singlePostContent = document.getElementById('single-post-content');
	singlePostContent.classList = "";

    // yapraktan kurtul
    const yaprak =  document.querySelector('falling-leaves'); 
    
        removeElements( document.querySelectorAll(".falling-leaves") );
}

function postbg01 () {
	let singlePostContent = document.getElementById('single-post-content');
	singlePostContent.classList = "";
    singlePostContent.classList.toggle('postbg01');

    // yapraktan kurtul
    const yaprak =  document.querySelector('falling-leaves'); 
    if ( yaprak ) {
        yaprak.classList.remove('falling-leaves');
    }
}
function postbg02 () {
	let singlePostContent = document.getElementById('single-post-content');
	singlePostContent.classList = "";
    singlePostContent.classList.toggle('postbg02');

    // yapraktan kurtul
    const yaprak =  document.querySelector('falling-leaves'); 
    if ( yaprak ) {
        yaprak.classList.remove('falling-leaves');
    }
}
function postbg03 () {
	let singlePostContent = document.getElementById('single-post-content');
	singlePostContent.classList = "";
    singlePostContent.classList.toggle('postbg03');

    // 
    let new_row = document.createElement('div');
    new_row.className = "falling-leaves";
    singlePostContent.appendChild(new_row);
}
function postbg04 () {
	let singlePostContent = document.getElementById('single-post-content');
	singlePostContent.classList = "";
    singlePostContent.classList.toggle('postbg04');

    // yapraktan kurtul
    const yaprak =  document.querySelector('falling-leaves'); 
    if ( yaprak ) {
        yaprak.classList.remove('falling-leaves');
    }
}



// BG02
var makeItRain = function () {
    //clear out everything
    let rain = document.querySelector('.rain');
    if ( rain ) {
        rain.innerHTML = '';
    }

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    let rainFront = document.querySelector('.rain.front-row');
    let rainBack = document.querySelector('.rain.back-row');
    if ( rain ) {
        rainFront.innerHTML = drops;
        rainBack.innerHTML = backDrops;
    }
}

makeItRain();

// BG03 Leaf by HC
var LeafScene = function (el) {
    this.viewport = el;
    this.world = document.createElement('div');
    this.leaves = [];

    this.options = {
        numLeaves: 20,
        wind: {
            magnitude: 1.2,
            maxSpeed: 6,
            duration: 300,
            start: 0,
            speed: 0
        },
    };

    this.width = this.viewport.offsetWidth;
    this.height = this.viewport.offsetHeight;

    // animation helper
    this.timer = 0;

    this._resetLeaf = function (leaf) {

        // place leaf towards the top left
        leaf.x = this.width * 2 - Math.random() * this.width * 1.75;
        leaf.y = -10;
        leaf.z = Math.random() * 200;
        if (leaf.x > this.width) {
            leaf.x = this.width + 10;
            leaf.y = Math.random() * this.height / 2;
        }
        // at the start, the leaf can be anywhere
        if (this.timer == 0) {
            leaf.y = Math.random() * this.height;
        }

        // Choose axis of rotation.
        // If axis is not X, chose a random static x-rotation for greater variability
        leaf.rotation.speed = Math.random() * 10;
        var randomAxis = Math.random();
        if (randomAxis > 0.5) {
            leaf.rotation.axis = 'X';
        } else if (randomAxis > 0.25) {
            leaf.rotation.axis = 'Y';
            leaf.rotation.x = Math.random() * 180 + 90;
        } else {
            leaf.rotation.axis = 'Z';
            leaf.rotation.x = Math.random() * 360 - 180;
            // looks weird if the rotation is too fast around this axis
            leaf.rotation.speed = Math.random() * 3;
        }

        // random speed
        leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
        leaf.ySpeed = Math.random() + 1.5;

        return leaf;
    }

    this._updateLeaf = function (leaf) {
        var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

        var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
        leaf.x -= xSpeed;
        leaf.y += leaf.ySpeed;
        leaf.rotation.value += leaf.rotation.speed;

        var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
        if (leaf.rotation.axis !== 'X') {
            t += ' rotateX(' + leaf.rotation.x + 'deg)';
        }
        leaf.el.style.webkitTransform = t;
        leaf.el.style.MozTransform = t;
        leaf.el.style.oTransform = t;
        leaf.el.style.transform = t;

        // reset if out of view
        if (leaf.x < -10 || leaf.y > this.height + 10) {
            this._resetLeaf(leaf);
        }
    }

    this._updateWind = function () {
        // wind follows a sine curve: asin(b*time + c) + a
        // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
        // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

        if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {

            this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
            this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
            this.options.wind.start = this.timer;

            var screenHeight = this.height;

            this.options.wind.speed = function (t, y) {
                // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
                var a = this.magnitude / 2 * (screenHeight - 2 * y / 3) / screenHeight;
                return a * Math.sin(2 * Math.PI / this.duration * t + (3 * Math.PI / 2)) + a;
            }
        }
    }
}

LeafScene.prototype.init = function () {

    for (var i = 0; i < this.options.numLeaves; i++) {
        var leaf = {
            el: document.createElement('div'),
            x: 0,
            y: 0,
            z: 0,
            rotation: {
                axis: 'X',
                value: 0,
                speed: 0,
                x: 0
            },
            xSpeedVariation: 0,
            ySpeed: 0,
            path: {
                type: 1,
                start: 0,

            },
            image: 1
        };
        this._resetLeaf(leaf);
        this.leaves.push(leaf);
        this.world.appendChild(leaf.el);
    }

    this.world.className = 'leaf-scene';
    this.viewport.appendChild(this.world);

    // set perspective
    this.world.style.webkitPerspective = "400px";
    this.world.style.MozPerspective = "400px";
    this.world.style.oPerspective = "400px";
    this.world.style.perspective = "400px";

    // reset window height/width on resize
    var self = this;
    window.onresize = function (event) {
        self.width = self.viewport.offsetWidth;
        self.height = self.viewport.offsetHeight;
    };
}

LeafScene.prototype.render = function () {
    this._updateWind();
    for (var i = 0; i < this.leaves.length; i++) {
        this._updateLeaf(this.leaves[i]);
    }

    this.timer++;

    requestAnimationFrame(this.render.bind(this));
}

// start up leaf scene
var leafContainer = document.querySelector('.falling-leaves');
if (leafContainer) {
    leaves = new LeafScene(leafContainer);

    leaves.init();
    leaves.render();
}