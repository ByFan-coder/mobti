# ManBTI

一个纯静态的馒头工艺路线小测试。页面包含开始页、答题页和结果页，8 步选择会导向 24 种馒头结果，所有计分逻辑都在浏览器端完成，可以直接放进 GitHub 仓库并部署到 Vercel。

## 本地预览

直接打开 `index.html`，或使用任意静态服务器预览。

## 部署到 Vercel

1. 将本目录提交到 GitHub 仓库。
2. 在 Vercel 导入该仓库。
3. Framework Preset 选择 `Other` 或保持默认静态配置。
4. Build Command 留空，Output Directory 留空或填写 `.`。
5. 部署完成后，在 Vercel 的 Domains 设置中绑定你的域名。

## 自定义

- 题目、选项和计分逻辑在 `script.js`。
- 像素馒头图集在 `assets/mantou-types.png`。
- 页面样式在 `style.css`。
