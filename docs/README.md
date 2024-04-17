---
home: true
modules:
#   - BannerBrand
  - Banner
  - Blog
  - MdContent
  - Footer
banner: # banner 模块的配置
  heroText: 做好每一件简单的事
  tagline: 放弃容易，贵在坚持
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: /images/bg.jpg
  # bgImage: images/bg.jpg #本地
  # bgImageStyle:
  #   height: 450px
bannerBrand:
  bgImage: 'images/bg.jpg'
  title: vuepress-reco
  description: 一款简洁的 vuepress 博客 & 文档 主题。
  tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/li-wei-xuan' }
blog:
  # socialLinks:
  #   - { icon: 'LogoGithub', link: 'https://github.com/li-wei-xuan' }
footer: # 底部模块的配置
  # record: 粤ICP备2022055403号-1
  # recordLink: https://beian.miit.gov.cn/#/Integrated/index
  # cyberSecurityRecord: 公安备案文案
  # cyberSecurityLink: 公安备案地址
  startYear: 2018
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
---
