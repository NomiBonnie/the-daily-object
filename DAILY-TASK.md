# The Daily Object — 每日更新任务指南

> **这是 cron job 的完整背景文档，每次运行前必读。**

## 项目概述

**网站**：https://nomibonnie.github.io/the-daily-object/  
**仓库**：https://github.com/NomiBonnie/the-daily-object  
**本地路径**：`C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object\`

**定位**：每天推荐一个世界级小众设计作品，必须与当天日期有关联。

### ⚠️ 更新后必做：验证 + 报告（Sam 要求 2026-02-23）

每次内容更新 push 后，必须：
1. 确认 `git push` 成功
2. 等 GitHub Actions 部署完成（约 1-2 分钟）
3. 用浏览器打开线上网站，确认新内容正确渲染
4. 给 Sam 发一份简报：今天的主题 + 线上状态 + 是否有问题

---

## 目录结构

```
the-daily-object/
├── src/
│   └── data.ts          # 所有内容数据（designs 数组）
├── public/
│   ├── images/          # 展示用图片（≤600KB 原图 / >600KB 压缩版）
│   └── images/full/     # 原图（lightbox 放大用，永远保留原图不压缩）
├── DAILY-TASK.md        # 本文档
└── ...
```

---

## 数据格式（⚠️ 2026-02-25 架构更新，必须严格遵守！）

在 `src/data.ts` 的 `designs` 数组中添加条目。

### TypeScript Interface

```typescript
export interface DesignObject {
  id: string                    // 字符串！日期数字如 '26'
  date: string                  // 'YYYY-MM-DD' 完整日期格式（不是 MM-DD！）
  imageUrl: string              // '/the-daily-object/images/filename.jpg'
  fullImageUrl?: string         // '/the-daily-object/images/full/filename.jpg'（原图，用于 lightbox）
  thumbnailUrl?: string         // '/the-daily-object/thumbnails/filename.jpg'（暂未使用）
  title: string                 // 中文标题
  title_en?: string             // 英文标题
  subtitle?: string             // 中文副标题：'设计师, 年份'
  subtitle_en?: string          // 英文副标题：'Designer, Year'
  category: 'industrial' | 'music' | 'art' | 'architecture' | 'graphic' | 'software' | 'fashion' | 'film'
  designer: string              // 设计师名（中文）
  year?: string                 // 年份字符串

  // 中文内容（必填）
  dateConnection: string        // 为什么是今天
  designerBio: string           // 设计师背景（支持 markdown，可多段）
  story: string                 // 作品故事（支持 markdown，可多段）
  legacy?: string               // 设计遗产/影响
  significance?: string         // 设计圈意义

