import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const p={},o=e(`<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><p>字符串(String)、数字(Number)、布尔(Boolean)、空(Null)、未定义(Undefined)、Symbol(ES6)、对象(Object)、数组(Array)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span><span class="token function">、字符串</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span>
  字符串由零个或多个字符构成，字符包括字母，数字，标点符号和空格
  字符串必须放在引号里（单引号或双引号）
  <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span>
  <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>

<span class="token number">2</span><span class="token function">、数字</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">20</span>
  <span class="token keyword">var</span> money <span class="token operator">=</span> <span class="token number">19.8</span>

<span class="token number">3</span><span class="token function">、布尔</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span>
  布尔型数据只能有两种种值 <span class="token boolean">true</span> 和 <span class="token boolean">false</span>
  与字符串不同，不要把布尔值用引号括起来。布尔值 <span class="token boolean">false</span> 与 字符串 <span class="token string">&quot;false&quot;</span>是两回事
  <span class="token keyword">var</span> bool <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">var</span> bool <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token number">4</span><span class="token function">、空</span><span class="token punctuation">(</span>Null<span class="token punctuation">)</span>
  在 JavaScript 中 <span class="token keyword">null</span> 表示 <span class="token string">&quot;什么都没有&quot;</span>
  <span class="token keyword">null</span>是一个只有一个值的特殊类型。表示一个空对象引用
  可以设置 <span class="token keyword">null</span> 来清空对象
  <span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token number">5</span><span class="token function">、未定义</span><span class="token punctuation">(</span>Undefined<span class="token punctuation">)</span>
  在 JavaScript 中<span class="token punctuation">,</span> <span class="token keyword">undefined</span> 是一个没有设置值的变量
  <span class="token keyword">typeof</span> 一个没有值的变量会返回 <span class="token keyword">undefined</span>
  可以设置为 <span class="token keyword">undefined</span> 来清空对象
  <span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token number">6</span><span class="token function">、Symbol</span><span class="token punctuation">(</span><span class="token constant">ES6</span><span class="token punctuation">)</span>
  <span class="token constant">ES6</span> 引入了一种新的原始数据类型Symbol，表示独一无二的值。
  它是 JavaScript语言的第七种数据类型，是一种类似于字符串的数据类型。
  <span class="token keyword">var</span> sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token number">7</span><span class="token function">、对象</span><span class="token punctuation">(</span>Object<span class="token punctuation">)</span>
  <span class="token function">对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式</span> <span class="token punctuation">(</span>name <span class="token operator">:</span> value<span class="token punctuation">)</span> 来定义。
  属性由逗号分隔<span class="token punctuation">.</span>
  <span class="token keyword">var</span> person<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">friend</span><span class="token operator">:</span><span class="token string">&quot;jacky&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token number">8</span><span class="token function">、数组</span><span class="token punctuation">(</span>Array<span class="token punctuation">)</span>
  我们的变量一般都只能存储一个内容 所以它其实是一个单一的容器
  我们的数组一般可以存一个或者是多个值 ，所以数组是一个大的容器

  <span class="token literal-property property">组成部分</span><span class="token operator">:</span>
   <span class="token function">数组其实是由多个</span> <span class="token punctuation">(</span>键<span class="token operator">-</span>值<span class="token punctuation">)</span> 所组成的一个多容器
   数组的索引 默认是从<span class="token number">0</span>开始的

  定义数组
  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">435</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">546</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    arr3<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">234</span><span class="token punctuation">;</span>
    arr3<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">234</span><span class="token punctuation">;</span>

Undefined 和 Null 的区别
  <span class="token keyword">typeof</span> <span class="token keyword">undefined</span>             <span class="token comment">// undefined</span>
  <span class="token keyword">typeof</span> <span class="token keyword">null</span>                  <span class="token comment">// object</span>
  <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span>           <span class="token comment">// false</span>
  <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span>            <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 查看数据类型</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span> <span class="token comment">// string</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token number">33</span><span class="token punctuation">)</span> <span class="token comment">// number</span>

  <span class="token comment">// 转换为字符串</span>
  <span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token boolean">true</span>
  demo <span class="token operator">=</span> demo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span> <span class="token comment">// string true</span>

  <span class="token comment">// 转换为整数</span>
  <span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
  demo <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span> <span class="token comment">// number 123</span>

  <span class="token comment">// 转换为浮点数</span>
  <span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token string">&quot;123.123&quot;</span>
  demo <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span> <span class="token comment">// number 123.123</span>

  <span class="token comment">// 保留两位小数 返回字符串类型</span>
  <span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token number">123.123</span>
  demo <span class="token operator">=</span> demo<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span> <span class="token comment">// string 123.12</span>

  <span class="token comment">// 转换为布尔值</span>
  <span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token number">123</span>
  demo <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span> <span class="token comment">// boolean true</span>

  <span class="token comment">// 其他原始类型也是可以用这种方式转换</span>
  <span class="token comment">// Number(demo)  转换为数值</span>
  <span class="token comment">// String(demo)  转换为字符串</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显性转换、隐性转换" tabindex="-1"><a class="header-anchor" href="#显性转换、隐性转换" aria-hidden="true">#</a> 显性转换、隐性转换</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 显性转换</span>
<span class="token comment">// 人为的转换，使得代码看起来更清晰易读</span>
String、Number、Boolean、Object、parseFloat、parseInt等方法的均是显式转换

<span class="token comment">// 隐性转换</span>
<span class="token comment">// 当运算符在运算时，两边数据不统一，编译器会自动将两边数据进行数据类型转换成统一的再计算。</span>
  逻辑语句的类型转换：当使用<span class="token keyword">if</span>、<span class="token keyword">while</span>、<span class="token keyword">for</span> 时，隐式转换为布尔值

  逻辑表达式：
    <span class="token operator">!</span> 逻辑非，隐式转换为布尔值，并取反，<span class="token operator">!</span><span class="token operator">!</span>两次逻辑非，隐式转换为布尔值
    <span class="token operator">||</span> 和 <span class="token operator">&amp;&amp;</span> 会将非布尔值操作数，隐式转换为布尔值，再判断

  算术表达式
    递增递减<span class="token operator">++</span> <span class="token operator">--</span>，一元加减 <span class="token operator">+</span>a、<span class="token operator">-</span> a（结果的符号取反），二元 <span class="token operator">-</span>，乘法，除法，求模，隐式转换为 Number

    <span class="token operator">+</span>运算符：
      不同类型间的转换规则
        <span class="token number">1</span>、如果其中一个操作符是对象，则进行对象到原始值的转换（这里是通过 toString 方法获取）
        <span class="token number">2</span>、进行了对象到原始值的转换后，如果其中一个操作数是字符串，则另一个操作数也会转换成字符串，再进行连接
        <span class="token number">3</span>、否则两个操作数都转换为数字（或者<span class="token number">NaN</span>），然后进行加法操作。
      具体使用时，需要考虑加法的结合性对运算顺序的影响
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token string">&#39;hh&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 3hh</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token string">&#39;hh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12hh</span>

    <span class="token operator">==</span> 运算符：
      注意：尽管 <span class="token keyword">if</span> 语句会隐式转换为布尔值，但 <span class="token operator">==</span> 运算符并不会自动得将操作数转换为布尔值。
      不同类型间的转换规则
        <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> 为<span class="token boolean">true</span>，和其他的比较都为<span class="token boolean">false</span>

        如果一个值是数字，另一个是字符串，先将字符串转换为数字，再进行比较
        a<span class="token punctuation">.</span><span class="token number">NaN</span> 与所有值都不相等，包括它自己，可使用 <span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 来判断一个值是否是数字
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token operator">==</span><span class="token string">&quot;dsdd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false 字符串&quot;dsdd&quot;转为数字为NaN，但是NaN != NaN</span>

        b<span class="token punctuation">.</span> 数字间比较，以<span class="token number">0</span>开头是<span class="token number">8</span>进制
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">012</span><span class="token operator">==</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">099</span><span class="token operator">==</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true 这种情况是因为八进制中不可能出现9，所以看成一个十进制</span>

        如果一个值是布尔值，转换为数字再比较
        <span class="token boolean">true</span> <span class="token operator">==</span> <span class="token string">&#39;2&#39;</span>  <span class="token comment">// false, 先把 true 变成 1， &#39;2&#39; 变成 2</span>

        如果一个值是对象，另一个是数字或字符串或 symbol，将对象转换为原始值再比较（调用 valueOf 方法）
          注意，同类型比较时，对象间除非指针一样，否则它就是两个不同的对象

        其他不同类型比较均不相等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的隐式转换" tabindex="-1"><a class="header-anchor" href="#常用的隐式转换" aria-hidden="true">#</a> 常用的隐式转换</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  a <span class="token operator">+</span> <span class="token string">&quot;&quot;</span>  <span class="token comment">// 等价于 String(a)</span>
  <span class="token operator">+</span>a      <span class="token comment">// 等价于 Number(a)，也可以写成 a - 0</span>
  <span class="token operator">!</span><span class="token operator">!</span>a     <span class="token comment">// 等价于Boolean(a)</span>
  <span class="token operator">!</span>a      <span class="token comment">// 转换为布尔值，并取反</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[o];function l(c,i){return s(),a("div",null,t)}const u=n(p,[["render",l],["__file","05.leixingzhuanhuan.html.vue"]]);export{u as default};
