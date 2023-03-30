import{_ as n,p as a,q as s,Y as t}from"./framework-aa5c4115.js";const e={},i=t(`<h3 id="vue封装的过度与动画" tabindex="-1"><a class="header-anchor" href="#vue封装的过度与动画" aria-hidden="true">#</a> Vue封装的过度与动画</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名

写法：
1. 准备好样式：
   元素进入的样式：
     1. v-enter：进入的起点
     2. v-enter-active：进入过程中
     3. v-enter-to：进入的终点
   元素离开的样式：
     1. v-leave：离开的起点
     2. v-leave-active：离开过程中
     3. v-leave-to：离开的终点

2. 使用 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span><span class="token punctuation">&gt;</span></span> 包裹要过度的元素，并配置name属性：
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>你好啊！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>

3. 备注：若有多个元素需要过度，则需要使用： <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition-group</span><span class="token punctuation">&gt;</span></span> ，且每个元素都要指定 key 值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[i];function c(p,o){return a(),s("div",null,l)}const d=n(e,[["render",c],["__file","10.guoduyudonghua.html.vue"]]);export{d as default};
