@AGENTS.md

# Scout Project Context

## 项目概述

**Scout — Cultural Travel Companion**：一个书影音旅行 planner + 陪伴 demo，从 travelpal 项目期间积累的「文艺逼旅行 planner PRD」（CulturePath）独立打捞重做。

**一句话定位（产品级）**：
> *Scout — the AI companion who gets your taste in films, music, and books. Plans with you. Walks with you. Writes with you.*

**Hero 文案（Landing 主标）**：
> *Read a city through the films, music, and books that shaped it.*

**解决的核心需求**：
文艺爱好者想要一个**有品味的同行者**——不是工具型 OTA，不是冷冰冰的通用 AI。OTA 把旅游电商化、通用 AI 没有文化品味，Scout 填的是「懂我」这个空缺。按你热爱的电影/音乐/书籍线索陪你读懂一座城。

---

## 与 travelpal 的关系

**Scout 是 travelpal 的"文化堂表亲"**——同栈、同 phone-frame demo 模式，但定位/调性/内容线全独立。

| 维度 | TravelPal | Scout |
|---|---|---|
| 主语 | "场" — 旅行的 AI 空间 | "旅伴" — 懂书影音的同行者 |
| 钩子 | 跨语言、多人协作、语音翻译 | 文化品味、艺术作品锚点 |
| 调性 | 明快出行感（emerald/teal） | 文艺纸质感（indigo + 书影音三色） |
| 字体 | Geist Sans | Inter + Fraunces serif |
| 内容线 | Chiang Mai 自由行 | Paris · *Midnight in Paris* + Jazz |
| Pitch 对象 | VocalBeats 广州团队 | 暂无明确 pitch 对象，独立 demo |

travelpal 项目背景见 `/data/workspace/travelpal/CLAUDE.md` 和 `TravelPal-Product-Vision.md`。
原始 PRD（CulturePath）在 `/data/workspace/travelpal/references/文艺逼的旅行planner PRD.md`，但 Scout **不照搬** PRD，PRD 是 14 节的全量产品文档；Scout 是精简 demo。

---

## 比 PRD 精简的关键决策

| PRD（CulturePath） | Scout demo |
|---|---|
| 5 个 Tab（Discover/Plan/Trip/Journal/Profile） | **3 个 Tab：Plan / Trip / Journal** |
| 多城市、多主题、文化人格问卷 | **一条 Paris 一日种子路线** |
| 真实 IMDb/Letterboxd/Spotify SDK 集成 | **mock UI + 真实链接占位**（按钮装样子，不真接） |
| 14 节 PRD 文档 | **README 一页讲清** |
| 完整 onboarding + 持久化 + i18n | 全部 mock，纯 web demo |

---

## 技术栈（Scout）

- **Next.js 15.5.19**（App Router）— 升级自 15.0.4，修 CVE-2025-55182
- **React 18.3.1**
- **Tailwind CSS 3.4.17**（不是 travelpal 的 Tailwind 4，更稳定）
- **TypeScript 5.7**（strict）
- **lucide-react** 图标
- **Inter + Fraunces** Google Fonts
- 部署：**Netlify** + `@netlify/plugin-nextjs`
- ⚠️ **Node.js 需要 ≥ 18.18**（Next 15 最低要求）。本机 Node 18.12.0 跑不起来 dev/build，但 typecheck 干净；Netlify 用 Node 20（写在 `netlify.toml`）

---

## 项目结构

```
/data/workspace/scout/
├── package.json              # next 15.5.19, react 18, tailwind 3
├── netlify.toml              # NODE_VERSION=20, @netlify/plugin-nextjs
├── tailwind.config.ts        # paper/ink/scout/film/music/book tokens
├── README.md                 # 一页讲清产品 + 跑起来命令
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Inter + Fraunces 加载
│   │   ├── globals.css       # Tailwind v3 + 设计 tokens
│   │   ├── page.tsx          # Landing (/)
│   │   └── app/page.tsx      # Interactive demo (/app)
│   ├── components/
│   │   ├── ui/               # Button, Card, Tag (原子层)
│   │   ├── landing/          # Hero, HowItWorks, SampleItinerary, ScoutIntro, CTA
│   │   ├── PhoneFrame.tsx    # 390x844 phone shell
│   │   ├── TabBar.tsx        # 3 tab: Plan/Trip/Journal
│   │   └── demo/             # PlanScreen, TripScreen, JournalScreen + 共用 AnchorCard/ChatBubble/ItineraryTimeline
│   ├── lib/                  # sample-persona, sample-itinerary, sample-chat, sample-journal
│   └── types/index.ts        # CulturalPersona/Itinerary/Stop/Anchor/Journal
```

