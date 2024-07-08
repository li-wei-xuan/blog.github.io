import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const t={},p=e(`<h3 id="github加速" tabindex="-1"><a class="header-anchor" href="#github加速"><span>github加速</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1、新建GitHub公共仓库
2、添加需要存放的图片、音频等等
3、发布releases，填写版本号
4、使用 https://cdn.jsdelivr.net/gh/用户名/仓库名称@发布版本号/文件路径 访问

注意：
  jsdelivr加速的文件不能超过50M，可以使用多个
  发布版本号：可以不填，默认master
  文件路径：建议放在文件夹下面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress加速" tabindex="-1"><a class="header-anchor" href="#vuepress加速"><span>vuepress加速</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 在config.js中，添加以下代码</span>

<span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">NODE_ENV</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span>
    <span class="token comment">//判断是否是生产环境</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.jsdelivr.net/gh/用户名/仓库名称/&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//配置路径别名</span>
          <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;public&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./public&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//配置路径别名</span>
          <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;public&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./public&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[p];function l(c,o){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","jsdelivrjiasu.html.vue"]]),d=JSON.parse('{"path":"/blogs/other/jsdelivrjiasu.html","title":"vuepress使用jsDelivr进行CDN加速","lang":"zh-CN","frontmatter":{"title":"vuepress使用jsDelivr进行CDN加速","date":"2022-12-28T00:00:00.000Z","keys":["18c3660888faaed8348796b5b8c89fbc"],"tags":["vuepress"],"categories":["other"]},"headers":[{"level":3,"title":"github加速","slug":"github加速","link":"#github加速","children":[]},{"level":3,"title":"vuepress加速","slug":"vuepress加速","link":"#vuepress加速","children":[]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"blogs/other/jsdelivr加速.md","readingTime":{"minutes":0.66,"words":197}}');export{u as comp,d as data};
