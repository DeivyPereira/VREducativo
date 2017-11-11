!function (t) {
    function a(n) {
        if (e[n])return e[n].exports;
        var r = e[n] = {exports: {}, id: n, loaded: !1};
        return t[n].call(r.exports, r, r.exports, a), r.loaded = !0, r.exports
    }

    var e = {};
    return a.m = t, a.c = e, a.p = "", a(0)
}([function (t, a) {
    if ("undefined" == typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");

    AFRAME.registerComponent("randomcolor", {
        schema: {
            min: {"default": {x: 0, y: 0, z: 0}, type: "vec3"},
            max: {"default": {x: 1, y: 1, z: 1}, type: "vec3"}
        }, update: function () {
            var t = this.data, a = t.max, e = t.min;
            this.el.setAttribute("material", "color", "#" + new THREE.Color(Math.random() * a.x + e.x, Math.random() * a.y + e.y, Math.random() * a.z + e.z).getHexString())
        }
    }), AFRAME.registerComponent("random-position", {
        schema: {
            min: {"default": {x: -8, y: -8, z: -8}, type: "vec3"},
            max: {"default": {x: 8, y: 8, z: 8}, type: "vec3"}
        }, update: function () {
            var t = this.data, a = t.max, e = t.min;
            this.el.setAttribute("position", {
                x: Math.random() * (a.x - e.x) + e.x,
                y: Math.random() * (a.y - e.y) + e.y,
                z: Math.random() * (a.z - e.z) + e.z
            })
        }
    }), AFRAME.registerComponent("random-spherical-position", {
        schema: {
            radius: {"default": 10},
            startX: {"default": 0},
            lengthX: {"default": 360},
            startY: {"default": 0},
            lengthY: {"default": 360}
        }, update: function () {
            var t = this.data, a = THREE.Math.degToRad(Math.random() * t.lengthX + t.startX), e = THREE.Math.degToRad(Math.random() * t.lengthY + t.startY);
            this.el.setAttribute("position", {
                x: t.radius * Math.cos(a) * Math.sin(e),
                y: t.radius * Math.sin(a) * Math.sin(e),
                z: t.radius * Math.cos(e)
            })
        }
    }), AFRAME.registerComponent("random-rotation", {
        schema: {
            min: {"default": {x: 0, y: 0, z: 0}, type: "vec3"},
            max: {"default": {x: 120, y: 120, z: 120}, type: "vec3"}
        }, update: function () {
            var t = this.data, a = t.max, e = t.min;
            this.el.setAttribute("rotation", {
                x: Math.random() * a.x + e.x,
                y: Math.random() * a.y + e.y,
                z: Math.random() * a.z + e.z
            })
        }
    }), AFRAME.registerComponent("random-scale", {
        schema: {
            min: {"default": {x: 0, y: 0, z: 0}, type: "vec3"},
            max: {"default": {x: 5, y: 5, z: 5}, type: "vec3"}
        }, update: function () {
            var t = this.data, a = t.max, e = t.min;
            this.el.setAttribute("scale", {
                x: Math.random() * a.x + e.x,
                y: Math.random() * a.y + e.y,
                z: Math.random() * a.z + e.z
            })
        }
    }),
        
     
		AFRAME.registerComponent("randomnum", {
            schema: {
                min: {"default": {x: 0}},
                max: {"default": {x: 18}}
            }, update: function () {
                var t = this.data, a = t.max, e = t.min;
                var v = Math.floor(Math.random() * a.x + e.x);
                this.el.setAttribute('numeroazar', v);
                this.el.setAttribute("text-geometry", {
                    value: v
                })
            }
        }),
		  	 AFRAME.registerComponent("operacionm", {
             update: function () {
                 var numero1 = Math.floor(Math.random() * (9 - 0) + 0);
                 var numero2 = Math.floor(Math.random() * (9 - 0) + 0);
                 var azar = Math.floor(Math.random() * (7 - 1) + 1);
                 var result = Math.floor(numero1 + numero2);
                 var textop= numero1 +" + " + numero2 + " = ?";
				this.el.setAttribute("numeror", result);
                 this.el.setAttribute("text-geometry", {
                     value: textop
                 });
                var resultv =  document.querySelector('#posicion'+azar);
               //var resultv =  document.querySelector('#posicion4');
                 resultv.setAttribute("text-geometry", {
                     value: result
                 });
				 resultv.setAttribute('numeroazar', result);
				
            }
        })
		
	
}]);