---

## 设计系统（关键 tokens）

```css
/* tailwind.config.ts colors */
paper:     #FAF7F2  /* 暖米色,纸张感,主背景 */
ink:       #0E0E10  /* 深墨,标题/正文 */
ink-muted: #5C5C66  /* 次要文字 */
rule:      #E6E1D7  /* 分割线,书页边 */
scout-600: #4F46E5  /* indigo,CTA / Scout 链接 */
film:      #D97706  /* amber,电影锚点 */
music:     #E11D48  /* rose,音乐锚点(避开 travelpal 的 emerald) */
book:      #4D7C0F  /* sage green,书籍锚点 */
```

字体：
- 正文 Inter
- Hero/章节标题 Fraunces serif italic（"文集感"）

---

## Landing 5 个 section

1. **Hero** — `Read a city through the films, music, and books...` + Try the demo CTA
2. **HowItWorks** — 三栏 Plan / Walk / Write，每栏一个动词
3. **SampleItinerary** — Paris 一日 5 站横向滚动卡（Café de Flore / Shakespeare and Co / Pont Neuf / Musée Rodin / Le Caveau de la Huchette）
4. **ScoutIntro** — Scout AI 角色 + 文化人格 slider 示意（Film 75 / Music 60 / Book 80）
5. **CTA** — `Bring your taste. Scout brings the city.`

---

## Demo 三阶段（/app phone-frame）

### 1. PlanScreen — 行前共创
- Scout chat 自动 typewriter 回放 5 轮（在 `lib/sample-chat.ts`）
- 最后一轮内嵌 ItineraryTimeline 卡片
- 底部 voice + 文字 composer（display only）
- 可点 "Replay" 重放

### 2. TripScreen — 行中伴游（停在 Pont Neuf）
- Now visiting hero card
- Geofence pill `You're here — audio ready` 带 ping 动画
- Brief 30s / Deep dive 3min 切换
- 三类 AnchorCard 全场展示：
  - 🎬 *Midnight in Paris*（IMDb 7.7 + Letterboxd 节选）
  - 🎵 *La Vie en rose*（30s preview 按钮）
  - 📖 *The Sun Also Rises*（Goodreads 节选）
- 底部 Ask Scout / Capture

### 3. JournalScreen — 行后文集
- Diary / Essay / Letter 风格切换
- 3 章预生成内容（基于 Pont Neuf / Café / Le Caveau）
- 每章 Scout 引语 callout
- 底部 Share journal

---

## 当前状态 (2026-06-10)

### ✅ 已完成
- 项目初始化：36 个文件，Next 15.5.19 + Tailwind 3 + TS strict
- 5 个 landing section + 3 个 demo screen + 原子组件层
- TypeScript typecheck 干净
- Git commit + push 到 GitHub
- 修复了 Netlify 第一轮 build 失败：
  - JSX 实体转义 6 处（&apos;, &ldquo;, &rdquo;）
  - Next.js 升级 15.0.4 → 15.5.19（CVE-2025-55182 安全补丁）

### 🔗 关键链接
- **GitHub**: https://github.com/OhMyJennie/Scout
- **Netlify**: 用户已在 dashboard 通过 GitHub OAuth 连接，正在部署。具体 URL 待 build 成功后填充
- **本地路径**: `/data/workspace/scout`

### Git 历史
```
1e61761 Fix Netlify build: escape JSX entities + upgrade Next 15.5.19
8c84b9e Initial Scout demo — cultural travel companion
```

### ⏸️ 待确认
- Netlify 第二轮 build 是否成功（用户需告知）
- Live URL 拿到后要回填到 README

---

## 决策记录（这次会话敲定的）

