/**
 * web_layout.js - v1.0.0 (2016-07-12T18:15:51+0800)
 *
 * Allows you to easily page layout!
 * by tie. qq：2185987263
 *
 * Copyright (C) 2016, tie.
 * All rights reserved.
 *
 **/

var web_layout = {

	zoom: {
		_o_w: 0,
		_o_h: 0,
		_n_w: 0,
		_n_h: 0
	},

	draw: function(d) {
		var self = this;
		var n = d.length;
		if (n > 0) {
			for (var i = 0; i < n; i++) {
				self.config(
				d[i].w, d[i].h, {
					id: d[i].id,
					w: d[i].zoom_w,
					h: d[i].zoom_h,
					x: d[i].x,
					y: d[i].y,
					layer: d[i].layer,
					position: d[i].position,
					opacity: d[i].opacity,
					fn: d[i].fn
				});
				var nn = d[i].subobject.length;
				if (nn > 0) {
					for (var j = 0; j < nn; j++) {
						self.set(
						d[i].subobject[j].w, d[i].subobject[j].h, {
							id: d[i].subobject[j].id,
							x: d[i].subobject[j].x,
							y: d[i].subobject[j].y,
							layer: d[i].subobject[j].layer,
							position: d[i].subobject[j].position,
							opacity: d[i].subobject[j].opacity,
							fn: d[i].subobject[j].fn
						});
					}
				}
			}
		}
	},

	config: function(w, h, v) {

		var self = this;

		if ("object" != typeof v || isNaN(w) || isNaN(h)) {
			return;
		}

		var _w = _h = 0;

		isNaN(v.w) || isNaN(v.h) || (_w = v.w, _h = v.h);
		isNaN(v.w) && !isNaN(v.h) && (_w = w / (h / h / (w / w / (h / v.h))), _h = v.h);
		isNaN(v.h) && !isNaN(v.w) && (_w = v.w, _h = h / (w / v.w));

		self.zoom._o_w = w, self.zoom._o_h = h, self.zoom._n_w = _w, self.zoom._n_h = _h;

		if ("undefined" == typeof v.id) {
			return;
		}
		var Object = document.getElementById(v.id);
		if ("object" != typeof Object) {
			return;
		}

		(0 != _w && (Object.style.width = _w + "px"), 0 != _h && (Object.style.height = _h + "px"), self.xy(v, Object, w, h, _w, _h),

		"function" == typeof v.fn && v.fn(Object));

	},

	xy: function(v, Object, w, h, _w, _h) {

		if ("undefined" != typeof v.position) {
			Object.style.position = v.position;
		}

		if (!isNaN(v.opacity)) {
			Object.style.opacity = v.opacity;
		}

		if (!isNaN(v.layer)) {
			Object.style.zIndex = v.layer;
		}

		if (!isNaN(v.x)) {
			if (!isNaN(_w) && !isNaN(w)) {
				Object.style.left = v.x / (w / _w) + "px";
			}
		}

		if (!isNaN(v.y)) {
			if (!isNaN(_h) && !isNaN(h)) {
				Object.style.top = v.y / (h / _h) + "px";
			}
		}
	},

	set: function(w, h, v) {

		var self = this;

		if ("object" != typeof v || isNaN(self.zoom._n_w) || isNaN(self.zoom._n_h)) {
			return;
		}
		var _w = w / (this.zoom._o_w / self.zoom._n_w),
			_h = h / (this.zoom._o_h / self.zoom._n_h);
		if ("undefined" == typeof v.id) {
			return;
		}
		var Object = document.getElementById(v.id);
		if ("object" != typeof Object) {
			return;
		}

		var __w, __h;
		!isNaN(w) ? __w = _w + "px" : __w = w;
		!isNaN(h) ? __h = _h + "px" : __h = h;

		(Object.style.width = __w, Object.style.height = __h, this.xy(v, Object, w, h, _w, _h),

		"function" == typeof v.fn && v.fn(Object));

	}
}









/*

  示例

*/


function a(){
	return [
		{
			"id":"canvas1","w":640,"h":1136,"zoom_w":document.body.clientWidth,"x":0,"y":0,"layer":1,"position":"absolute","subobject":[
				{ "id":"demo_div", "w":191, "h":191, "x":328, "y":332, "layer":2, "position":"absolute" }
			]
		},
		{
			"id":"canvas2","w":146,"h":150,"zoom_w":document.body.clientWidth/2,"x":80,"y":300,"layer":3,"position":"absolute","subobject":[
				{ "id":"circle1","w":53,"h":53,"x":100,"y":377,"layer":4,"position":"absolute","opacity":0.55 },
				{ "id":"circle2","w":50,"h":50,"x":112,"y":389,"layer":4,"position":"absolute","opacity":0.60 },
				{ "id":"circle3","w":48,"h":48,"x":127,"y":399,"layer":4,"position":"absolute","opacity":0.75 },
				{ "id":"circle4","w":45,"h":45,"x":142,"y":404,"layer":4,"position":"absolute","opacity":0.80 },
				{ "id":"circle5","w":43,"h":43,"x":158,"y":405,"layer":4,"position":"absolute","opacity":0.75 },
				{ "id":"circle6","w":41,"h":41,"x":173,"y":402,"layer":4,"position":"absolute","opacity":0.70 },
				{ "id":"circle7","w":39,"h":39,"x":187,"y":396,"layer":4,"position":"absolute","opacity":0.65 },
				{ "id":"circle8","w":37,"h":37,"x":199,"y":386,"layer":4,"position":"absolute","opacity":0.60 },
				{ "id":"circle9","w":35,"h":35,"x":207,"y":374,"layer":4,"position":"absolute","opacity":0.55 },
				{ "id":"circle10","w":33,"h":33,"x":212,"y":361,"layer":4,"position":"absolute","opacity":0.50 },
				{ "id":"circle11","w":32,"h":32,"x":213,"y":347,"layer":4,"position":"absolute","opacity":0.45 },
				{ "id":"circle12","w":30,"h":30,"x":209,"y":333,"layer":4,"position":"absolute","opacity":0.40 },
				{ "id":"circle13","w":29,"h":29,"x":202,"y":321,"layer":4,"position":"absolute","opacity":0.35 },
				{ "id":"circle14","w":27,"h":27,"x":192,"y":311,"layer":4,"position":"absolute","opacity":0.30 },
				{ "id":"circle15","w":26,"h":26,"x":180,"y":304,"layer":4,"position":"absolute","opacity":0.25 },
				{ "id":"circle16","w":25,"h":25,"x":166,"y":300,"layer":4,"position":"absolute","opacity":0.20 },
				{ "id":"circle17","w":23,"h":23,"x":152,"y":301,"layer":4,"position":"absolute","opacity":0.15 }
			]
		}
	];
}



//页面加载结束后
window.onload=function(){

	//布局画布
	web_layout.draw(a());
	
	//页面大小改变后重新布局（可选）
	window.addEventListener("resize",function(){
		web_layout.draw(a());
	});

}
