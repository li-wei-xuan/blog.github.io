import{_ as e,o as n,c as i,a}from"./app-EaupiRXX.js";const l={},s=a(`<h2 id="什么是柯里化" tabindex="-1"><a class="header-anchor" href="#什么是柯里化"><span>什么是柯里化</span></a></h2><p>柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><p>主要有两个优点：</p><ul><li>参数复用：我们可以创建一个新的函数，它的一部分参数已经被预设好了。</li><li>延迟执行：我们可以创建一系列的函数，只有在真正需要执行时才提供所有的参数。</li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>function curry(func) {
    return function curried(...args) {
        if (args.length &gt;= func.length) {
            return func.apply(this, args);
        }
        return function (...args2) {
            return curried.apply(this, args.concat(args2));
        }
    };
}

const curry = (func) =&gt; (...args) =&gt; {
    if (args.length &gt;= func.length) {
        return func(...args);
    }
    return (...args2) =&gt; {
        return curry(func)(...args.concat(args2));
    };
};

// 使用示例
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 输出 6
console.log(curriedAdd(1, 2)(3)); // 输出 6
console.log(curriedAdd(1)(2, 3)); // 输出 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=[s];function d(c,t){return n(),i("div",null,r)}const v=e(l,[["render",d],["__file","kelihuahanshu.html.vue"]]),m=JSON.parse('{"path":"/blogs/interview/kelihuahanshu.html","title":"柯里化函数","lang":"zh-CN","frontmatter":{"title":"柯里化函数","date":"2024-05-22T00:00:00.000Z","tags":["elementUI"],"categories":["elementUI"]},"headers":[{"level":2,"title":"什么是柯里化","slug":"什么是柯里化","link":"#什么是柯里化","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]}]}],"git":{"createdTime":1716428611000,"updatedTime":1716428611000,"contributors":[{"name":"lwj","email":"916215061@qq.com","commits":1}]},"filePathRelative":"blogs/interview/柯里化函数.md","readingTime":{"minutes":0.72,"words":216}}');export{v as comp,m as data};