| 决策点 | 选择 | 理由 |
|---|---|---|
| 一句话定位走哪条路 | "懂书影音的旅伴"（companion 定位） | 比"读懂一座城"（认知工具）和"把旅行写成手稿"（输出物）更合"陪伴感"主线 |
| Demo 范围 | 完整三阶段微缩骨架 | 比"只做 landing+静态范例"更能讲故事；比"只做行前一段"更完整闭环 |
| 技术栈 | Next.js 15 + React 18 + Tailwind 3 | 比 travelpal 的 Next 16 + Tailwind 4 更稳定，Node 18+ 能 build；不需要 1:1 拷代码，但模式可平移 |
| 路由 | `/` landing + `/app` demo | 沿用 travelpal 的两入口模式 |
| Tab 数 | 3 而非 PRD 的 5 | Plan/Trip/Journal 已覆盖三阶段闭环，Discover/Profile 不是 demo 重点 |
| 城市种子 | Paris·Midnight in Paris+Jazz | PRD 里就推荐巴黎，且 Hemingway/Piaf/Allen 三种艺术作品自然汇聚 |
| 部署路径 | GitHub 连接 + 自动部署（vs CLI 一次性） | CI/CD 闭环，每次 push 自动重建 |
| 项目位置 | `/data/workspace/scout`（与 travelpal 平级） | 干净独立 repo，不混入 travelpal 子目录 |
| GitHub repo | Public | demo / portfolio 性质，公开可分享 |

---

## 设计原则

- **场景**：精简 PRD，不照搬。一条路线讲清产品气质 > 多城市铺底
- **demo 优先**：所有 API（IMDb / Spotify / Goodreads）都 mock，先把"懂我"这件事讲清楚
- **文艺纸质感**：paper 暖米色 + ink 深墨 + Fraunces serif italic 是 Scout 的视觉锚点，区别于 travelpal 的明快出行感
- **三阶段闭环**：Plan / Walk / Write 这三个动词是 Scout 的核心叙事，比"行前/行中/行后"更主动
- **不做**：booking / 实时定位 / 用户登录持久化 / i18n / dark mode / 真 LLM 调用 / 真音乐播放

---

## 下次接手要点

### 如果 Netlify 还失败
1. 让用户贴完整 build log 的 error 段落
2. 常见类型：
   - ESLint 还有未转义的 entity（继续 grep `>[^<]*['\"][^<]*<`）
   - Next 版本被禁（再升 patch）
   - 字体 fetch 超时（Inter/Fraunces 偶发）
3. 重要：**别在本地修而不 push**——Netlify build 用的是 GitHub 上的 commit

### 如果 Netlify 成功
1. 拿到 `<random>.netlify.app` URL
2. 用户可以在 Netlify dashboard 改 site name 为 `scout-jennie` 之类
3. 更新 `README.md` 里 `Live demo: _coming once Netlify connect is done_` 占位为真实链接
4. push 一个新 commit，Netlify 自动重新部署，闭环跑通

### 后续可能扩展
- [ ] 真接 Anthropic SDK，让 PlanScreen 的 chat 流式生成（不再 typewriter 假回放）
- [ ] 真接 Spotify 30s preview SDK（Music anchor 真能播）
- [ ] 加 Cultural Persona onboarding 真问卷
- [ ] 加第二条城市路线（London? Tokyo? Kyoto?）
- [ ] 真生成 Journal（用户的 captures + LLM 写出来）

### 本机环境约束
- Node 18.12 < 18.18 = Next 15 dev/build 跑不起来
- 但 `npx tsc --noEmit` 和 git 操作都正常
- gh CLI 没装；GitHub HTTPS 通；SSH 走不出去（公司网段重定向到内部端口）
- `~/.git-credentials` 已有 oauth2 token（push 直接成功，不需要再要 PAT）

### 文件来源参考
- travelpal PhoneFrame/TabBar 模式：`/data/workspace/travelpal/src/components/demo/`
- 原始 CulturePath PRD（参考但不照搬）：`/data/workspace/travelpal/references/文艺逼的旅行planner PRD.md`
- TravelPal Vision（理解兄弟项目）：`/data/workspace/travelpal/TravelPal-Product-Vision.md`

---

## 会话管理约定

每次对话结束前更新：
- "当前状态" 章节（已完成/待确认）
- "Git 历史" 的 commit 列表
- 如果有重大产品决策变更，加到"决策记录"
- 如果遇到新坑，加到"下次接手要点"

---

*Last updated: 2026-06-10*
*Init session: travelpal pitch 后期，独立打捞 CulturePath PRD 想法做精简 demo*
