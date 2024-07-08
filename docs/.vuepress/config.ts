import { defineUserConfig } from "vuepress";
import { recoTheme } from 'vuepress-theme-reco';
import { getDirname, path } from 'vuepress/utils'
import { series, navbar } from './utils/navigation'
import { viteBundler } from '@vuepress/bundler-vite'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

let http = '/' // 线上地址
let logoUrl = 'images/logo.png' // logo
let authorAvatar = 'images/head.jpg' // 头像
const __dirname = getDirname(import.meta.url)

if (process.env.NODE_ENV !== 'development') {
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
    componentsDir: './docs/.vuepress/components', // 组件根目录
    series,
    navbar
  }),
});
