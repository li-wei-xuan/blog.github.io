import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const i={},t=e(`<h3 id="函数的定义" tabindex="-1"><a class="header-anchor" href="#函数的定义"><span>函数的定义</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>函数是用来完成某种特定任务的可重用代码块
函数可以使程序更具模块化<span class="token punctuation">,</span>拥有良好的结构
函数定义后在程序中可以重复调用
函数用<span class="token keyword">function</span>关键字来声明
函数名称是由字母或下划线开始<span class="token punctuation">,</span>中间可以包含数字
函数名不区分大小写<span class="token punctuation">,</span>不过在调用函数的时候，通常使用其在定义时相同的形式
php不支持函数重载<span class="token punctuation">,</span> 所以自定义函数不能和内置函数重名
不能在一个文件中自定义同名的函数
参数出现在括号中<span class="token punctuation">,</span>如果有多个参数用逗号分隔
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建函数" tabindex="-1"><a class="header-anchor" href="#创建函数"><span>创建函数</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">NumAdd</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$a</span> <span class="token operator">+</span> <span class="token variable">$b</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">NumAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数"><span>传递参数</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>值传递<span class="token punctuation">(</span>传值<span class="token punctuation">)</span>
    函数内对参数值的改变不会影响函数外部的值
    
引用传递<span class="token punctuation">(</span>传址<span class="token punctuation">)</span>
    有些情况下，可能希望在函数体内对参数的修改在函数体外也能反映
    使用引用传递参数要在参数前加上<span class="token string double-quoted-string">&quot;&amp;&quot;</span>符号
    变量本身传入，传入后的变量与原变量建立联系
    函数体内变量的变化，会影响到原变量本身
 
默认参数值
    可以为参数指定默认值，在没有提供其他值的情况下，则将默认值自动赋给该参数
 
可选参数
    可以指定某个参数为可选参数，这些参数需要放在参数列表的末尾，需且要指定其默认值为空
    如果指定了多个可选参数，可以选择性地传递某些参数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从函数返回值" tabindex="-1"><a class="header-anchor" href="#从函数返回值"><span>从函数返回值</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>通常情况下，只依靠函数做某些事情还不够
需要将函数的执行结果返回给调用者，这时可以使用 <span class="token keyword">return</span> 语句返回结果
<span class="token keyword">return</span> 语句变执行后，将使得函数立即结束运行
 
<span class="token keyword">function</span> <span class="token function-definition function">NumAdd</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//return语句之后无执行</span>
    <span class="token keyword">return</span> <span class="token variable">$num</span> <span class="token operator">*</span> <span class="token variable">$num</span><span class="token punctuation">;</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不打印</span>
<span class="token punctuation">}</span>

<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">NumAdd</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数"><span>匿名函数</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>匿名函数，也就是没有函数名的函数

<span class="token variable">$demo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$demo</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套函数" tabindex="-1"><a class="header-anchor" href="#嵌套函数"><span>嵌套函数</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;father&#39;</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function-definition function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;son&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域"><span>变量作用域</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>全局变量
	函数体外定义的变量为全局变量，与局部变量相反，全局变量可以在程序的任何地方访问
	如果在函数体中需要使用全局变量，使用 <span class="token keyword">global</span> 关键字访问
	全局变量的作用域：从声明它的那条语句开始到文件末尾，即整个脚本


局部变量
	函数体内定义的变量为局部变量，只在函数体内可见
	局部变量的作用域：从声明它的那条语句开始到函数结束，即只作用域函数内部


静态变量
	局部变量在函数退出时会被撤消，与局部变量不同
	静态变量在函数退出时不会丢失值，并且再次调用函数时还能保留这个值
	在变量名前面加上 <span class="token keyword">static</span> 关键字就可以声明一个静态变量

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量"><span>全局变量</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 引入全局变量</span>
    <span class="token keyword">global</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
    
    <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">34</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 23</span>
<span class="token comment">// $a = test(); // 34</span>
<span class="token keyword">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量"><span>局部变量</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;全局变量&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function-definition function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;局部变量&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token variable">$str</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$str</span><span class="token punctuation">;</span> <span class="token comment">// 全局变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态变量" tabindex="-1"><a class="header-anchor" href="#静态变量"><span>静态变量</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 静态变量</span>
    <span class="token keyword">static</span> <span class="token variable">$count</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token variable">$count</span><span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">echo</span> <span class="token variable">$count</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数库" tabindex="-1"><a class="header-anchor" href="#函数库"><span>函数库</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">include</span> 与 <span class="token keyword">require</span>
<span class="token keyword">include_once</span> 与 <span class="token keyword">require_once</span>
 
<span class="token keyword">include</span><span class="token punctuation">(</span><span class="token punctuation">)</span>语句将在其被调用的位置处包含一个文件
<span class="token keyword">include</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;init.php&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">include_once</span><span class="token punctuation">(</span><span class="token punctuation">)</span>的作用与<span class="token keyword">include</span><span class="token punctuation">(</span><span class="token punctuation">)</span>相同，不过它会首先验证是否已经包含了该文件
如果已经包含，则不再执行<span class="token keyword">include_once</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token keyword">require</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 与 <span class="token keyword">include</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 之间的区别
如果<span class="token keyword">require</span><span class="token punctuation">(</span><span class="token punctuation">)</span>包含文件出错时，脚本将停止执行。 而使用<span class="token keyword">include</span><span class="token punctuation">(</span><span class="token punctuation">)</span>脚本将继续执行

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),p=[t];function l(c,o){return s(),a("div",null,p)}const d=n(i,[["render",l],["__file","03.luojihanshu.html.vue"]]),r=JSON.parse('{"path":"/docs/PHP/03.luojihanshu.html","title":"逻辑函数","lang":"zh-CN","frontmatter":{"title":"逻辑函数","date":"2023-02-15T00:00:00.000Z","tags":["php"]},"headers":[{"level":3,"title":"函数的定义","slug":"函数的定义","link":"#函数的定义","children":[]},{"level":3,"title":"创建函数","slug":"创建函数","link":"#创建函数","children":[]},{"level":3,"title":"传递参数","slug":"传递参数","link":"#传递参数","children":[]},{"level":3,"title":"从函数返回值","slug":"从函数返回值","link":"#从函数返回值","children":[]},{"level":3,"title":"匿名函数","slug":"匿名函数","link":"#匿名函数","children":[]},{"level":3,"title":"嵌套函数","slug":"嵌套函数","link":"#嵌套函数","children":[]},{"level":3,"title":"变量作用域","slug":"变量作用域","link":"#变量作用域","children":[]},{"level":3,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":3,"title":"局部变量","slug":"局部变量","link":"#局部变量","children":[]},{"level":3,"title":"静态变量","slug":"静态变量","link":"#静态变量","children":[]},{"level":3,"title":"函数库","slug":"函数库","link":"#函数库","children":[]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/PHP/03.逻辑函数.md","readingTime":{"minutes":3.34,"words":1002}}');export{d as comp,r as data};
