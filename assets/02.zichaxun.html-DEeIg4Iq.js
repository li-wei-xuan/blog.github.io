import{_ as e,o as i,c as n,a as s}from"./app-EaupiRXX.js";const a={},l=s(`<h2 id="子查询定义" tabindex="-1"><a class="header-anchor" href="#子查询定义"><span>子查询定义</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>子查询指一个查询语句嵌套在另一个查询语句内部的查询

子查询可以在 SELECT、UPDATE 和 DELETE 语句中使用，而且可以进行多层嵌套。在实际开发时，子查询经常出现在 WHERE 子句中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><h3 id="单行子查询" tabindex="-1"><a class="header-anchor" href="#单行子查询"><span>单行子查询</span></a></h3><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>-- 等于
  SELECT * FROM user WHERE user_id = (SELECT user_id FROM user_point WHERE phone = &#39;123456789&#39;)

-- 大于 / 小于
  SELECT * FROM user WHERE point &gt; (SELECT point FROM user_point WHERE name = &#39;张三&#39;)
  SELECT * FROM user WHERE point &lt; (SELECT point FROM user_point WHERE name = &#39;张三&#39;)

-- 大于等于 / 小于等于
  SELECT * FROM user WHERE point &gt;= (SELECT point FROM user_point WHERE name = &#39;张三&#39;)
  SELECT * FROM user WHERE point &lt;= (SELECT point FROM user_point WHERE name = &#39;张三&#39;)

-- 不等于
  SELECT * FROM user WHERE point != (SELECT point FROM user_point WHERE name = &#39;张三&#39;)
  SELECT * FROM user WHERE point &lt;&gt; (SELECT point FROM user_point WHERE name = &#39;张三&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行子查询" tabindex="-1"><a class="header-anchor" href="#多行子查询"><span>多行子查询</span></a></h3><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>-- IN 等于列表中的任意一个
  SELECT * FROM user WHERE id IN (SELECT id FROM user_point WHERE name like &#39;%张%&#39;)
-- ALL 需要和单行比较操作符一起使用，和子查询返回的所有值比较
  SELECT * FROM user WHERE point &lt;= ALL(SELECT point FROM user_point WHERE name = &#39;张三&#39;)
-- ANY 需要和单行比较操作符一起使用，和子查询返回的某一个值比较(別名：SOME)
  SELECT * FROM user WHERE point &lt;= ANY(SELECT point FROM user_point WHERE name = &#39;张三&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链表子查询" tabindex="-1"><a class="header-anchor" href="#链表子查询"><span>链表子查询</span></a></h3><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>  SELECT * FROM user a 
  LEFT JOIN (SELECT user_id,sum(point) FROM lucky_user GROUP by user_id) b 
  ON a.id = b.user_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[l];function t(r,E){return i(),n("div",null,d)}const u=e(a,[["render",t],["__file","02.zichaxun.html.vue"]]),v=JSON.parse('{"path":"/docs/MySQL/02.zichaxun.html","title":"子查询","lang":"zh-CN","frontmatter":{"title":"子查询","date":"2023-01-03T00:00:00.000Z","tags":["mysql"]},"headers":[{"level":2,"title":"子查询定义","slug":"子查询定义","link":"#子查询定义","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[{"level":3,"title":"单行子查询","slug":"单行子查询","link":"#单行子查询","children":[]},{"level":3,"title":"多行子查询","slug":"多行子查询","link":"#多行子查询","children":[]},{"level":3,"title":"链表子查询","slug":"链表子查询","link":"#链表子查询","children":[]}]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/MySQL/02.子查询.md","readingTime":{"minutes":1.45,"words":434}}');export{u as comp,v as data};
