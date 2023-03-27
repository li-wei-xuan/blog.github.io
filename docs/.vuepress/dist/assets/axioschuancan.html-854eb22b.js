import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const t={},p=e(`<h2 id="axios发送请求时params和data的区别" tabindex="-1"><a class="header-anchor" href="#axios发送请求时params和data的区别" aria-hidden="true">#</a> axios发送请求时params和data的区别</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用axios发送请求时，配置项params和data两者其实是不相同的

params是添加到url的请求字符串中的,用于get请求

data是添加到请求体(body)中的，用于post请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="post和get的例子" tabindex="-1"><a class="header-anchor" href="#post和get的例子" aria-hidden="true">#</a> post和get的例子</h2><h3 id="正确例子" tabindex="-1"><a class="header-anchor" href="#正确例子" aria-hidden="true">#</a> 正确例子</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//获取用户列表</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/admin/customer/list&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">baseURL</span><span class="token operator">:</span> baseUrl<span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      params
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">changeStatus</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//修改状态</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/admin/customer/changeStatus&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">baseURL</span><span class="token operator">:</span> baseUrl<span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误例子" tabindex="-1"><a class="header-anchor" href="#错误例子" aria-hidden="true">#</a> 错误例子</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  情况一：
      <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//获取用户列表</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/admin/customer/list&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">baseURL</span><span class="token operator">:</span> baseUrl<span class="token punctuation">,</span>
          <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          data
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

  注：将params修改为data，是不能请求成功的，因为<span class="token keyword">get</span>请求中不存在data这个选项。

  情况二：
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">changeStatus</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//修改状态</span>
      <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/admin/customer/changeStatus&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">baseURL</span><span class="token operator">:</span> baseUrl<span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        params
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
  注：将data修改为params，请求参数会出现在请求地址后面，数组和对象会出现错误。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function l(i,r){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","axioschuancan.html.vue"]]);export{u as default};
