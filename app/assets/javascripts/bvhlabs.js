/// <reference path='../../../../typings/tsd.d.ts' />
var bvhlabs;
(function (bvhlabs) {
    var ToRad = Math.PI / 180;
    //const ToDeg = 180 / Math.PI;
    //var BVH_FILE = '/assets/gestures/18/Down.bvh'
    var BVH_FILE;
    var Renderer = (function () {
        function Renderer() {
            this.bones = [];
            this.boneSize = 0.4;
            this.nodesMesh = [];
        }
        Renderer.prototype.init = function ($container) {
            console.log("bvhinit");
            this.$container = $container;
            BVH_FILE = this.$container.attr('data-src');
            $container.width(500)
            $container.height(500)
            this.$currentframe = $('#currentframe');
            this.$out1 = $('#ou1');
            this.$out2 = $('#out2');
            this.$debug = $('#debug');
            $('#files')
                .change(null, this.handleFileSelect.bind(this));
            var $slider = $('#slider');
            noUiSlider.create($slider[0], {
                start: [0],
                range: {
                    'min': [0],
                    'max': [100]
                }
            });
            this.slider = $slider[0].noUiSlider;
            this.$playpause = $('#play_pause')
                .click(this.onClickPlayPause.bind(this));
            this.$looptoggle = $('#loop_toggle')
                .click(this.onClickLoopToggle.bind(this));
            this.init3D($container);
            this.loadBVH(BVH_FILE);
            this.animate();
            console.log("bvhinitend");
        };
        Renderer.prototype.debugTell = function (s) {
            this.$debug.html(s);
        };
        Renderer.prototype.handleFileSelect = function (evt) {
            var file = evt.target.files[0];
            this.loadBVH(file);
        };
        Renderer.prototype.init3D = function ($container) {
            // renderer
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize($container.width(), $container.height());
            this.renderer.autoClear = false;
            this.renderer.shadowMap.enabled = true;
            this.renderer.gammaInput = true;
            this.renderer.gammaOutput = true;
            $container.append(this.renderer.domElement);
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(50, $container.width() / $container.height(), 1, 3000);
            this.camera.position.z = 200;
            this.camera.position.y = 200;
            this.controls = new THREE.TrackballControls(this.camera, $container[0]);
            this.controls.rotateSpeed = 1.0;
            this.controls.zoomSpeed = 1.2;
            this.controls.panSpeed = 0.8;
            this.controls.noZoom = false;
            this.controls.noPan = false;
            this.controls.staticMoving = true;
            this.controls.dynamicDampingFactor = 0.3;
            this.controls.keys = [65, 83, 68];
            this.controls.target = new THREE.Vector3(0, 120, 0);
            this.controls.update();
            // light
            this.scene.add(new THREE.AmbientLight(0x505050));
            // grid
            var grid = new THREE.GridHelper(500, 50);
            grid.setColors(0x909090, 0x606060);
            this.scene.add(grid);
        };
        Renderer.prototype.animate = function () {
            var _this = this;
            requestAnimationFrame(function () { return _this.animate(); });
            this.controls.update();
            if (this.bvhplayer) {
                this.bvhplayer.update();
                this.updateSkeleton(this.bvhplayer.bvh);
                if (this.bvhplayer.play) {
                    //console.log(this.bvhplayer.frame, this.bvhplayer.bvh.numFrames);
                    var frame = this.bvhplayer.frame % this.bvhplayer.bvh.numFrames;
                    this.slider.set(frame);
                }
                else {
                    var n = this.slider.get();
                    if (typeof n === 'number') {
                        this.bvhplayer.frame = n;
                    }
                    else {
                        this.bvhplayer.frame = n[0];
                    }
                }
                this.$currentframe.text(this.bvhplayer.currentTime.toFixed(2));
            }
            else {
                if (this.slider) {
                    this.slider.set(0);
                    this.$currentframe.text('0');
                }
            }
            this.render();
        };
        Renderer.prototype.render = function () {
            //this.renderer.clear();    
            this.renderer.render(this.scene, this.camera);
        };
        Renderer.prototype.resize = function () {
            var w = this.$container.width();
            var h = this.$container.height();
            this.camera.aspect = w / h;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(w, h);
        };
        //
        // BVH
        //
        Renderer.prototype.onLoadBVH = function (data) {
            this.bvhplayer = new bvhlabs.BVHPlayer(data);
            if (this.slider) {
                this.slider.destroy();
            }
            // noUiSlider
            var $slider = $('#slider');
            noUiSlider.create($slider[0], {
                start: [0],
                range: {
                    'min': 0,
                    'max': data.numFrames
                },
                animate: false
            });
            this.slider = $slider[0].noUiSlider;
            $('#totalframe').text(data.seconds.toFixed(2));
            var speed = 1.0;
            this.bvhplayer.speed = speed;
            this.addSkeleton(data);
            this.$out2.html(data.getNodeList());
            this.distances = data.getDistanceList();
            this.debugTell(data.getDebugTell());
            this.stop();
            this.setDisableLoop();
        };
        Renderer.prototype.start = function () {
            this.bvhplayer.start();
            this.$playpause
                .removeClass('fa-play')
                .addClass('fa-pause');
        };
        Renderer.prototype.stop = function () {
            this.bvhplayer.stop();
            this.$playpause
                .removeClass('fa-pause')
                .addClass('fa-play');
        };
        Renderer.prototype.onClickPlayPause = function (e) {
            if (this.bvhplayer.play) {
                this.stop();
            }
            else {
                this.start();
            }
        };
        //
        // loop
        //
        Renderer.prototype.setEnableLoop = function () {
            console.log('setEnableLoop');
            this.bvhplayer.loop = true;
            this.$looptoggle
                .removeClass('fa-arrow-right')
                .addClass('fa-repeat');
        };
        Renderer.prototype.setDisableLoop = function () {
            console.log('setDisableLoop');
            this.bvhplayer.loop = false;
            this.$looptoggle
                .removeClass('fa-repeat')
                .addClass('fa-arrow-right');
        };
        Renderer.prototype.onClickLoopToggle = function (e) {
            if (this.bvhplayer.loop) {
                this.setDisableLoop();
            }
            else {
                this.setEnableLoop();
            }
        };
        Renderer.prototype.loadBVH = function (file) {
            this.clearSkeleton();
            console.log('loadBVH: %s', file);
            var reader = new bvhlabs.BVHReader();
            reader.load(file, this.onLoadBVH.bind(this));
        };
        //
        // Skeleton from BVH
        //
        Renderer.prototype.addSkeleton = function (bvh) {
            this.skeleton = new THREE.Group();
            this.bones = [];
            this.nodesMesh = [];
            var nodegeo = new THREE.BufferGeometry().fromGeometry(new THREE.SphereGeometry(0.4, 8, 6));
            var nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x88ff88 });
            var boxgeo = new THREE.BufferGeometry().fromGeometry(new THREE.BoxGeometry(1.5, 1.5, 1));
            boxgeo.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0.5));
            var boneMaterial = new THREE.MeshBasicMaterial({ color: 0xffff44 });
            var n = bvh.nodes.length;
            for (var i = 0; i < n; i++) {
                var node = bvh.nodes[i];
                this.nodesMesh[i] = new THREE.Mesh(nodegeo, nodeMaterial);
                this.skeleton.add(this.nodesMesh[i]);
                if (node.name !== 'Site') {
                    var bone = new THREE.Mesh(boxgeo, boneMaterial);
                    bone.castShadow = true;
                    bone.receiveShadow = true;
                    bone.rotation.order = 'XYZ';
                    bone.name = node.name;
                    this.skeleton.add(bone);
                    this.bones[i] = bone;
                }
            }
            this.scene.add(this.skeleton);
        };
        Renderer.prototype.clearSkeleton = function () {
            if (!this.skeleton) {
                return;
            }
            console.log('clear skeleton');
            var n = this.skeleton.children.length;
            while (n--) {
                this.skeleton.remove(this.skeleton.children[n]);
            }
            this.scene.remove(this.skeleton);
            this.skeleton = null;
        };
        Renderer.prototype.updateSkeleton = function (bvh) {
            var n = bvh.nodes.length;
            for (var i = 0; i < n; i++) {
                var node = bvh.nodes[i];
                var bone = this.bones[i];
                var name_1 = node.name;
                var mtx = node.matrixWorld;
                this.nodesMesh[i].position.setFromMatrixPosition(mtx);
                if (name_1 !== 'Site') {
                    bone.position.setFromMatrixPosition(mtx);
                    if (node.children.length) {
                        var target = new THREE.Vector3().setFromMatrixPosition(node.children[0].matrixWorld);
                        bone.lookAt(target);
                        bone.rotation.z = 0;
                        if (name_1 === 'Head')
                            bone.scale.set(this.boneSize * 2, this.boneSize * 2, this.distances[name_1] * (this.boneSize * 1.5));
                        else
                            bone.scale.set(this.boneSize, this.boneSize, this.distances[name_1]);
                    }
                }
            }
        };
        return Renderer;
    })();
    var renderer = new Renderer();
    function init($container) {
        // mouse cursor
        $container.css({ cursor: 'pointer' });
        $container
            .mousedown(function (event) {
            switch (event.button) {
                case 0:
                    $(this).css({ cursor: 'pointer' });
                    break;
                case 1:
                    $(this).css({ cursor: 'n-resize' });
                    break;
                case 2:
                    $(this).css({ cursor: 'move' });
                    break;
            }
        })
            .mouseup(function (event) {
            $(this).css({ cursor: 'pointer' });
        });
        window.addEventListener('resize', renderer.resize.bind(renderer), false);
        renderer.init($container);
    }
    bvhlabs.init = init;
})(bvhlabs || (bvhlabs = {}));

