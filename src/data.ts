export interface DesignObject {
  id: string
  date: string
  imageUrl: string
  thumbnailUrl?: string
  title: string
  subtitle?: string // 设计师 + 年份
  category: 'industrial' | 'software' | 'music' | 'art' | 'architecture'
  designer: string
  year?: string
  
  // 为什么是今天
  dateConnection: string
  
  // 设计师背景
  designerBio: string
  
  // 作品故事 + 为什么牛逼
  story: string
  
  // 设计的延展（对后世影响）
  legacy?: string
  
  // 对设计圈的意义
  significance?: string
}

export const designs: DesignObject[] = [
  {
    id: '1',
    date: '2026-02-19',
    imageUrl: '/the-daily-object/images/bird-in-space.png',
    thumbnailUrl: '/the-daily-object/images/bird-in-space.png',
    title: 'Bird in Space',
    subtitle: 'Constantin Brâncuși, 1923',
    category: 'art',
    designer: 'Constantin Brâncuși',
    year: '1923',
    
    dateConnection: '2月19日是 Brâncuși 的生日（1876年）。这一天也是罗马尼亚的官方纪念日 Brâncuși Day。',
    
    designerBio: `Constantin Brâncuși (1876-1957)，罗马尼亚人，被称为"现代雕塑之父"。

7岁放羊，9岁离家打工，18岁用废料自制了一把小提琴——被发现后送去学艺术。后来去巴黎，罗丹邀请他进工作室，他只待了两个月就离开，说：

"Nothing can grow under big trees."
大树底下长不出东西。

然后他开创了自己的风格。`,
    
    story: `鸟没有翅膀、没有羽毛、没有眼睛。只有一根流线型的形态，像一滴拉长的水滴。

Brâncuși 说他雕刻的不是鸟的外形，而是"飞翔的本质"。

他亲自打磨青铜表面，抛光到镜面反射。光线在曲面上流动，让静止的雕塑看起来像在移动。

1926年，摄影师 Edward Steichen 买了一件 Bird in Space 运到美国。海关拒绝认定它是艺术品——说这是个工业零件，要收关税。官司打到法院。法官最终判定：艺术不必是对自然的写实模仿，可以是一个抽象概念——比如"飞翔"本身。

这个判决确立了一个重要原则：抽象艺术也是艺术。`,
    
    legacy: `• Apple 设计语言：Jony Ive 多次提到 Brâncuși 对他的影响——简洁、材料真实、形式服从本质
• 航空航天：这个流线型早于空气动力学的系统研究，后来被证明是近乎完美的低阻力形态  
• 现代家具：从 Noguchi 茶几到北欧设计，"less is more"的源头之一`,
    
    significance: `Brâncuși 证明了：雕塑可以不模仿现实；材料本身就是语言；底座可以是作品的一部分。

他的工作室（现在在蓬皮杜中心旁边原样重建）是现代艺术史上最重要的空间之一。`
  },
]
