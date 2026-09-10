# AGENTS.md

## 工作流约定

- 每次修改代码后必须 commit + push（触发 Cloudflare Pages 自动部署），不要留未提交改动。

## 项目概况

- Astro 静态单页站（仅 index + 404），纯英文，无 locale/分页。
- 域名：https://www.festivals-china.com（canonical/sitemap 首页不带尾斜杠，内页带）。
- `npm run build` 末尾自动执行 `node scripts/fix-sitemap-home.mjs`（sitemap 首页去尾斜杠）。

## 技术要点

- GTM/gtag 为延迟加载（load 后 3s 或首次交互注入），勿改回 head 内阻塞脚本。
- 字体仅用 latin 子集：Cormorant Garamond 600 + Outfit 400/500/600；新增字重需同步 BaseLayout 的 preload 列表。
- Hero `#countdown` 依赖 `min-w-[6.5em]` 防 CLS，改样式时保留。
- `public/sitemap.xml` 为手写跳板（指向 sitemap-0.xml），勿删除。
