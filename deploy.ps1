# 部署到 GitHub Pages 的脚本
# 请在网络恢复后执行

# 1. 推送 main 分支
git push origin master:main

# 2. 构建项目（已完成）
# npm run build

# 3. 切换到 gh-pages 分支
git checkout gh-pages

# 4. 复制构建文件
Copy-Item -Recurse -Force dist\* .\

# 5. 添加 yishu 项目
Copy-Item -Recurse -Force public\yishu\ .\yishu\

# 6. 提交并推送
git add .
git commit -m "更新部署: 添加易数乾坤项目"
git push origin gh-pages

# 7. 切回 master
git checkout master