  // 英文内容（必填！中英双语）
  dateConnection_en?: string
  designerBio_en?: string
  story_en?: string
  legacy_en?: string
  significance_en?: string
}
```

### 完整示例

```typescript
{
  id: '26',
  date: '2026-02-26',
  imageUrl: '/the-daily-object/images/example.jpg',
  fullImageUrl: '/the-daily-object/images/full/example.jpg',
  title: '中文作品名',
  title_en: 'English Title',
  subtitle: '设计师名, 1969',
  subtitle_en: 'Designer Name, 1969',
  category: 'industrial',
  designer: '设计师名',
  year: '1969',

  dateConnection: '为什么是今天...',
  designerBio: `设计师背景介绍...

支持多段落，用模板字符串。`,
  story: `作品故事...

**支持 markdown 加粗**`,
  legacy: '设计遗产...',
  significance: '设计圈意义...',

  dateConnection_en: 'Why this date...',
  designerBio_en: `Designer bio in English...`,
  story_en: `Story in English...`,
  legacy_en: 'Legacy...',
  significance_en: 'Significance...',
},
```

### ⚠️ 新架构关键差异（不要用旧格式！）

| 项目 | ❌ 旧格式 | ✅ 新格式 |
|------|----------|----------|
| id | 数字 `11` | 字符串 `'26'` |
| date | `"02-20"` (MM-DD) | `"2026-02-26"` (YYYY-MM-DD) |
| 数组名 | `designObjects` | `designs` |
| imageUrl | `"/images/file.jpg"` | `"/the-daily-object/images/file.jpg"` |
| title/description | `{ en: "...", zh: "..." }` 对象 | 扁平字段：`title`(中文) + `title_en`(英文) |
| 内容字段 | `description` 一个字段 | 拆分为 `designerBio` / `story` / `legacy` / `significance` |
| 副标题 | 无 | `subtitle` / `subtitle_en`（格式：设计师, 年份） |

### 图片文件（⚠️ 双份规则！）

1. **原图**永远放 `public/images/full/filename.jpg`（lightbox 放大用，不压缩）
2. **展示版**放 `public/images/filename.jpg`（页面卡片用）：
   - 原图 **≤ 600KB** → 直接复制原图，不压缩
   - 原图 **> 600KB** → 用 ffmpeg 压缩到 ~400-500KB（q:v 3，max 1200px 宽）
3. 文件名规则：小写、连字符，如 `panton-chair.jpg`

---

## 分类（轮换使用）

| category | 领域 | 示例 |
|----------|------|------|
| `industrial` | 工业设计 | 椅子、灯具、汽车、电子产品、日用品 |
| `architecture` | 建筑 | 建筑作品、室内设计 |
| `graphic` | 平面设计 | 海报、书籍、品牌、字体、Logo |
| `art` | 艺术 | 绘画、雕塑、装置 |
| `music` | 音乐 | 专辑封面、音乐人视觉、演出设计 |
| `software` | 软件/UI | 经典界面、交互设计 |
| `fashion` | 时尚设计 | 服装、配饰、珠宝、秀场设计 |
| `film` | 电影/舞台设计 | 电影美术、布景、视觉特效、舞台设计 |

**注意**：只有这 8 个 category 值，TypeScript 会校验。

**核心选题原则**：只要是**从设计美学角度出发**、**对人类/社会产生真正变化**的设计，都可以选。不限于传统工业设计——时尚、电影、字体、任何有足够影响力的设计领域都行。关键是：影响力大 + 故事有共鸣 + 从设计角度出发。

---

## ⚠️ 选题原则（非常重要！）

### 偏好
- ✅ **设计向** — 偏美学、形式、视觉的作品
- ✅ **设计圈影响大** — 在设计史上有地位的
- ✅ **美丽** — 好看的、有形式美的
- ✅ **设计与艺术的交汇** — 艺术品、装置、时尚都可以

### 避免
- ❌ **纯技术向** — 比如纯软件工程、纯算法的东西
- ❌ **功能优先、形式普通** — 功能厉害但不好看的
- ❌ **太冷门没有美学价值** — 除非有很强的设计意义

### 举例
- ✅ Panton Chair（工业设计经典，形式美）
- ✅ Alexander McQueen（时尚艺术融合）
- ✅ Paul Rand IBM Logo（平面设计里程碑）
- ✅ Arco Lamp（设计经典，形式突破）
- ⚠️ Deep Blue（技术向，设计意义较弱）— 这种可以有，但不要太多

**核心**：这是一个**设计日历**，不是科技史日历。选的东西要让设计师看了有共鸣。

---

## 日期关联类型（重要！）

**不只是生日！** 可以是：

- 🎂 设计师生日
- ⚰️ 设计师逝世纪念日
- 🚀 产品发布/上市日
- 🏆 获奖日期
- 🎨 首次展出日
- 🏛️ 博物馆收藏日
- 🏢 品牌/公司成立日
- 📅 相关历史事件日

**必须有明确、可验证的日期关联**，不能编造。

---

## 图片来源（优先级）

1. **博物馆官网**：MoMA、Tate、V&A、Met、Design Museum、Vitra
2. **Wikimedia Commons**：CC 授权，免费使用
3. **品牌官网**：官方产品图
4. **设计奖项网站**：iF、Red Dot、D&AD

**下载注意**：
- 添加 User-Agent：`-Headers @{"User-Agent"="Mozilla/5.0"}`
- 保存到 `public/images/`
- 文件名用小写、连字符：`panton-chair.jpg`
- 如果一个来源失败，换另一个

**禁止**：
- ❌ AI 生成图片
- ❌ 来源不明的图片
- ❌ 有水印的图片

---

## 内容质量标准

### 标题
- 简洁有力
- 中英文都要有

### 描述（重要！）
不是流水账，要讲**设计背后的故事**：

✅ 好的描述：
> "The chair that defined a decade. Verner Panton spent 8 years perfecting the manufacturing process, working through over 100 prototypes before achieving the world's first single-form injection-molded plastic chair."

❌ 差的描述：
> "This is a famous chair designed by Verner Panton. It is made of plastic and comes in many colors."

**要包含**：
- 设计背景/动机
- 独特之处
- 对设计史的影响
- 有趣的细节/故事

### 日期关联
解释为什么选在这一天，让读者有"原来如此"的感觉。

---

## 执行流程

### 1. 确定日期
```powershell
# ⚠️ 是"今天"，不是"明天"！用 YYYY-MM-DD 完整格式！
$today = (Get-Date).ToString("yyyy-MM-dd")
$todayShort = (Get-Date).ToString("MM-dd")  # 用于 commit message
```
**⚠️ 只添加今天的条目，绝对不要添加明天或未来日期的内容！**

### 2. 检查是否已有内容
读取 `src/data.ts`，搜索该日期是否已存在。如果有，报告"已存在"并结束。

### 3. 研究当天设计事件
用浏览器搜索：
- `"February 20" designer born`
- `"February 20" product launched`
- `"02-20" design history`
- `famous designer birthday February 20`

### 4. 选择作品
考虑因素：
- **图片质量是第一优先级** — 找不到好图就换作品，别死磕
- 日期关联是否明确可验证
- 是否足够"世界级"
- 领域是否与最近几天不同

**⚠️ 图片找不到时的策略：**
- ❌ 错误：反复搜索同一个作品的不同图片来源
- ✅ 正确：换一个有高质量图片的设计作品，哪怕日期关联弱一点
- **有好图的弱关联作品 > 没好图的强关联作品**

**⚠️ 图文一致性检查（发布前必做！最高优先级！）：**

图片必须与以下三项**全部匹配**，任何一项不符就不能发布：
1. **标题匹配** — 图片展示的必须是标题所说的那个作品
2. **故事匹配** — 文字讲的是什么，图片就得是什么。讲插画→配插画图；讲建筑→配建筑照片；讲雕塑→配雕塑照片
3. **类别匹配** — 工业设计配实物照，绘画配画作图，建筑配建筑照片

**不匹配怎么办？**
- 先尝试换图（找到匹配的图片）
- 找不到匹配的图 → **直接换主题**，不要死磕
- ❌ 绝不允许图文不一致的内容上线

### 5. 下载图片

**⚠️ 使用自动化脚本（推荐）：**
```powershell
# 一条命令搞定：下载原图到 full/ → 检查大小 → 自动决定是否压缩 → 复制到 images/
.\scripts\download-image.ps1 -Url "https://example.com/photo.jpg" -Name "designer-work.jpg"
```

脚本自动处理：
- 下载原图到 `public/images/full/`（lightbox 用）
- 检查尺寸比例（超宽会警告）
- ≤600KB 直接复制到 `public/images/`，>600KB 用 q:v 3 压缩到 ~500KB

**手动操作（备用）：**
```powershell
# Step 1: 下载原图
Invoke-WebRequest -Uri "URL" -OutFile "public/images/full/filename.jpg" -Headers @{"User-Agent"="Mozilla/5.0"}
# Step 2: 检查大小，>600KB 则压缩
$size = (Get-Item "public/images/full/filename.jpg").Length / 1KB
if ($size -gt 600) {
    ffmpeg -i "public/images/full/filename.jpg" -vf "scale='min(1200,iw)':-1" -q:v 3 "public/images/filename.jpg" -y
} else {
    Copy-Item "public/images/full/filename.jpg" "public/images/filename.jpg"
}
```

**规则：**
- `public/images/full/` → 永远是原图（lightbox 放大用）
- `public/images/` → 页面展示用（≤600KB 直接用原图，>600KB 压缩到 ~500KB）
- **不要用 q5 以上的压缩**——Sam 确认 q5 画质损失太大，最多用 q3

### 6. 写内容并更新代码
编辑 `src/data.ts`，在 `designs` 数组末尾添加新条目。

### 7. 部署

**⚠️ 使用自动化脚本（推荐）：**
```powershell
cd C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object
.\scripts\publish.ps1 -Message "Add MM-DD: Title"
```

脚本自动执行：变更图片验证（大小/比例/双份检查）→ TypeScript 检查 → Vite 构建 → git commit + push → 等 90s → 验证线上。

**手动操作（备用）：**
```powershell
cd C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object
npx vite build   # 先构建确认无报错
git add .
git commit -m "Add MM-DD: Title"
git push origin main
```
**⚠️ 必须 `git push origin main`！** 这个项目用 GitHub Actions 部署（不是 gh-pages 分支），push main 会自动触发 build + deploy。`npx gh-pages` 无效！

### 8. 验证
等 2 分钟，检查：
- 网站是否显示新内容
- 图片是否加载正常

---

## 常见问题

### 图片下载失败
- 检查 URL 是否正确
- 添加 User-Agent header
- 换一个来源

### Git push 失败
- 检查是否有未提交的更改
- 检查网络连接

### 找不到当天的设计事件
- 扩大搜索范围（不只是生日）
- 查看该日期的产品发布、展览开幕等
- 如果实在找不到，报告并建议跳过

---

## PowerShell 注意事项

- 用 `;` 连接命令，不是 `&&`
- 路径用反斜杠 `\` 或正斜杠 `/` 都可以
- 字符串用双引号 `""`

---

## 浏览器使用规则

⚠️ **每次操作完必须关闭标签页！**

```
browser action=open → 用 → browser action=close
```

不关闭会导致 Chrome 堆积卡死。

---

## 完成后报告模板

```
## The Daily Object 更新完成

