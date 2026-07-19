# Personal Website

基于 [LuN3cy/LuN3cy](https://github.com/LuN3cy/LuN3cy) 模板的个人作品集网站，页面结构一致，内容可完全自定义。

## 快速开始

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 输出到 dist/
npm run preview  # 预览构建结果
```

## 修改内容指南

| 改什么 | 文件 |
|--------|------|
| **站点名称、GitHub、社交链接** | `src/config/site.ts` |
| 首页大标题、简介 | `src/data/home.ts` |
| 联系信息、邮箱 | `src/data/contact.ts` |
| 作品（摄影/视频/设计/开发） | `src/data/photography_projects.ts` 等 |
| 摄影画廊 | `src/data/photography.ts`（key 对应作品 id） |
| 文章 | `src/data/articles.ts` |
| 教育经历 | `src/data/education.ts` |
| 音乐 | `src/data/music.ts` + `public/music/` |
| 导航菜单 | `src/data/navigation.ts` |
| 部署路径 | `src/config/site.ts` → `basePath` |

## 部署

推送到 GitHub 后，在仓库 Settings → Pages → Source 选择 **GitHub Actions**，push 到 `main` 即可自动部署。

- 自定义域名：将 `basePath` 设为 `'/'`
- GitHub Pages 子路径（如 `/my-site/`）：将 `basePath` 设为 `'/my-site/'`
