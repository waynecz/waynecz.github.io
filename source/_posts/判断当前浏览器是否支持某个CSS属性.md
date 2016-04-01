title: 判断当前浏览器是否支持某个CSS属性
date: 2016-2-01 11:20:16
categories: Javascript
tags: [javascript,css3]
---
![](http://7xntdk.com1.z0.glb.clouddn.com/Rough%20Sea.jpg)

虽然一直在现在的项目中用css动画，但是虽然一直隐患的知道只支持现代浏览器，但一直没去仔细思考。


直接开始吧，先上几个 [CSS动画相关属性的兼容图](http://caniuse.com):

1.	`animation / keyframes` 浏览器支持情况 :
![animation浏览器支持情况](http://7xntdk.com1.z0.glb.clouddn.com/animation-caniuse.png)
<!-- more-->
2.	`transform 2D` 浏览器支持情况 :  	
 ![transform2D浏览器支持情况](http://7xntdk.com1.z0.glb.clouddn.com/transform2d-caniuse.png)
3.	`transform 3D / perspective` 浏览器支持情况 :  
  ![transform2D浏览器支持情况]( http://7xntdk.com1.z0.glb.clouddn.com/perspective-caniuse.png)
4.	`transition` 浏览器支持情况 :  
 ![transition 浏览器支持情况](http://7xntdk.com1.z0.glb.clouddn.com/transition-caniuse.png)

可以看到动画在IE8（*这里主要讨论IE*）及以下完全不支持，IE9由于只支持`transform`所以也和动画 **say goodbye** 了。
但是项目一定要兼容IE9，又不肯因为一个浏览器放弃整个罗马，怎么办？

![](http://7xntdk.com1.z0.glb.clouddn.com/depu.gif)  

优雅降级啊！所以就有了以下代码




		function isSupportThis(attrName) {
			var prefixs = ['webkit', 'Moz', 'ms', 'o'],
				i,
				humpString = [],
				htmlStyle = document.documentElement.style,
				_toHumb = function (string) {
					return string.replace(/-(\w)/g, function ($0, $1) {
						return $1.toUpperCase();
					});
				};
		 
			for (i in prefix)
				humpString.push(_toHumb(prefix[i] + '-' + style));
		 
			humpString.push(_toHumb(attrName));
		 
			for (i in humpString)
				if (humpString[i] in htmlStyle) return true;
		 
			return false;
		}
		