**日期**：MM-DD
**作品**：[标题]
**设计师**：[姓名]
**年份**：[年份]
**日期关联**：[为什么是今天]
**分类**：[category]

**状态**：
- [x] 图片下载
- [x] 内容编写
- [x] 代码更新
- [x] 部署成功
- [x] 验证通过

**遇到的问题**：无 / [描述问题]
```

---

## 已有内容索引

| 日期 | 作品 | 设计师 | 分类 |
|------|------|--------|------|
| 02-01 | Rolleiflex 双反相机 | Vivian Maier | art |
| 02-02 | Grand Central Terminal | Reed & Stem, Warren & Wetmore | architecture |
| 02-03 | Stool 60 | Alvar Aalto | industrial |
| 02-04 | 机械元素 (Léger) | Fernand Léger | art |
| 02-05 | Bakelite | Leo Baekeland | industrial |
| 02-06 | Marina Bay Sands | Moshe Safdie | architecture |
| 02-07 | Pinocchio | Walt Disney Studios | art |
| 02-08 | 威尼斯之石 (Ruskin) | John Ruskin | architecture |
| 02-09 | Mercedes 35 HP | Wilhelm Maybach | industrial |
| 02-10 | UP5 & UP6 | Gaetano Pesce | industrial |
| 02-11 | The Horn of Plenty | Alexander McQueen | art |
| 02-12 | 牛顿纪念堂 (Boullée) | Étienne-Louis Boullée | architecture |
| 02-13 | Panton Chair | Verner Panton | industrial |
| 02-14 | I ♥ NY | Milton Glaser | art |
| 02-15 | HOPE Poster | Shepard Fairey | art |
| 02-16 | Arco Lamp | Achille Castiglioni | industrial |
| 02-17 | Vessel | Thomas Heatherwick | architecture |
| 02-18 | Wisteria Lamp | Louis Comfort Tiffany | art |
| 02-19 | Bird in Space | Constantin Brâncuși | art |
| 02-20 | Salk Institute | Louis Kahn | architecture |
| 02-21 | Polaroid Land Camera Model 95 | Edwin Land | industrial |
| 02-22 | Gill Sans 字体 | Eric Gill | graphic |
| 02-23 | Gutenberg Bible | Johannes Gutenberg | graphic |
| 02-24 | Nike Air Force 1 | Bruce Kilgore | industrial |
| 02-25 | Royal Crescent | John Wood the Younger | architecture |
| 02-26 | Levi's 501 牛仔裤 | Levi Strauss | fashion |

> 添加新内容后，请更新此索引。

---

## ⚠️ 关键规则（血泪教训）

1. **只添加今天的条目**，绝不提前添加明天的。cron 每天 08:00 跑，添加当天内容。
2. **只用真实照片**，不用 DALL-E/AI 生成。图源优先级：
   - **Unsplash API**（首选）：config 在 `~/.config/unsplash/config.json`，用法：`Invoke-RestMethod -Uri "https://api.unsplash.com/search/photos?query=xxx&per_page=5&client_id=$($config.access_key)"`，下载用 `urls.regular`（1080px）
   - **Pexels API**（备用）：config 在 `~/.config/pexels/config.json`，用法：`Invoke-RestMethod -Uri "https://api.pexels.com/v1/search?query=xxx&per_page=5" -Headers @{Authorization=$config.api_key}`，下载用 `src.large`
   - **Wikimedia Commons API**（第三选择）：免费无需 key，但下载时必须用 User-Agent `DailyObjectBot/1.0 (NomiBonnie@hotmail.com)` 否则会 429 限流
3. **部署用 `git push origin main`**，不用 `npx gh-pages`（项目用 GitHub Actions 部署）。
4. **图文一致性 > 一切**：图片必须和标题、故事内容、类别全部匹配。找不到匹配的图就换主题，绝不允许图文不一致上线。
5. **找不到好图就换主题**：尝试 3 次找图失败 → 立即换一个有好图的设计作品，别死磕。
6. **必须跟设计有关**：选的人/作品必须是设计师或设计作品（工业设计/建筑/UI/产品设计/平面设计），纯文学、纯艺术、纯插画不算。
7. **category 必须准确**：industrial / architecture / art / music / graphic / software，选错 = 不专业。

---

## ✅ Sub-Agent 发布前强制自检清单

**每次发布前必须逐项确认，任何一项不通过就不能发布：**

| # | 检查项 | 说明 |
|---|--------|------|
| 1 | 设计相关性 | 这个人/作品跟"设计"有直接关系吗？不是纯文学/纯艺术？ |
| 2 | 图文一致性 | 图片展示的内容 = 标题 = 故事讲的 = category？ |
| 3 | 图片质量 | 图片清晰、好看、能代表这件作品？不是人物肖像照？ |
| 4 | 内容深度 | 故事有设计洞察，不是维基百科搬运？ |
| 5 | 只加今天 | 确认只添加了今天的 entry，没有多加或少加 |
| 6 | 构建成功 | git push 后确认 GitHub Actions 构建通过（conclusion: success） |
| 7 | 网站验证 | fetch 网站确认页面可访问、标题正确 |

| 8 | 图片视觉冲击力 | 图片是否好看、有冲击力？在手机上看效果如何？（详见下方图片审美标准） |
| 9 | 选题经典性 | 设计师/作品是否足够经典？设计师看了是否有共鸣？（详见下方选题审美标准） |
| 10 | 故事性 | 作品背后有好故事吗？读完会想分享给别人吗？平平无奇的不要选。产品故事 > 人物故事 |

**如果第 1-3 项不通过 → 换主题重做，不要硬上。**
**如果第 8-9 项不通过 → 也要换图/换主题，"能用"≠"好用"。**

---

## 🎨 图片审美标准（2026-02-25 Sam 审查总结）

> 这些是 Sam 亲自审查后指出的问题，代表他的审美标准。**每次选图必须对照检查。**

### ❌ 常见图片问题（必须避免）

| 问题类型 | 案例 | 为什么不行 |
|----------|------|-----------|
| **图文不一致** | OED 配了圣经内页；Stool 60 配了布艺扶手椅 | 最基本的错误，图片必须是文字讲的那个东西 |
| **颜色/特征不对** | 汝窑"天青釉"配了深橄榄绿瓶子 | 作品最核心的视觉特征（天青色）都没体现 |
| **太暗/看不清** | Grand Central 纯黑白剪影 | 冲击力为零，看不到建筑的宏伟细节 |
| **角度不典型** | Vessel 内部仰拍楼梯 | 没展示 Vessel 最标志性的蜂巢外形，换谁都不认识 |
| **比例不适合手机** | Royal Crescent 超宽全景（约 3:1） | 手机上显示很小，看不清细节 |
| **不够美/无冲击力** | Stool 60 黑白现代椅子 | 即使图是对的，不好看也不行 |

### ✅ 好图片的标准

1. **一眼认出** — 图片必须展示作品最标志性的特征/角度，让认识它的人一眼就能认出
2. **视觉冲击力** — 构图、色彩、光线要有美感，不是随便一张照片
3. **手机友好** — 比例最好是 **3:4、4:5 或 1:1**，避免超宽横幅（>2:1）。竖版优于横版
4. **清晰明亮** — 避免过暗、过灰、模糊的照片
5. **展示整体** — 建筑要看到全貌，产品要看到完整形态，不要只拍局部/内部
6. **有氛围** — 最好的图片不只是"拍到了"，还能传递作品的精神（温暖/庄严/前卫等）

### 📐 图片比例检查

下载图片后，检查比例：
- ✅ **竖版**（3:4, 4:5, 2:3）— 手机最佳
- ✅ **方形**（1:1）— 手机友好
- ⚠️ **标准横版**（3:2, 16:9）— 可以接受
- ❌ **超宽横幅**（>2:1 的全景）— 手机上太小，必须换

---

## 🎯 选题审美标准（2026-02-25 Sam 审查总结）

### ❌ 不该选的（已踩坑）

| 问题 | 案例 | 为什么不行 |
|------|------|-----------|
| **与设计关联太弱** | 牛津英语词典 — 是排版/信息设计，但太"学术"了 | 设计师看了没共鸣，不觉得"这跟我有关" |
| **太小众不经典** | Frank Frazetta Death Dealer — 幻想插画 | 太 niche，不是设计圈公认的经典。只有特定圈子认识 |

### ✅ 好选题的标准

1. **设计圈公认** — 选的人/作品在设计史上有公认地位，不是只有某个亚文化才知道
2. **设计师共鸣** — 产品设计师、建筑师、平面设计师看到会觉得"这个我知道"或"这个我应该知道"
3. **美学价值高** — 作品本身好看、有形式美感，让人想点进去看
4. **跨领域影响** — 最好的选题不只影响了自己的领域，还影响了整个设计文化
5. **有故事性** ⭐ — 作品背后要有好故事，便于传播、也让文章更有可读性。故事性分两层：
   - **作品/产品的故事**（更重要）：诞生过程有戏剧性？解决了什么问题？颠覆了什么常规？有什么意想不到的细节？
   - **设计师的故事**（加分项）：人生经历有故事感？跟作品的关系有趣？
   - ❌ 没故事性 = 平平无奇、说完"这是谁在哪年做的"就没了
   - ✅ 有故事性 = 读完会觉得"原来还有这回事"，想分享给别人

### 经典性判断标准（从高到低）

- ⭐⭐⭐⭐⭐ **设计史教科书级**：Eames、Aalto、Dieter Rams、Le Corbusier、Apple
- ⭐⭐⭐⭐ **设计圈公认**：Panton Chair、Arco Lamp、Bauhaus、Zaha Hadid
- ⭐⭐⭐ **行业知名**：某领域内的重要人物/作品，非设计师可能不知道但设计师都知道
- ⭐⭐ **小众但有趣**：有故事性，但知名度有限 — 可以偶尔出现，不要太多
- ⭐ **太小众** — 避免。Frank Frazetta、纯插画师、纯艺术家（除非对设计有直接影响）

**底线：每个选题至少要 ⭐⭐⭐ 级别。**

*最后更新：2026-02-25*

---

## 📚 必读参考文档

每次做 Daily Object 之前，除了本文档，还要读：

1. **`memory/daily-object-lessons-0225.md`** — 2026-02-25 大修日的完整经验总结（踩坑案例、选图铁律、技术经验、Sam 的审美哲学）
2. **`memory/design-checklist.md`** — 六大设计检查维度（间距/对齐/一致性/颜色/文案/响应式）

这两份文档是从实战中总结的，比任何规则都具体。
