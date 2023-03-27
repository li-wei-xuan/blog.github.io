import{_ as n,p as i,q as a,w as s,Y as e}from"./framework-aa5c4115.js";const d={},r=e(`<h2 id="子查询定义" tabindex="-1"><a class="header-anchor" href="#子查询定义" aria-hidden="true">#</a> 子查询定义</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>子查询指一个查询语句嵌套在另一个查询语句内部的查询

子查询可以在 SELECT、UPDATE 和 DELETE 语句中使用，而且可以进行多层嵌套。在实际开发时，子查询经常出现在 WHERE 子句中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><h3 id="单行子查询" tabindex="-1"><a class="header-anchor" href="#单行子查询" aria-hidden="true">#</a> 单行子查询</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 等于
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=e(`<h3 id="多行子查询" tabindex="-1"><a class="header-anchor" href="#多行子查询" aria-hidden="true">#</a> 多行子查询</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- IN 等于列表中的任意一个
  SELECT * FROM user WHERE id IN (SELECT id FROM user_point WHERE name like &#39;%张%&#39;)
-- ALL 需要和单行比较操作符一起使用，和子查询返回的所有值比较
  SELECT * FROM user WHERE point &lt;= ALL(SELECT point FROM user_point WHERE name = &#39;张三&#39;)
-- ANY 需要和单行比较操作符一起使用，和子查询返回的某一个值比较(別名：SOME)
  SELECT * FROM user WHERE point &lt;= ANY(SELECT point FROM user_point WHERE name = &#39;张三&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链表子查询" tabindex="-1"><a class="header-anchor" href="#链表子查询" aria-hidden="true">#</a> 链表子查询</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>  SELECT * FROM user a 
  LEFT JOIN (SELECT user_id,sum(point) FROM lucky_user GROUP by user_id) b 
  ON a.id = b.user_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function E(u,t){return i(),a("div",null,[r,s(`
| 方法  | 说明                                     |
| ----- | ---------------------------------------- |
| count | 统计数量，参数是要统计的字段名（可选）   |
| max   | 获取最大值，参数是要统计的字段名（必须） |
| min   | 获取最小值，参数是要统计的字段名（必须） |
| avg   | 获取平均值，参数是要统计的字段名（必须） |
| sum   | 获取总分，参数是要统计的字段名（必须）   | `),l])}const v=n(d,[["render",E],["__file","02.zichaxun.html.vue"]]);export{v as default};
