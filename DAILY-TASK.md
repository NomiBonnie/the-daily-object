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
│   └── data.ts          # 所有内容数据（designObjects 数组）
├── public/
│   └── images/          # 作品图片
├── DAILY-TASK.md        # 本文档
└── ...
```

---

## 数据格式

在 `src/data.ts` 的 `designObjects` 数组中添加条目：

```typescript
{
  id: 11,  // 递增，检查现有最大 id + 1
  date: "02-20",  // MM-DD 格式
  title: {
    en: "English Title",
    zh: "中文标题"
  },
  designer: {
    en: "Designer Name",
    zh: "设计师名"
  },
  year: 1969,  // 作品年份
  image: "/images/filename.jpg",  // 相对路径
  description: {
    en: "English description...",
    zh: "中文描述..."
  },
  dateConnection: {
    en: "Why this date matters...",
    zh: "为什么是今天..."
  },
  category: "industrial"  // 见下方分类
}
```

---

## 分类（轮换使用）

| category | 领域 | 示例 |
|----------|------|------|
| `industrial` | 工业设计 | 椅子、灯具、汽车、电子产品 |
| `architecture` | 建筑 | 建筑作品、室内设计 |
| `fashion` | 时尚 | 服装、配饰、珠宝 |
| `graphic` | 平面设计 | 海报、书籍、品牌、字体、Logo |
| `art` | 艺术 | 绘画、雕塑、装置 |
| `film` | 电影 | 经典电影、导演作品、电影海报 |
| `music` | 音乐 | 专辑封面、音乐人视觉、演出设计 |
| `product` | 产品设计 | 日用品、工具 |

**原则**：尽量轮换领域，避免连续几天都是同一类。

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
# ⚠️ 是"今天"，不是"明天"！
$today = (Get-Date).ToString("MM-dd")
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
```powershell
Invoke-WebRequest -Uri "URL" -OutFile "public/images/filename.jpg" -Headers @{"User-Agent"="Mozilla/5.0"}
```

### 6. 写内容并更新代码
编辑 `src/data.ts`，在 `designObjects` 数组末尾添加新条目。

### 7. 部署
```powershell
cd C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object
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
| 02-04 | 汝窑天青釉 | Song Dynasty Imperial Kilns | industrial |
| 02-05 | Bakelite | Leo Baekeland | industrial |
| 02-06 | Marina Bay Sands | Moshe Safdie | architecture |
| 02-07 | Pinocchio | Walt Disney Studios | art |
| 02-08 | Self-Portrait on the 6th Wedding Anniversary | Paula Modersohn-Becker | art |
| 02-09 | Mercedes 35 HP | Wilhelm Maybach | industrial |
| 02-10 | UP5 & UP6 | Gaetano Pesce | industrial |
| 02-11 | The Horn of Plenty | Alexander McQueen | art |
| 02-12 | Self-Portrait with Champagne Glass | Max Beckmann | art |
| 02-13 | Panton Chair | Verner Panton | industrial |
| 02-14 | I ♥ NY | Milton Glaser | art |
| 02-15 | HOPE Poster | Shepard Fairey | art |
| 02-16 | Arco Lamp | Achille Castiglioni | industrial |
| 02-17 | Vessel | Thomas Heatherwick | architecture |
| 02-18 | Wisteria Lamp | Louis Comfort Tiffany | art |
| 02-19 | Bird in Space | Constantin Brâncuși | art |
| 02-20 | Salk Institute for Biological Studies | Louis Kahn | architecture |
| 02-21 | Polaroid Land Camera Model 95 | Edwin Land | industrial |
| 02-22 | Cleopatra's Needle | Thutmose III / Ancient Egypt | architecture |
| 02-23 | Gutenberg Bible | Johannes Gutenberg | graphic |
| 02-24 | Nike Air Force 1 | Bruce Kilgore / Phil Knight | industrial |

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
