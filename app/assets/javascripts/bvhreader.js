var bvhlabs;
(function (bvhlabs) {
    var ToRad = Math.PI / 180;
    function flatten(node, list) {
        list.push(node);
        for (var i = 0; i < node.children.length; ++i) {
            flatten(node.children[i], list);
        }
        return list;
    }
    function distanceTest(p1, p2) {
        var x = p2.x - p1.x;
        var y = p2.y - p1.y;
        var z = p2.z - p1.z;
        var d = Math.sqrt(x * x + y * y + z * z);
        if (d <= 0)
            d = 0.1;
        return d;
    }
    function transposeName(name) {
        if (name === "hip" || name === "SpineBase")
            name = "Hips";
        if (name === "abdomen" || name === "SpineBase2")
            name = "Spine1";
        if (name === "chest" || name === "SpineMid")
            name = "Chest";
        if (name === "neck" || name === "Neck2")
            name = "Neck";
        if (name === "head")
            name = "Head";
        if (name === "lCollar")
            name = "LeftCollar";
        if (name === "rCollar")
            name = "RightCollar";
        if (name === "lShldr")
            name = "LeftUpArm";
        if (name === "rShldr")
            name = "RightUpArm";
        if (name === "lForeArm")
            name = "LeftLowArm";
        if (name === "rForeArm")
            name = "RightLowArm";
        if (name === "lHand")
            name = "LeftHand";
        if (name === "rHand")
            name = "RightHand";
        if (name === "lFoot")
            name = "LeftFoot";
        if (name === "rFoot")
            name = "RightFoot";
        if (name === "lThigh")
            name = "LeftUpLeg";
        if (name === "rThigh")
            name = "RightUpLeg";
        if (name === "lShin")
            name = "LeftLowLeg";
        if (name === "rShin")
            name = "RightLowLeg";
        // leg
        if (name === "RightHip" || name === "HipRight")
            name = "RightUpLeg";
        if (name === "LeftHip" || name === "HipLeft")
            name = "LeftUpLeg";
        if (name === "RightKnee" || name === "KneeRight")
            name = "RightLowLeg";
        if (name === "LeftKnee" || name === "KneeLeft")
            name = "LeftLowLeg";
        if (name === "RightAnkle" || name === "AnkleRight")
            name = "RightFoot";
        if (name === "LeftAnkle" || name === "AnkleLeft")
            name = "LeftFoot";
        // arm
        if (name === "RightShoulder" || name === "ShoulderRight")
            name = "RightUpArm";
        if (name === "LeftShoulder" || name === "ShoulderLeft")
            name = "LeftUpArm";
        if (name === "RightElbow" || name === "ElbowRight")
            name = "RightLowArm";
        if (name === "LeftElbow" || name === "ElBowLeft")
            name = "LeftLowArm";
        if (name === "RightWrist" || name === "WristRight")
            name = "RightHand";
        if (name === "LeftWrist" || name === "WristLeft")
            name = "LeftHand";
        if (name === "rcollar" || name === "CollarRight")
            name = "RightCollar";
        if (name === "lcollar" || name === "CollarLeft")
            name = "LeftCollar";
        if (name === "rtoes")
            name = "RightToe";
        if (name === "ltoes")
            name = "LeftToe";
        if (name === "upperback")
            name = "Spine1";
        return name;
    }
    var BVHData = (function () {
        function BVHData() {
            this.channels = [];
            this.numFrames = 0;
            this.secsPerFrame = 0;
        }
        Object.defineProperty(BVHData.prototype, "seconds", {
            get: function () {
                return this.numFrames * this.secsPerFrame;
            },
            enumerable: true,
            configurable: true
        });
        BVHData.prototype.getDebugTell = function () {
            return "BVHData frame:" + this.numFrames
                + " s/f:" + this.secsPerFrame
                + " channels:" + this.channels.length
                + " node:" + this.nodes.length;
        };
        BVHData.prototype.getDistanceList = function () {
            var distances = {};
            var n = this.nodes.length;
            while (n--) {
                var node = this.nodes[n];
                var name_1 = node.name;
                if (node.children.length) {
                    distances[name_1] = distanceTest(new THREE.Vector3().setFromMatrixPosition(node.matrixWorld), node.children[0].position);
                }
                else {
                    distances[name_1] = 2;
                }
            }
            return distances;
        };
        BVHData.prototype.getNodeList = function () {
            var n = this.nodes.length;
            var s = "";
            var Nodes = {};
            var ParentNodes = {};
            var ChildNodes = {};
            for (var i = 0; i < n; i++) {
                var node = this.nodes[i];
                var name_2 = node.name;
                Nodes[name_2] = node;
                if (node.parent) {
                    ParentNodes[name_2] = node.parent;
                }
                else {
                    ParentNodes[name_2] = null;
                }
                if (node.children.length) {
                    ChildNodes[name_2] = node.children[0];
                }
                else {
                    ChildNodes[name_2] = null;
                }
                s += node.name + " _ " + i + "<br>"; //+" _ "+node.parent.name +" _ "+node.children[0].name+"<br>";
            }
            return s;
        };
        return BVHData;
    })();
    bvhlabs.BVHData = BVHData;
    var BVHPlayer = (function () {
        function BVHPlayer(bvh) {
            this.speed = 1;
            this.lastTime = 0;
            this.currentTime = 0;
            this.play = false;
            this.loop = true;
            this.bvh = bvh;
        }
        Object.defineProperty(BVHPlayer.prototype, "frame", {
            get: function () {
                return Math.floor(this.currentTime / this.bvh.secsPerFrame) - 1;
            },
            set: function (currentframe) {
                this.currentTime = currentframe * this.bvh.secsPerFrame;
                this.lastTime = Date.now();
            },
            enumerable: true,
            configurable: true
        });
        BVHPlayer.prototype.start = function () {
            console.log('start');
            this.lastTime = Date.now();
            this.play = true;
        };
        BVHPlayer.prototype.stop = function () {
            console.log('stop');
            this.play = false;
        };
        BVHPlayer.prototype.next = function () {
            this.currentTime += this.bvh.secsPerFrame;
            this.animate();
        };
        BVHPlayer.prototype.prev = function () {
            this.currentTime -= this.bvh.secsPerFrame;
            this.animate();
        };
        BVHPlayer.prototype.update = function () {
            var now = this.play ? Date.now() : this.lastTime;
            var deltams = now - this.lastTime;
            this.currentTime += deltams / 1000 * this.speed;
            this.lastTime = now;
            if (this.frame >= this.bvh.numFrames) {
                if (this.loop) {
                    while (this.currentTime > this.bvh.seconds) {
                        this.currentTime -= this.bvh.seconds;
                    }
                }
                else {
                    this.play = false;
                    this.currentTime = this.bvh.seconds;
                }
            }
            this.animate();
        };
        BVHPlayer.prototype.animate = function () {
            var n = this.frame % this.bvh.numFrames * this.bvh.channels.length;
            var isRoot = false;
            var tmpOrder = "";
            var tmpAngle = [];
            for (var i = 0, len = this.bvh.channels.length; i < len; i++) {
                var ch = this.bvh.channels[i];
                if (ch.node.name === "Hips") {
                    isRoot = true;
                }
                else {
                    isRoot = false;
                }
                var autoDetectRotation = function (Obj, Axe, Angle) {
                    // order
                    tmpOrder += Axe;
                    // radians
                    var angle = Angle * ToRad;
                    // xyz angle
                    if (Axe === "X")
                        tmpAngle[0] = angle;
                    else if (Axe === "Y")
                        tmpAngle[1] = angle;
                    else
                        tmpAngle[2] = angle;
                    if (tmpOrder.length === 3) {
                        // 3軸揃った
                        var e = new THREE.Euler(tmpAngle[0], tmpAngle[1], tmpAngle[2], tmpOrder);
                        //this.order[Obj.name] = this.tmpOrder;
                        Obj.setRotationFromEuler(e);
                        Obj.updateMatrixWorld(true);
                        tmpOrder = "";
                        tmpAngle.length = 0;
                    }
                };
                switch (ch.prop) {
                    case 'Xrotation':
                        autoDetectRotation(ch.node, "X", parseFloat(this.bvh.FrameData[n]));
                        //ch.node.rotation.x = (parseFloat(this.bvh.FrameData[n])) * BVHData.TO_RAD;
                        break;
                    case 'Yrotation':
                        autoDetectRotation(ch.node, "Y", parseFloat(this.bvh.FrameData[n]));
                        //ch.node.rotation.y = (parseFloat(this.bvh.FrameData[n])) * BVHData.TO_RAD;
                        break;
                    case 'Zrotation':
                        autoDetectRotation(ch.node, "Z", parseFloat(this.bvh.FrameData[n]));
                        //ch.node.rotation.z = (parseFloat(this.bvh.FrameData[n])) * BVHData.TO_RAD;
                        break;
                    case 'Xposition':
                        if (isRoot)
                            ch.node.position.x = ch.node.offset.x + parseFloat(this.bvh.FrameData[n]);
                        else
                            ch.node.position.x = ch.node.offset.x + parseFloat(this.bvh.FrameData[n]);
                        break;
                    case 'Yposition':
                        if (isRoot)
                            ch.node.position.y = ch.node.offset.y + parseFloat(this.bvh.FrameData[n]);
                        else
                            ch.node.position.y = ch.node.offset.y + parseFloat(this.bvh.FrameData[n]);
                        break;
                    case 'Zposition':
                        if (isRoot)
                            ch.node.position.z = ch.node.offset.z + parseFloat(this.bvh.FrameData[n]);
                        else
                            ch.node.position.z = ch.node.offset.z + parseFloat(this.bvh.FrameData[n]);
                        break;
                }
                n++;
            }
        };
        return BVHPlayer;
    })();
    bvhlabs.BVHPlayer = BVHPlayer;
    var BVHReader = (function () {
        function BVHReader() {
        }
        BVHReader.prototype.load = function (url, callback) {
            var _this = this;
            if (typeof url === 'string') {
                var loader = new THREE.XHRLoader(THREE.DefaultLoadingManager);
                //loader.setCrossOrigin( this.crossOrigin );
                //loader.setWithCredentials( this.withCredentials );
                loader.load(url, function (text) {
                    var bvh = _this.parseData(text.split(/\s+/g));
                    callback(bvh);
                }, function (progress) {
                }, function (error) {
                });
            }
            else {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var text = e.target.result;
                    var bvh = _this.parseData(text.split(/\s+/g));
                    callback(bvh);
                };
                reader.readAsText(url);
            }
        };
        BVHReader.prototype.parseData = function (data) {
            var bvh = new BVHData();
            var done = false;
            while (!done) {
                switch (data.shift()) {
                    case 'ROOT':
                        // parse skeleton hierarchy
                        bvh.Root = this.parseNode(data, bvh.channels);
                        bvh.nodes = flatten(bvh.Root, []);
                        break;
                    case 'MOTION':
                        // parse frame data
                        data.shift(); // Frames:
                        bvh.numFrames = parseInt(data.shift());
                        data.shift(); // Frame 
                        data.shift(); // Time:
                        bvh.secsPerFrame = parseFloat(data.shift());
                        bvh.FrameData = data;
                        done = true;
                }
            }
            return bvh;
        };
        BVHReader.prototype.parseNode = function (data, channels) {
            var name = transposeName(data.shift());
            var node = new THREE.Group();
            node.name = name;
            var done = false;
            while (!done) {
                var t = data.shift();
                switch (t) {
                    case 'OFFSET':
                        node.position.set(parseFloat(data.shift()), parseFloat(data.shift()), parseFloat(data.shift()));
                        node.offset = node.position.clone();
                        break;
                    case 'CHANNELS':
                        var n = parseInt(data.shift());
                        for (var i = 0; 0 <= n ? i < n : i > n; 0 <= n ? i++ : i--) {
                            channels.push({ node: node, prop: data.shift() });
                        }
                        break;
                    case 'JOINT':
                    case 'End':
                        node.add(this.parseNode(data, channels));
                        break;
                    case '}':
                        done = true;
                }
            }
            return node;
        };
        return BVHReader;
    })();
    bvhlabs.BVHReader = BVHReader;
})(bvhlabs || (bvhlabs = {}));

