import{_ as e,o as i,c as n,a as s}from"./app-EaupiRXX.js";const d={},l=s(`<h3 id="进程与线程" tabindex="-1"><a class="header-anchor" href="#进程与线程"><span>进程与线程</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.进程是CPU资源分配的最小单位（是能拥有资源和独立运行的最小单位，进程之间不会共享资源）
2.线程是CPU调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程，多个线程之间共享进程的资源）
3.不同进程之间也可以通信，但是代价会比较大

总结
    1、浏览器是多进程的。
    2、js执行的主线程为JS引擎，并且无论何时都只有一个JS线程在运行，所以是单线程执行。
    3、GUI渲染线程和JS引擎线程是互斥的，并且JS会阻塞页面的加载和渲染。
    4、定时器(setInterval,setTimeout)会在定时器触发器线程中进行计时。
    5、定时触发器线程计时结束后需要执行的事件和异步HTTP请求线程的回调事件都会进入到事件触发线程的任务队列中等待JS引擎的执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器进程" tabindex="-1"><a class="header-anchor" href="#浏览器进程"><span>浏览器进程</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.浏览器是多进程
2.浏览器之所以能够运行，是因为系统给它的进程分配了资源（cpu、内存）
3.浏览器每新开一个页签，系统相当于创建了一个独立的进程

验证方式
    1、打开浏览器任务管理器，每打开新标签，就会增加一个进程。
    2、写一个死循环，当前页面死循环，其他页面不受影响。

浏览器有哪些进程
    1.浏览器进程(Browser进程)：浏览器的主进程(负责协调，主控)，只有一个
        1）负责浏览器的界面界面显示，与用户交互，网址栏输入、前进、后退等
        2）负责管理各个页面，创建和销毁进程
        3）将页面内容(位图)写入到浏览器内存中，最后将图像显示在屏幕上
        4）文件存储等功能

    2.渲染进程(浏览器内核，Renderer进程，内部是多线程的)：
        默认一个tab页面一个渲染进程(特殊情况下：渲染进程不一定每个tab就一个)，主要的作用为页面渲染，脚本执行，事件处理等

    3.GPU进程：
        用于3D绘制等，将开启了3D绘制的元素的渲染由CPU转向GPU，也就是开启GPU加速。最多一个

    4.网络进程：
        主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面，现在独立开来，成为一个单独的进程

    5.插件进程：
        每种类型的插件对应一个进程，仅当使用该插件时才创建

    6.音频进程：
        浏览器音频管理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器多进程的好处" tabindex="-1"><a class="header-anchor" href="#浏览器多进程的好处"><span>浏览器多进程的好处</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.避免单个页面崩溃影响整个浏览器
2.避免第三方插件崩溃时影响整个浏览器
3.多进程充分利用多核优势
4.方便使用沙盒模型隔离插件等进程，提高浏览器稳定性

整体来说就是利用空间换时间，牺牲内存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器线程" tabindex="-1"><a class="header-anchor" href="#浏览器线程"><span>浏览器线程</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>线程主要存在于渲染进程里面，也就是我们常说的浏览器内核里面，浏览器内核中的几种引擎便是我们的主要使用到的线程

1.GUI渲染线程
    1）负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制
    2）当界面需要重绘(Repaint)或由于某种操作引发回流(reflow)时，该线程就会执行
    3）与JS引擎互斥，当执行JS引擎线程时，GUI会pending，当任务队列空闲时，才会继续执行GUI

2.JS引擎线程
    1）也称为JS内核，负责处理javascript脚本程序
    2）JS引擎线程负责解析Javascript脚本，运行代码
    3）JS引擎一直等待任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行JS程序
    4）同样注意，GUI渲染线程与JS引擎线程时互斥的，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。

3.事件触发线程
    1）事件触发线程归属于浏览器而不是JS引擎(辅助JS引擎)，用来控制事件循环(存在一个事件队列)
    2）当JS引擎执行代码块如setTimeOut时(也可来自浏览器内核的其他线程，如鼠标点击，Ajax异步请求等)，会将对应的任务添加到事件线程中
    3）当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理
    4）注意，由于JS的单线程关系，所以这些待处理队列的事件都得排队等待JS引擎的处理(当JS引擎空闲时才会去执行)

4.定时触发器线程
    1）setInterval、setTimeOut所在线程
    2）浏览器定时计数器并不是由JavaScript引擎计数的，(因为JavaScript引擎时单线程的，如果处于阻塞线程状态就会影响计时的准确)
    3）因此通过单独线程来计时并触发(计时完毕后，添加到事件队列中，等待JS引擎空闲后执行)
    4）注意，W3C在HTML标准中规定要求setTimeOut中低于4ms的时间间隔为4ms

5.异步HTTP请求线程(IO线程)
    1）在XMLHttpRequest在连接后是通过浏览器新开一个线程请求
    2）将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中(放入事件触发线程中)。再由JavaScript引擎执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="render树" tabindex="-1"><a class="header-anchor" href="#render树"><span>render树</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>html解析:
    html解析包含有一系列的步骤，过程为Bytes -&gt; Characters -&gt; Tokens -&gt; Nodes -&gt; DOM。最终将html解析为DOM树。
    
css解析:
    与html解析类似，他解析最终形成CSSOM树，过程为Bytes -&gt; Characters -&gt; Tokens -&gt; Nodes -&gt; CSSOM。

由DOM树与CSS树结合形成的渲染树（其中无法显示的元素，如script，head元素或diplay：none的元素，不会在渲染树中，也就最终不会被渲染出来），页面的布局，绘制都是以render树为依据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回流与重绘" tabindex="-1"><a class="header-anchor" href="#回流与重绘"><span>回流与重绘</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>发生原因
    当页面的某部分元素发生了尺寸、位置、隐藏发生了改变，页面进行回流。
    得对整个页面重新进行布局计算，将所有尺寸，位置受到影响的元素回流。 
    当页面的某部分元素的外观发生了改变，但尺寸、位置、隐藏没有改变，页面进行重绘。（同样，只重绘部分元素，而不是整个页面重绘）

回流的同时往往会伴随着重绘，重绘不一定导致回流。回流导致的代价是大于重绘的。
重排重绘会造成浏览器耗时，卡顿等问题，所以不能频繁重复改变dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器页面渲染过程" tabindex="-1"><a class="header-anchor" href="#浏览器页面渲染过程"><span>浏览器页面渲染过程</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1. 解析html得到DOM树

2. 解析css得到CSS树

3. 合并得到render树

4. 布局，当页面有元素的尺寸、大小、隐藏有变化或增加、删除元素时，重新布局计算，并修改页面中所有受影响的部分

5. 绘制，当页面有元素的外观发生变化时，重新绘制

6. GUI线程将得到的各层的位图（每个元素对应一个普通图层）发送给Browser进程，由Browser进程将各层合并，渲染在页面上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css阻塞" tabindex="-1"><a class="header-anchor" href="#css阻塞"><span>css阻塞</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>正常情况下，css是会阻塞html的DOM树的渲染的

当css没有加载完成的时候，html其实已经加载解析完成了
但html并没有展现在浏览器上，它要等css加载完成，然后把样式给加上后才会进行渲染展示给用户。
如果css加载的时候不阻塞DOM树渲染，那么等html展示给用户的时候，
然后css加载完成添加样式，这时候html就会被重新渲染。

css的书写位置(无论写在哪里，CSS都能生效)
    1、网页文档是自上而下加载并解析，假设将style标签写在了&lt;/body&gt;的后面，在读取到style标签之前，整个网页文档已经渲染得差不多了
    2、这时候发现存在一个style标签，并且style标签针对网页中某些元素样式进行设置，浏览器只能重新为每个元素计算样式，再加载出来(重绘与回流)。
    3、所以不建议这样写，否则会导致网页的加载速度的变慢。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js阻塞" tabindex="-1"><a class="header-anchor" href="#js阻塞"><span>js阻塞</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>js阻塞问题是指当浏览器在解析文档或者渲染页面时，遇见了js代码，需要渲染引擎中断，而运行js引擎，从而阻塞浏览器原本的工作状态

1、script标签放在头部或者中间加载：由于需要加载js代码，所以会阻塞后面html的解析与加载
2、放在底部(body闭合之前)：此时由于DOM已经加载解析完了，浏览器可以专心地加载js代码

解决方法：
    1、通常我们会将script标签放在body闭合时的上方
    2、利用dom动态创建script标签
    3、将script标签放在头部，但是要加上async或者defer属性

async、defer区别
    1、共同点：可以让浏览器进行异步加载js代码，而不会出现js阻塞的情况
    2、区别：
        async：当js代码加载会之后会异步执行js代码；
        defer：当js代码加载完之后回等到dom解析完之后，在DocumentContentLoaded之前执行js代码，在一定程度上可以保证js代码加载的顺序。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),a=[l];function v(r,t){return i(),n("div",null,a)}const u=e(d,[["render",v],["__file","liulanqideyunxingjizhi.html.vue"]]),m=JSON.parse('{"path":"/blogs/interview/liulanqideyunxingjizhi.html","title":"浏览器的运行机制","lang":"zh-CN","frontmatter":{"title":"浏览器的运行机制","date":"2022-12-26T00:00:00.000Z","tags":["interview"],"categories":["interview","other"]},"headers":[{"level":3,"title":"进程与线程","slug":"进程与线程","link":"#进程与线程","children":[]},{"level":3,"title":"浏览器进程","slug":"浏览器进程","link":"#浏览器进程","children":[]},{"level":3,"title":"浏览器多进程的好处","slug":"浏览器多进程的好处","link":"#浏览器多进程的好处","children":[]},{"level":3,"title":"浏览器线程","slug":"浏览器线程","link":"#浏览器线程","children":[]},{"level":3,"title":"render树","slug":"render树","link":"#render树","children":[]},{"level":3,"title":"回流与重绘","slug":"回流与重绘","link":"#回流与重绘","children":[]},{"level":3,"title":"浏览器页面渲染过程","slug":"浏览器页面渲染过程","link":"#浏览器页面渲染过程","children":[]},{"level":3,"title":"css阻塞","slug":"css阻塞","link":"#css阻塞","children":[]},{"level":3,"title":"js阻塞","slug":"js阻塞","link":"#js阻塞","children":[]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"blogs/interview/浏览器的运行机制.md","readingTime":{"minutes":8.54,"words":2562}}');export{u as comp,m as data};
