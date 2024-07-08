import{_ as n,o as s,c as a,a as t}from"./app-EaupiRXX.js";const e={},p=t(`<h3 id="使用var声明变量" tabindex="-1"><a class="header-anchor" href="#使用var声明变量"><span>使用var声明变量</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token comment">// var 声明的变量是函数作用域</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">123</span>
  <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">12</span> <span class="token comment">//在函数内部声明，在函数外部不能访问</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token comment">//12</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//123,函数内部可以访问全局作用域中的变量num</span>
  <span class="token punctuation">}</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token comment">//age is not defined</span>

  <span class="token comment">// var声明的变量会有变量提升</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//undefined</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
  <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token comment">//undefined</span>
      <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 全局作用域中声明的变量会被挂载到全局对象的window中</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//123</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>num<span class="token punctuation">)</span> <span class="token comment">//123</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">===</span> window<span class="token punctuation">.</span>num<span class="token punctuation">)</span> <span class="token comment">//true</span>

  <span class="token comment">// 同一作用域下，可以重复声明相同的变量名</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">12</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">23</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">34</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//34</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用let声明变量" tabindex="-1"><a class="header-anchor" href="#使用let声明变量"><span>使用let声明变量</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>   <span class="token comment">//使用let声明的变量具有块级作用域的特点</span>
   <span class="token punctuation">{</span>
     <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token string">&#39;20&#39;</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//20</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//num is not defined</span>

   <span class="token comment">//let声明的变量有暂时性死区，没有变量提升，必须先声明再使用，</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token comment">//Cannot access &#39;num&#39; before initialization</span>
   <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">66</span>
   <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//Cannot access &#39;a&#39; before initialization</span>
     <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">6</span>
   <span class="token punctuation">}</span>

   <span class="token comment">//全局作用域中使用let声明的变量不会挂载到window对象中</span>
   <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">123</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//123</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>num<span class="token punctuation">)</span> <span class="token comment">//undefined</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">===</span> window<span class="token punctuation">.</span>num<span class="token punctuation">)</span> <span class="token comment">//false</span>

   <span class="token comment">//同一作用域下不能使用let重复声明相同的变量</span>
   <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">12</span>
   <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">32</span> <span class="token comment">//&#39;num&#39; has already been declared</span>

   <span class="token comment">//不同作用域下，let可以声明相同变量名的变量</span>
   <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">22</span>
   <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">23</span>
     <span class="token punctuation">{</span>
       <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">24</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//24</span>
     <span class="token punctuation">}</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//23</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//22</span>
   <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

   <span class="token comment">//相同作用域下不能重复声明并不受var关键字的限制</span>
   <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">66</span>
   <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">33</span> <span class="token comment">//&#39;a&#39; has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用const声明常量" tabindex="-1"><a class="header-anchor" href="#使用const声明常量"><span>使用const声明常量</span></a></h3><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>const除以下这两点不同之外，其他的特性与let的特性一致，也是具有块级作用域、变量不能提升，同一个作用域下不能重复声明等特点。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>    <span class="token comment">//const声明常量必须赋初始值</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">22</span> <span class="token comment">//合法有效</span>
    <span class="token keyword">const</span> b <span class="token comment">//Missing initializer in const declaration</span>

    <span class="token comment">//const声明的常量不能更改</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span><span class="token comment">//合法有效</span>
    a <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span><span class="token comment">//Assignment to constant variable</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// obj=o; //报错</span>

    obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;南山行者&quot;</span><span class="token punctuation">;</span><span class="token comment">//合法有效</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//arr=obj;//报错</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//合法有效</span>
    arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//合法有效</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="应用实例" tabindex="-1"><a class="header-anchor" href="#应用实例"><span>应用实例</span></a></h3><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ol><li>setTimeout定时器会在循环结束之后再执行，因为定时器是异步的操作，循环会先于它执行完毕。当循环执行完了之后，循环退出时，保存的变量的值就是循环执行结束的值：5。这个时候再去执行setTimeout的延时操作，获取的变量i都是同一个值5。</li><li>如果将循环变量i使用let声明，结局会完全不同，因为let是块级作用域的。JavaScript引擎会给每个循环生成一个新的循环变量保存在对应的块级作用域中。每个setTimeout引用的都是不同变量的实例,所以输出的结果就是循环执行过程中每个循环变量的值:0,1,2,3,4</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>    <span class="token comment">//for循环中的let和var</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token comment">//5，5，5，5，5</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//5</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token comment">//0，1，2，3，4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//i is not defined</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  不推荐使用var，推荐使用let和const,优先使用const,其次是let  
  var 存在变量提升 而 let 与 const 不存在变量提升  
  var定义的变量可以声明多次，而let、const定义的变量只能声明  
  var、let声明的变量可以再次赋值，而const声明的变量不能再次赋值  
  var声明的变量没有自身的作用域，而ler、const声明的变量有自身的作用域  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","var-let-const qubie.html.vue"]]),k=JSON.parse('{"path":"/blogs/interview/var-let-const qubie.html","title":"var-let-const 区别","lang":"zh-CN","frontmatter":{"title":"var-let-const 区别","date":"2022-10-08T00:00:00.000Z","tags":["interview"],"categories":["interview"]},"headers":[{"level":3,"title":"使用var声明变量","slug":"使用var声明变量","link":"#使用var声明变量","children":[]},{"level":3,"title":"使用let声明变量","slug":"使用let声明变量","link":"#使用let声明变量","children":[]},{"level":3,"title":"使用const声明常量","slug":"使用const声明常量","link":"#使用const声明常量","children":[]},{"level":3,"title":"应用实例","slug":"应用实例","link":"#应用实例","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1680588280000,"updatedTime":1680588280000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"blogs/interview/var-let-const 区别.md","readingTime":{"minutes":3.19,"words":956}}');export{r as comp,k as data};
