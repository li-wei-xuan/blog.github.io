import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const i={},l=e(`<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="定义变量" tabindex="-1"><a class="header-anchor" href="#定义变量" aria-hidden="true">#</a> 定义变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>变量名和等号之间不能有空格，这可能和你熟悉的所有编程语言都不一样。
同时，变量名的命名须遵循如下规则：
  命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
  中间不能有空格，可以使用下划线 _。
  不能使用标点符号。
  不能使用bash里的关键字（可用help命令查看保留关键字）。

有效命名
	RUNOOB
  LD_LIBRARY_PATH
  _var
  var2
  
无效命名
	?var<span class="token operator">=</span><span class="token number">123</span>
  user*name<span class="token operator">=</span>runoob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量类型" tabindex="-1"><a class="header-anchor" href="#变量类型" aria-hidden="true">#</a> 变量类型</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>运行shell时，会同时存在三种变量：
  <span class="token number">1</span><span class="token punctuation">)</span> 局部变量 局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。
  <span class="token number">2</span><span class="token punctuation">)</span> 环境变量 所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。
  <span class="token number">3</span><span class="token punctuation">)</span> shell变量 shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量操作" tabindex="-1"><a class="header-anchor" href="#变量操作" aria-hidden="true">#</a> 变量操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>使用变量
  使用一个定义过的变量，只要在变量名前面加美元符号即可
  如：
    <span class="token assign-left variable">your_name</span><span class="token operator">=</span><span class="token string">&quot;lisi&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$your_name</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">\${your_name}</span>

  变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;my name is <span class="token variable">\${your_name}</span>&quot;</span>
	
只读变量
	<span class="token comment">#!/bin/bash</span>
  <span class="token assign-left variable">your_name</span><span class="token operator">=</span><span class="token string">&quot;lisi&quot;</span>
  <span class="token builtin class-name">readonly</span> your_name
  <span class="token assign-left variable">your_name</span><span class="token operator">=</span><span class="token string">&quot;zhangsan&quot;</span>
  
删除变量
	<span class="token comment">#!/bin/bash</span>
  <span class="token assign-left variable">your_name</span><span class="token operator">=</span><span class="token string">&quot;lisi&quot;</span>
  <span class="token builtin class-name">unset</span> your_name
  <span class="token builtin class-name">echo</span> your_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>字符串是shell编程中最常用最有用的数据类型（除了数字和字符串，也没啥其它类型好用了），字符串可以用单引号，也可以用双引号，也可以不用引号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="定义字符串" tabindex="-1"><a class="header-anchor" href="#定义字符串" aria-hidden="true">#</a> 定义字符串</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>单引号字符串的限制：
  单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；
  单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。
  
	<span class="token assign-left variable">str</span><span class="token operator">=</span><span class="token string">&#39;this is a string&#39;</span>

双引号字符串的优点：
	双引号里可以有变量
  双引号里可以出现转义字符
  
 <span class="token assign-left variable">your_name</span><span class="token operator">=</span><span class="token string">&quot;runoob&quot;</span>
 <span class="token assign-left variable">str</span><span class="token operator">=</span><span class="token string">&quot;Hello, I know you are <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$your_name</span><span class="token entity" title="\\&quot;">\\&quot;</span>! <span class="token entity" title="\\n">\\n</span>&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$str</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串操作" tabindex="-1"><a class="header-anchor" href="#字符串操作" aria-hidden="true">#</a> 字符串操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>拼接字符串
  <span class="token assign-left variable">your_name</span><span class="token operator">=</span><span class="token string">&quot;runoob&quot;</span>
  <span class="token comment"># 使用双引号拼接</span>
  <span class="token assign-left variable">greeting</span><span class="token operator">=</span><span class="token string">&quot;hello, &quot;</span><span class="token variable">$your_name</span><span class="token string">&quot; !&quot;</span>
  <span class="token assign-left variable">greeting_1</span><span class="token operator">=</span><span class="token string">&quot;hello, <span class="token variable">\${your_name}</span> !&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$greeting</span>  <span class="token variable">$greeting_1</span>

  <span class="token comment"># 使用单引号拼接</span>
  <span class="token assign-left variable">greeting_2</span><span class="token operator">=</span><span class="token string">&#39;hello, &#39;</span><span class="token variable">$your_name</span><span class="token string">&#39; !&#39;</span>
  <span class="token assign-left variable">greeting_3</span><span class="token operator">=</span><span class="token string">&#39;hello, \${your_name} !&#39;</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$greeting_2</span>  <span class="token variable">$greeting_3</span>

字符串长度
  <span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token string">&quot;abcd&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>string}</span> 	<span class="token comment"># 输出 4</span>

  变量为数组时，<span class="token variable">\${<span class="token operator">#</span>string}</span> 等价于 <span class="token variable">\${<span class="token operator">#</span>string<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>

  <span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token string">&quot;abcd&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>string<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>   <span class="token comment"># 输出 4</span>
  
提取/查找子字符串
  <span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token string">&quot;runoob is a great site&quot;</span>
  <span class="token comment">#提取</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">\${string<span class="token operator">:</span>1<span class="token operator">:</span>4}</span> <span class="token comment"># 输出 unoo</span>
  <span class="token comment">#查找</span>
  <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$string</span>&quot;</span> io<span class="token variable">\`</span></span>  <span class="token comment"># 输出 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell数组" tabindex="-1"><a class="header-anchor" href="#shell数组" aria-hidden="true">#</a> Shell数组</h2><h3 id="定义数组" tabindex="-1"><a class="header-anchor" href="#定义数组" aria-hidden="true">#</a> 定义数组</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>在 Shell 中，用括号来表示数组，数组元素用<span class="token string">&quot;空格&quot;</span>符号分割开。
定义数组的一般形式为：
<span class="token assign-left variable">array_name</span><span class="token operator">=</span><span class="token punctuation">(</span>value0 value1 value2 value3<span class="token punctuation">)</span>

<span class="token assign-left variable">array_name</span><span class="token operator">=</span><span class="token punctuation">(</span>
  value0
  value1
  value2
  value3
<span class="token punctuation">)</span>

可以不使用连续的下标，而且下标的范围没有限制。
array_name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>value0
array_name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>value1
array_name<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token operator">=</span>valuen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组操作" tabindex="-1"><a class="header-anchor" href="#数组操作" aria-hidden="true">#</a> 数组操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>读取数组
	<span class="token assign-left variable">valuen</span><span class="token operator">=</span><span class="token variable">\${array_name<span class="token punctuation">[</span>n<span class="token punctuation">]</span>}</span>
	
读取数组全部元素
	<span class="token builtin class-name">echo</span> <span class="token variable">\${array_name<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
	
数组长度
	<span class="token comment"># 取得数组元素的个数</span>
  <span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>array_name<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
  <span class="token comment"># 或者</span>
  <span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>array_name<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
  <span class="token comment"># 取得数组单个元素的长度</span>
  <span class="token assign-left variable">lengthn</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>array_name<span class="token punctuation">[</span>n<span class="token punctuation">]</span>}</span>

获取数组的所有键
	<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> site
  site<span class="token punctuation">[</span><span class="token string">&quot;google&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.google.com&quot;</span>
  site<span class="token punctuation">[</span><span class="token string">&quot;runoob&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.runoob.com&quot;</span>
  site<span class="token punctuation">[</span><span class="token string">&quot;taobao&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.taobao.com&quot;</span>

  <span class="token builtin class-name">echo</span> <span class="token string">&quot;数组的键为: <span class="token variable">\${<span class="token operator">!</span>site<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;数组的键为: <span class="token variable">\${<span class="token operator">!</span>site<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span>

关联数组
Bash 支持关联数组，可以使用任意的字符串、或者整数作为下标来访问数组元素。
关联数组使用 <span class="token builtin class-name">declare</span> 命令来声明，语法格式如下：
	<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> array_name

  <span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> <span class="token assign-left variable">site</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;google&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.google.com&quot;</span> <span class="token punctuation">[</span><span class="token string">&quot;runoob&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.runoob.com&quot;</span> <span class="token punctuation">[</span><span class="token string">&quot;taobao&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.taobao.com&quot;</span><span class="token punctuation">)</span>

先声明一个关联数组，然后再设置键和值
  <span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> site
  site<span class="token punctuation">[</span><span class="token string">&quot;google&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.google.com&quot;</span>
  site<span class="token punctuation">[</span><span class="token string">&quot;runoob&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.runoob.com&quot;</span>
  site<span class="token punctuation">[</span><span class="token string">&quot;taobao&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.taobao.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell注释" tabindex="-1"><a class="header-anchor" href="#shell注释" aria-hidden="true">#</a> Shell注释</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>单行注释
<span class="token comment"># 以 # 开头的行就是注释，会被解释器忽略。</span>

多行注释
:<span class="token operator">&lt;&lt;</span><span class="token string">EOF
注释内容...
注释内容...
注释内容...
EOF</span>

EOF 也可以使用其他符号:
:<span class="token operator">&lt;&lt;</span><span class="token string">&#39;
注释内容...
注释内容...
注释内容...
&#39;</span>

:<span class="token operator">&lt;&lt;</span><span class="token operator">!</span>
注释内容<span class="token punctuation">..</span>.
注释内容<span class="token punctuation">..</span>.
注释内容<span class="token punctuation">..</span>.
<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[l];function o(p,c){return s(),a("div",null,t)}const u=n(i,[["render",o],["__file","02.Shellbianliang.html.vue"]]);export{u as default};
