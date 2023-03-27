import{_ as t,p as e,q as o,Y as a,s as n,R as s}from"./framework-aa5c4115.js";const c={},p=a(`<h3 id="使用var声明变量" tabindex="-1"><a class="header-anchor" href="#使用var声明变量" aria-hidden="true">#</a> 使用var声明变量</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// var 声明的变量是函数作用域</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用let声明变量" tabindex="-1"><a class="header-anchor" href="#使用let声明变量" aria-hidden="true">#</a> 使用let声明变量</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token comment">//使用let声明的变量具有块级作用域的特点</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用const声明常量" tabindex="-1"><a class="header-anchor" href="#使用const声明常量" aria-hidden="true">#</a> 使用const声明常量</h3>`,5),l=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"const除以下这两点不同之外，其他的特性与let的特性一致，也是具有块级作用域、变量不能提升，同一个作用域下不能重复声明等特点。"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("    "),n("span",{class:"token comment"},"//const声明常量必须赋初始值"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"22"),s(),n("span",{class:"token comment"},"//合法有效"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" b "),n("span",{class:"token comment"},"//Missing initializer in const declaration"),s(`

    `),n("span",{class:"token comment"},"//const声明的常量不能更改"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//合法有效"),s(`
    a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//Assignment to constant variable"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" o "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// obj=o; //报错"),s(`

    obj`),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"南山行者"'),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//合法有效"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`


    `),n("span",{class:"token keyword"},"const"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"//arr=obj;//报错"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//合法有效"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//合法有效"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),i=n("h3",{id:"应用实例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#应用实例","aria-hidden":"true"},"#"),s(" 应用实例")],-1),u=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("ol",null,[n("li",null,"setTimeout定时器会在循环结束之后再执行，因为定时器是异步的操作，循环会先于它执行完毕。当循环执行完了之后，循环退出时，保存的变量的值就是循环执行结束的值：5。这个时候再去执行setTimeout的延时操作，获取的变量i都是同一个值5。"),n("li",null,"如果将循环变量i使用let声明，结局会完全不同，因为let是块级作用域的。JavaScript引擎会给每个循环生成一个新的循环变量保存在对应的块级作用域中。每个setTimeout引用的都是不同变量的实例,所以输出的结果就是循环执行过程中每个循环变量的值:0,1,2,3,4")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("    "),n("span",{class:"token comment"},"//for循环中的let和var"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token comment"},"//5，5，5，5，5"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//5"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token comment"},"//0，1，2，3，4"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//i is not defined"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),r=a(`<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  不推荐使用var，推荐使用let和const,优先使用const,其次是let  
  var 存在变量提升 而 let 与 const 不存在变量提升  
  var定义的变量可以声明多次，而let、const定义的变量只能声明  
  var、let声明的变量可以再次赋值，而const声明的变量不能再次赋值  
  var声明的变量没有自身的作用域，而ler、const声明的变量有自身的作用域  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k=[p,l,i,u,r];function d(m,v){return e(),o("div",null,k)}const g=t(c,[["render",d],["__file","var、 let 、const qubie.html.vue"]]);export{g as default};
