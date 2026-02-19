# The Daily Object — 每日更新任务指南

> **这是 cron job 的完整背景文档，每次运行前必读。**

## 项目概述

**网站**：https://nomibonnie.github.io/the-daily-object/  
**仓库**：https://github.com/NomiBonnie/the-daily-object  
**本地路径**：`C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object\`

**定位**：每天推荐一个世界级小众设计作品，必须与当天日期有关联。

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
$tomorrow = (Get-Date).AddDays(1).ToString("MM-dd")
```

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
- 日期关联是否明确可验证
- 是否足够"世界级"
- 领域是否与最近几天不同
- 是否能找到好图片

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
git push
```

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
| 02-10 | Deep Blue | IBM | software |
| 02-11 | The Horn of Plenty | Alexander McQueen | fashion |
| 02-12 | Self-Portrait with Champagne Glass | Max Beckmann | art |
| 02-13 | Panton Chair | Verner Panton | industrial |
| 02-14 | Heart Chair | Verner Panton | industrial |
| 02-15 | Snoopy Lamp | Achille Castiglioni | industrial |
| 02-16 | IBM Logo | Paul Rand | graphic |
| 02-17 | Tokyo 1964 Olympics Posters | Yusaku Kamekura | graphic |
| 02-18 | Arco Lamp | Achille & Pier Giacomo Castiglioni | industrial |
| 02-19 | Radio in a Bag | Daniel Weil | industrial |

> 添加新内容后，请更新此索引。

---

*最后更新：2026-02-19*
