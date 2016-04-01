title: 响应式设计下img标签如何设置才在移动端不下载图片
date: 2015-12-24 17:22:07
categories: CSS
tags: [css3, html, 移动端]
---
![西和垃圾角](http://7xntdk.com1.z0.glb.clouddn.com/xihelajijiao.jpg)

从前在一个页面中有一张很普通的图片，普通到像这个样子

	<img src="pic.jpg" alt="pic"/>  
	
然后想要这张图片在移动端(比如`max-device-width: 600px`)下的时候隐藏该图片，  
但是直接`display:none`的话发现浏览器还是会加载，这恐怕对于移动端寸KB寸金的资源来说是一场灾难。  

于是琢磨怎么把图片弄消失掉，秉着能少写就少写写的原则，首先想到`img`标签的`srcset`属性。

<!--more-->

关于`srcset`单个使用，简单的说就是**`让浏览器根据像素密度切换图片源`**，类似这个样子：

	<img src="1.jpg" srcset=" 2.jpg 2x, 3.jpg 3x"/>
	
浏览器默认选择`1.jpg`，但是当设备像素密度为2的时候比如nexus5加载`2.jpg`，咦？？！！！有没有想到什么？！！！现在移动端貌似都是高像素比啊！，那我岂不是可以这样！：

	
	<img src="pic.jpg" srcset="null.jpg 1.5x, null.jpg 2x, null.jpg 3x" alt="以此类推"/>
	
 `null.jpg`是一张并不存在的图片，也可以是一张1K的小图。啊哈哈天真的我真这样写进公司的官网里面去了～ 自测：完美；用别人手机电脑测试：完美！天啊噜，简单到窒
 
  
 ![](http://pic.baike.soso.com/p/20130609/bki-20130609135228-704795420.jpg)  
 
 红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈哈哈哈好！～～～～～个屁啊
 
 嗑嗑，年轻，你听说过苹果有5倍像素比的iMac吧，再听说下Dell的4K屏不错，听说。。。好吧，现在桌面端也早就步入了高清时代，so，这样做在这些设备里图片就是卖女孩的小火柴——全靠意淫。
 
 ![](http://2d.zol-img.com.cn/product/87/187/cekJDCv3RNGw2.gif )
 
好吧，东问西问思索后再三还是得用CSS解决［下面都是把图片作为`background-image`呈现，这也是我刚开始是想极力避免的，我觉得作为背景就是复杂了，大小控制也不那么简单粗暴（需要通过`background-size`）］在segmentfault提问之后得到这么一篇文章：**[Media Query & Asset Downloading Results](https://timkadlec.com/2012/04/media-query-asset-downloading-results/)**

里面很详细的测试了各种方案图片加载情况，我这里就不多废话了，直接上一个有效的方案

### 嵌套父元素，父元素设置为`diaplay:none`

我也叫它 **给一个爸爸，然后打死爸爸，就没有儿子了大法**
	
	<div class="par">
		<div class="pic"></div>
	</div>

	.pic {
    	background-image:url('images/test.png');
    	width:200px;
    	height:75px;
	}
	@media all and (max-width: 600px) {
    	.par  {
        	display:none;
    	}
	}
	
结果呢？嘿嘿，异常理想，除了Fennec (10.0+)［火狐开发的移动版本？］照例下载了图片之外，其他各种浏览器都只在大于`600px`的时候下载了图片，如果不闲套个容器麻烦的话，这是个很好的方案！

![棒呆](http://img0.imgtn.bdimg.com/it/u=235478332,2866600352&fm=11&gp=0.jpg)


最后感谢下**[鑫旭大神](http://img0.imgtn.bdimg.com/it/u=235478332,2866600352&fm=11&gp=0.jpg)** 和 **[回答过这个问题的大家](http://segmentfault.com/q/1010000004170311?_ea=521263)** 水平有限，有错误在所难免，请诸位多多包。

话说今天平安夜，圣诞快乐！！！！这篇是2015年第一也是最后一篇文章哈哈，明年再见～

![](http://7xntdk.com1.z0.glb.clouddn.com/shengdan.jpg)
	
