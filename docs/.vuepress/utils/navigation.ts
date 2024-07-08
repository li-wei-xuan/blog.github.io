import { CombinationSidebar } from "./index";

/**
 * 下标 文件名
 * @param text 标题名字
 * @param link 跳转的页面
 */
const sidebar = {
    HTML: { text: "HTML", link: "/HTML/01.HTML基本结构" },
    CSS: { text: "CSS", link: "/CSS/01.CSS基础" },
    JavaScript: { text: "JavaScript", link: "/JavaScript/01.数组对象" },
    ECMAScript: { text: "ECMAScript", link: "/ECMAScript/01.let-const关键字" },
    TypeScript: { text: "TypeScript", link: "/TypeScript/01.快速入门" },
    Vue: { text: "Vue", link: "/Vue/01.vue实例" },
    Git: { text: "Git", link: "/Git/01.git基本命令" },
    PHP: { text: "PHP", link: "/PHP/01.变量数据类型" },
    MySQL: { text: "MySQL", link: "/MySQL/01.SQL语句" },
    Linux: { text: "Linux", link: "/Linux/01.Linux介绍" },
    Shell: { text: "Shell", link: "/Shell/01.Shell介绍" },
    Interview: { text: "面试题" },
    Uniapp: { text: "Uniapp", link: "/Uniapp/01.环境搭建" }
};

// 侧边栏
export const series = CombinationSidebar(sidebar)
// web前端
const rearEnd = CombinationSidebar(sidebar, ["PHP", "MySQL", "Linux", "Shell"])
// PHP后端
const webChild = CombinationSidebar(sidebar, ["HTML", "CSS", "JavaScript", "ECMAScript", "TypeScript", "Vue", "Uniapp", "Git"])
// 下拉菜单
export const navbar = [
    { text: "首页", link: "/", },
    { text: "web前端", children: webChild },
    { text: "PHP后端", children: rearEnd },
    { text: "技术碎片", link: "/categories/interview/1", },
    { text: "标签", link: "/tags/interview/1", },
    { text: "面试题", link: "/docs/Interview/", }
]
