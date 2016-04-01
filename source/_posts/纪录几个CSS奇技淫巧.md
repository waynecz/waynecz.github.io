title: 自己几个常用的CSS片段,多为CSS3
date: 2016-1-25 15:10:36
categories: CSS
tags: [css3]
---
![叔叔](http://7xntdk.com1.z0.glb.clouddn.com/shushu.jpeg)

偶尔添加
--

1.	除去最后一个li的边框

		li:not(:last-child) {
			border: 1px solid black;
		 }
	浏览器支持情况：**IE9+**

<!-- more-->
2.	文字过长省略号显示			 
		
		p {
			width: 100px;
			text-overflow: clip;
			overflow: hidden;
			white-space: nowrap; /*强制不换行*/
		 }
	浏览器支持情况：**IE11都不支持！firefox加前缀**

3.	去浮动，撑开元素！

		.clearfix {
			*zoom: 1; /* 兼容IE*/
		 }
		 .clearfix:after {
			content: '\200B' ; /* 空字符*/
			display: block;
			height: 0;
			clear: both;
		 }
	浏览器支持情况：**allllllll**	  
4.	绝对居中

		.parent {
			position: relative; 
		  }
		 .child {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			height: 999px;
			/* 这个方案需要子容器有一个固定的高，或百分比自适应于外部。它的高度不能是height:auto*/
		 }	
