#!/bin/zsh
echo "1.gitee\n2.github(mac)\n3.github(win)"
read num
case $num in
1)
    echo "提交代码到gitee"
    echo "\n-----------------------------\n"
    git add .
    git commit -m "$(date "+%Y-%m-%d %H:%M:%S")"
    git push origin master
    echo "提交gitee成功"
    ;;
2)
    echo "提交代码到github(mac)"
    echo "\n-----------------------------\n"
    echo '开始打包'
    npm run build || yarn build
    echo "打包成功"
    cd /Users/yidao1/Desktop/web/li-wei-xuan.github.io
    echo "跳转仓库成功"
    git pull
    echo "拉取代码成功"
    cp -r /Users/yidao1/Desktop/web/blog-v2/docs/.vuepress/dist/* /Users/yidao1/Desktop/web/li-wei-xuan.github.io
    echo "复制内容成功"
    git add .
    git commit -m "$(date "+%Y-%m-%d %H:%M:%S")"
    echo "暂存代码成功"
    git push origin main
    echo "提交github成功(mac)"
    ;;
3)
    echo "提交代码到github(win)"
    echo "\n-----------------------------\n"
    git add .
    git commit -m "$(date "+%Y-%m-%d %H:%M:%S")"
    git push origin master
    echo "提交gitee成功"
    echo "\n-----------------------------\n"
    echo '开始打包'
    npm run build || yarn build
    echo "打包成功"
    cd docs/.vuepress/dist 
    echo "跳转dist成功"
    git init
    echo "初始化仓库成功"
    git branch -m main
    echo "切换分支成功"
    git add .
    git commit -m "$(date "+%Y-%m-%d %H:%M:%S")"
    echo "暂存代码成功"
    git remote add origin https://gitee.com/li-wei-xuan/li-wei-xuan.github.io.git
    echo "添加远程仓库成功"
    git push -f origin main
    echo "提交github成功(win)"
    ;;
*)
    echo "\n-----------------------------\n"
    exit
    ;;
esac
