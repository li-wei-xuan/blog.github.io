import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const t={},o=e(`<h3 id="webstorage" tabindex="-1"><a class="header-anchor" href="#webstorage"><span>webStorage</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">1.</span> 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

<span class="token number">2.</span> 浏览器端通过 Window<span class="token punctuation">.</span>sessionStorage 和 Window<span class="token punctuation">.</span>localStorage 属性来实现本地存储机制。

<span class="token number">3.</span> 相关<span class="token constant">API</span>：
   <span class="token number">1.</span>  xxxxxStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span> 
      	该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

   <span class="token number">2.</span>  xxxxxStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;person&#39;</span><span class="token punctuation">)</span> 
     	该方法接受一个键名作为参数，返回键名对应的值。

   <span class="token number">3.</span>  xxxxxStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
      该方法接受一个键名作为参数，并把该键名从存储中删除。

   <span class="token number">4.</span>  xxxxxStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      该方法会清空存储中的所有数据。

<span class="token number">4.</span> 备注：
   <span class="token number">1.</span> SessionStorage存储的内容会随着浏览器窗口关闭而消失。
   <span class="token number">2.</span> LocalStorage存储的内容，需要手动清除才会消失。
   <span class="token number">3.</span> xxxxxStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span> 如果xxx对应的value获取不到，那么getItem的返回值是<span class="token keyword">null</span>。
   <span class="token number">4.</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> 的结果依然是<span class="token keyword">null</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[o];function l(c,p){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","sessionStoragehelocalStorage.html.vue"]]),d=JSON.parse('{"path":"/blogs/interview/sessionStoragehelocalStorage.html","title":"sessionStorage和localStorage","lang":"zh-CN","frontmatter":{"title":"sessionStorage和localStorage","date":"2023-03-28T00:00:00.000Z","tags":["interview"],"categories":["interview"]},"headers":[{"level":3,"title":"webStorage","slug":"webstorage","link":"#webstorage","children":[]}],"git":{"createdTime":1680015807000,"updatedTime":1680015807000,"contributors":[{"name":"limou","email":"10554021+li-wei-xuan@user.noreply.gitee.com","commits":1}]},"filePathRelative":"blogs/interview/sessionStorage和localStorage.md","readingTime":{"minutes":0.82,"words":247}}');export{u as comp,d as data};
