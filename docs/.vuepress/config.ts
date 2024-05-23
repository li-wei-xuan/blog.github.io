import { defineUserConfig } from "vuepress";
import { recoTheme } from 'vuepress-theme-reco';
import { getDirname, path } from 'vuepress/utils'
import { getChildren } from 'vuepress-sidebar-atuo';
import { viteBundler } from '@vuepress/bundler-vite'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'


let http = '/' // 线上地址
let logoUrl = 'images/logo.png' // logo
let authorAvatar = 'images/head.jpg' // 头像
const __dirname = getDirname(import.meta.url)

if(process.env.NODE_ENV !== 'development') {
  logoUrl = http + logoUrl // logo
  authorAvatar = http + authorAvatar // 头像
}

export default defineUserConfig({
  title: "小博客",
  description: "做好每一件简单的事",
  locales: { // 语言配置
    '/': { lang: 'zh-CN' }
  },
  head: [ // 头部
    ['link', { rel: "icon", href: logoUrl }],
    ['meta', { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }]
  ],
  plugins: [
    copyCodePlugin(),
    readingTimePlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  bundler: viteBundler(),
  theme: recoTheme({
    primaryColor: '#17adcb',
    logo: logoUrl,
    author: "li",
    authorAvatar,
    lastUpdatedText: "Last Updated",
    // colorMode: 'dark', // 样式颜色 dark, light
    componentsDir: './docs/.vuepress/components', // 组件根目录
    // series 为原 sidebar
    series: {
      // 前端工程师
      "/docs/HTML/": [
        {
          text: "HTML",
          children: getChildren('docs/docs/HTML/')
        },
      ],
      "/docs/CSS/": [
        {
          text: "CSS",
          children: getChildren('docs/docs/CSS/')
        },
      ],
      "/docs/JavaScript/": [
        {
          text: "JavaScript",
          children: getChildren('docs/docs/JavaScript/')
        },
      ],
      "/docs/ECMASript/": [
        {
          text: "ECMASript",
          children: getChildren('docs/docs/ECMASript/')
        },
      ],
      "/docs/Vue/": [
        {
          text: "Vue",
          children: getChildren('docs/docs/Vue/')
        },
      ],
      "/docs/Git/": [
        {
          text: "Git",
          children: getChildren('docs/docs/Git/')
        },
      ],
      // PHP工程师
      "/docs/PHP/": [
        {
          text: "PHP",
          children: getChildren('docs/docs/PHP/')
        },
      ],
      "/docs/MySQL/": [
        {
          text: "MySQL",
          children: getChildren('docs/docs/MySQL/')
        },
      ],
      "/docs/Linux/": [
        {
          text: "Linux",
          children: getChildren('docs/docs/Linux/')
        },
      ],
      "/docs/Shell/": [
        {
          text: "Shell",
          children: getChildren('docs/docs/Shell/')
        },
      ],
      "/docs/interview/": [
        {
          text: "面试题",
          children: getChildren('docs/docs/interview/')
        },
      ],
      "/docs/Uniapp/": [
        {
          text: "Uniapp",
          children: getChildren('docs/docs/uniapp/')
        },
      ]
    },
    // https://www.xicons.org/#/zh-CN 中的carbon
    navbar: [
      {
        text: "首页",
        link: "/",
        // icon: 'Home'
      },
      {
        text: "web前端",
        // icon: 'List',
        children: [
          { text: "HTML", link: "/docs/HTML/01.HTML基本结构" },
          { text: "CSS", link: "/docs/CSS/01.CSS基础" },
          { text: "JavaScript", link: "/docs/JavaScript/01.数组对象" },
          { text: "ECMASript", link: "/docs/ECMASript/01.let-const关键字" },
          { text: "Vue", link: "/docs/Vue/01.vue实例" },
          { text: "Uniapp", link: "/docs/Uniapp/01.环境搭建" },
          { text: "Git", link: "/docs/Git/01.git基本命令" }
        ],
      },
      {
        text: "PHP后端",
        // icon: 'List',
        children: [
          { text: "PHP", link: "/docs/PHP/01.变量数据类型" },
          { text: "MySQL", link: "/docs/MySQL/01.SQL语句" },
          { text: "Linux", link: "/docs/Linux/01.Linux介绍" },
          { text: "Shell", link: "/docs/Shell/01.Shell介绍" }
        ],
      },
      {
        text: "技术碎片",
        link: "/categories/interview/1",
        // icon: 'Categories'
      },
      {
        text: "标签",
        link: "/tags/interview/1",
        // icon: 'Tag'
      },
      {
        text: "面试题",
        link: "/docs/interview/",
        // icon: 'Money'
      },
    ]
  }),
});
